import React, { useState, useEffect } from 'react';
import axios from 'axios';
import L, { LatLngTuple, LatLngExpression } from 'leaflet';

interface Coordinates {
  latitude: number;
  longitude: number;
  trip_id: number;
}
const MyMap: React.FC = () => {
  const [trip, setTrip] = useState<Coordinates[]>([]);
  const [step, setStep] = useState<number>(5);
  const mapRef = React.useRef<L.Map | null>(null);

  useEffect(() => {
    const fetchTripWithID = async () => {
      try {
        const response = await axios.get<Coordinates[]>("http://localhost:4000/trip");
        setTrip(response.data);
        console.log("Received trip data:", response.data);
        console.log("Received trip data length:", response.data.length);
      } catch (error) {
        console.log("Error fetching trip data:", error);
      }
    };

    fetchTripWithID();
  }, []);

  useEffect(() => {
    if (trip.length === 0) return;

    if (!mapRef.current) {
      const map = L.map('map').setView([33.821062, -84.345405], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
      mapRef.current = map;
    }

    const createPairs = (data: Coordinates[]) => {
      const pairs: string[] = [];
      for (let i = 0; i < data.length; i += step) {
        const { latitude, longitude } = data[i];
        pairs.push(`${longitude},${latitude}`);
      }
      return pairs;
    };

    const createPairsmini = (data: Coordinates[]) => {
      const pairs: string[] = [];
      for (let i = 0; i < data.length; i += 1) {
        const { latitude, longitude } = data[i];
        pairs.push(`${longitude},${latitude}`);
      }
      return pairs;
    };


    const lineArray: LatLngExpression[] = trip.map((coord) => [
      coord.latitude,
      coord.longitude,
    ]);
    console.log("line", lineArray)


    const sendOsrmRequest = async (lngLats: string[]) => {
      const radiuses = Array(lngLats.length).fill('49');
      const url = `http://localhost:5000/match/v1/bicycle/${lngLats.join(';')}?overview=full&radiuses=${radiuses.join(';')}&geometries=geojson&annotations=true`;
      try {
        const response = await axios.get(url);
        return response.data;
        console.log('')
      } catch (error) {
        console.error('Error fetching data from OSRM API:', error);
        return null;
      }
    };

    const plotPolyline = (latLngs: LatLngTuple[]) => {
      const map = mapRef.current;
      if (map) {
        map.eachLayer(layer => {
          if (layer instanceof L.Polyline || layer instanceof L.Marker) {
            map.removeLayer(layer);
          }
        });
        const featureGroup = L.featureGroup();
        const polyline = L.polyline(latLngs, { color: 'blue' });
        featureGroup.addLayer(polyline);
        const ogpolyline = L.polyline(lineArray, { color: 'red' });
        featureGroup.addLayer(ogpolyline);
        featureGroup.addTo(map);
    
        // Check if latLngs array has elements before accessing its first and last elements
        if (latLngs.length > 0) {
          const firstPointMarker = L.marker(latLngs[0]).bindPopup(`Start Coordinate: : ${latLngs[0].toString()}`);
          const lastPointMarker = L.marker(latLngs[latLngs.length - 1]).bindPopup(`Last Coordinate: ${latLngs[latLngs.length - 1].toString()}`);
          featureGroup.addLayer(firstPointMarker);
          featureGroup.addLayer(lastPointMarker);
          map.fitBounds(polyline.getBounds());
        }
      }
    };

    let parts = 1;
    if (trip.length > 10000) {
      parts = 200;
    } else if (trip.length > 1000) {
      parts = 100;
    } else if (trip.length > 500) {
      parts = 10;
    } else if (trip.length > 100) {
      parts = 2;
    }
    else {
      parts = 1;
    }

    const divideTripIntoParts = async () => {
      const allLatLngs: LatLngTuple[] = [];
      const chunkSize = Math.ceil(trip.length / parts);
      for (let i = 0; i < trip.length; i += chunkSize) {
        const chunk = trip.slice(i, i + chunkSize);
        await processChunk(chunk, allLatLngs);
      }
      plotPolyline(allLatLngs);
    };

    const processChunk = async (chunk: Coordinates[], allLatLngs: LatLngTuple[]) => {
      let lngLatPairs: string[];
    
      if (trip.length === 1) {
        lngLatPairs = createPairsmini(chunk);
      } else {
        lngLatPairs = createPairs(chunk);
      }
    
      const data = await sendOsrmRequest(lngLatPairs);
      if (data && data.code === 'Ok' && data.matchings && data.matchings.length > 0) {
        const coordinates = data.matchings[0].geometry.coordinates;
        const latLngs: LatLngTuple[] = coordinates.map((coordinate: number[]) => [coordinate[1], coordinate[0]]);
        allLatLngs.push(...latLngs);
        const matchings = data.matchings[0];
        matchings.legs.forEach((leg: any) => {
          const legNodes = leg.annotation.nodes;
          console.log('Nodes in this leg:', legNodes);
        });
      } else {
        console.error('OSRM response is not as expected:', data);
      }
    };

    divideTripIntoParts();

  }, [trip, step]);

  const handleStepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStep(Number(event.target.value));
  };


  return (
    <div>
      <div id="map" style={{ height: '1000px' }}></div>
      <input type="range" min="3" max="25" value={step} onChange={handleStepChange} />
      <p>Window Size: {step}</p>
    </div>
  );
};

export default MyMap;
