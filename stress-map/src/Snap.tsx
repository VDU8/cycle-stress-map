import React, { useState, useEffect } from 'react';
import axios from 'axios';
import L, { LatLngTuple, LatLngExpression } from 'leaflet';
import "./Map.css";

interface Coordinates {
  latitude: number;
  longitude: number;
  trip_id: number;
}
const MyMap: React.FC = () => {
  const [trip, setTrip] = useState<Coordinates[]>([]);
  const [step, setStep] = useState<number>(5);
  const [tripId, settripId] = useState<number>(5);
  const mapRef = React.useRef<L.Map | null>(null);
  const [mapError, setMapError] = useState<string | null>(null); // State to hold error message
  const [loading, setLoading] = useState<boolean>(false); // State to track loading status


  useEffect(() => {
    const fetchTripWithID = async () => {
      try {
        const response = await axios.get<Coordinates[]>(`http://localhost:4000/trip/${tripId}`);
        setTrip(response.data);
        console.log("Received trip data:", response.data);
        console.log("Received trip data length:", response.data.length);
      } catch (error) {
        console.log("Error fetching trip data:", error);
        setMapError("Error fetching trip data");
      }
    };

    fetchTripWithID();
  }, [tripId]);


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
      setLoading(true);
      const radiuses = Array(lngLats.length).fill('49');
      // const url = `http://localhost:5000/match/v1/bicycle/${lngLats.join(';')}?overview=full&radiuses=${radiuses.join(';')}&geometries=geojson&annotations=true`;
      const url = `http://localhost:5000/match/v1/bicycle/${lngLats.join(';')}?overview=full&radiuses=${radiuses.join(';')}&geometries=geojson`;
      try {
        const response = await axios.get(url);
        setLoading(false);
        return response.data;
        
        // console.log('')
      } catch (error: any) {
        console.error('Error fetching data from OSRM API:', error);
        if (error.response && error.response.data && error.response.data.message) {
          setMapError(`Error: ${error.response.data.message}`);
        } else {
          setMapError("Error fetching data from OSRM API");
        }
        return null;
      }
    };

    const miniosrm = async (lngLats: string[]) => {
      setLoading(true);
      const radiuses = Array(lngLats.length).fill('49');
      // const url = `http://localhost:5000/match/v1/bicycle/${lngLats.join(';')}?overview=full&radiuses=${radiuses.join(';')}&geometries=geojson&annotations=true`;
      const url = `http://localhost:5000/match/v1/bicycle/${lngLats.join(';')}?overview=full&radiuses=${radiuses.join(';')}&geometries=geojson`;
      try {
        const response = await axios.get(url);
        return response.data;
        
        // console.log('')
      } catch (error: any) {
        console.error('Error fetching data from OSRM API:', error);
        if (error.response && error.response.data && error.response.data.message) {
          setMapError(`Error: ${error.response.data.message}`);
        } else {
          setMapError("Error fetching data from OSRM API");
        }
        setLoading(false);
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
      setLoading(false);
    };

    let parts = 1;
    if (trip.length > 10000) {
      parts = 50;
    } else if (trip.length > 1000) {
      parts = 50;
    } else if (trip.length > 500) {
      parts = 5;
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
    
    if (trip.length > 1 && trip.length < 80) {
        lngLatPairs = createPairsmini(chunk);
        const minidata = await miniosrm(lngLatPairs);
        if (minidata && minidata.code === 'Ok' && minidata.matchings && minidata.matchings.length > 0) {
          const coordinates = minidata.matchings[0].geometry.coordinates;
          const latLngs: LatLngTuple[] = coordinates.map((coordinate: number[]) => [coordinate[1], coordinate[0]]);
          allLatLngs.push(...latLngs);
          const matchings = minidata.matchings[0];
        // matchings.legs.forEach((leg: any) => {
        //   const legNodes = leg.annotation.nodes;
        //   console.log('Nodes in this leg:', legNodes);
        // });
      } else {
        console.error('OSRM response is not as expected:', minidata);
      }
      }
    
      else if (trip.length === 1) {
        const coordinate = trip[0]; // Assuming the single coordinate is at index 0
        const latLng: LatLngTuple = [coordinate.latitude, coordinate.longitude]; // Explicitly cast to LatLngTuple
        console.log(latLng)
      }
    
     else {
        lngLatPairs = createPairs(chunk);
        const data = await sendOsrmRequest(lngLatPairs);
      if (data && data.code === 'Ok' && data.matchings && data.matchings.length > 0) {
        const coordinates = data.matchings[0].geometry.coordinates;
        const latLngs: LatLngTuple[] = coordinates.map((coordinate: number[]) => [coordinate[1], coordinate[0]]);
        allLatLngs.push(...latLngs);
        const matchings = data.matchings[0];
        // matchings.legs.forEach((leg: any) => {
        //   const legNodes = leg.annotation.nodes;
        //   console.log('Nodes in this leg:', legNodes);
        // });
      } else {
        console.error('OSRM response is not as expected:', data);
      }
      }
    
      
    };

    divideTripIntoParts();

  }, [trip, step]);

  const handleStepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStep(Number(event.target.value));
  };

  const handleTripIdChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    settripId(Number(event.target.value));
    setMapError("");
  };


  return (
  <div>
    

    {/* Map */}
    <div id="map" style={{ height: '1000px' }}></div>

    {/* Range input */}
    <input type="range" min="3" max="25" value={step} onChange={handleStepChange} />
    <p>Window Size: {step}</p>
    
    <br />

    {/* Trip ID select */}
    <p>Select Trip ID</p>
    <select value={tripId} onChange={handleTripIdChange}>
      {/* Generate options for trip IDs from 1 to 2000 */}
      {Array.from({ length: 2858 }, (_, index) => index + 1).map((id) => (
        <option key={id} value={id}>{id}</option>
      ))}
    </select>

    {/* Loading animation */}
    {loading && (
        <div className="loading-animation">
           <div className="bike-container">
            <div className="bike"></div>
          </div>
          <p>OSRM is working its magic. Please wait...</p>
          <div className="mapanim"></div>
          
        </div>
      )}

    {/* Error popup */}
    {mapError && (
      <div className="error-popup">
        <p>{mapError}</p>
        <button onClick={() => setMapError(null)}>Close</button>
      </div>
    )}
  </div>
  );
};

export default MyMap;