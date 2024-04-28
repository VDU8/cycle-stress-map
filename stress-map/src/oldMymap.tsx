// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import L, { LatLngTuple } from 'leaflet';
// import { LatLngExpression } from "leaflet";
// import { Polyline } from "react-leaflet";


// interface Coordinates {
//   latitude: number;
//   longitude: number;
//   trip_id: number;
// }


// const MyMap: React.FC = () => {
//   const [trip, setTrip] = useState<Coordinates[]>([]);
//   const [step, setStep] = useState<number>(10); // Initial step value

//   const mapRef = React.useRef<L.Map | null>(null); // Ref to store map instance

//   useEffect(() => {
//     const fetchTripWithID = async () => {
//       try {
//         const response = await axios.get<Coordinates[]>("http://localhost:4000/trip");
//         setTrip(response.data);
//         console.log("Received trip data:", response.data);
//         console.log("Received trip data length:", response.data.length);
//       } catch (error) {
//         console.log("Error fetching trip data:", error);
//       }
//     };

//     fetchTripWithID();
//   }, []);

//   useEffect(() => {
//     const fetchTripWithID = async () => {
//       try {
//         const response = await axios.get<Coordinates[]>("http://localhost:4000/note");
//         setTrip(response.data);
//       } catch (error) {
//         console.log("Error fetching trip data:", error);
//       }
//     };

//     fetchTripWithID();
//   }, []);

//   useEffect(() => {
//     if (trip.length === 0) return; // Return if trip data is empty

//     if (!mapRef.current) { // Check if map is not already initialized
//       // Create Leaflet map
//       const map = L.map('map').setView([33.821062, -84.345405], 13);
//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
//       mapRef.current = map; // Assign map instance to ref
//     }

//     // Create pairs of coordinates
//     const createPairs = (data: Coordinates[]) => {
//       const pairs: string[] = [];
//       //       // pairs.push(`${data[0].longitude},${data[0].latitude}`);
//       for (let i = 0; i < data.length; i += step) { // Use the step value
//         const { latitude, longitude } = data[i];
//         pairs.push(`${longitude},${latitude}`);
//       }

//       //   // pairs.push(`${data[data.length - 1].longitude},${data[data.length - 1].latitude}`);
//       return pairs;
//     };

//     const lineArray: LatLngExpression[] = trip.map((coord) => [
//       coord.latitude,
//       coord.longitude,
//     ]);
//   console.log("line", lineArray)

  

//     // Send request to OSRM API
//     const sendOsrmRequest = async (lngLats: string[]) => {
//       const url = `http://localhost:5000/match/v1/bicycle/${lngLats.join(';')}?overview=full&geometries=geojson`;

//       try {
//         const response = await axios.get(url);
//         const data = response.data;
//         processOsrmData(data);
//       } catch (error) {
//         console.error('Error fetching data from OSRM API:', error);
//       }
//     };

//     // Process OSRM API response and plot polyline
//     const processOsrmData = (data: any) => {
//       if (data.code === 'Ok' && data.matchings && data.matchings.length > 0) {
//         const coordinates = data.matchings[0].geometry.coordinates;
//         const latLngs: LatLngTuple[] = coordinates.map((coordinate: number[]) => [coordinate[1], coordinate[0]]);
//         plotPolyline(latLngs);
//       } else {
//         console.error('OSRM response is not as expected:', data);
//       }
//     };

//     // Plot polyline on the map
//     const plotPolyline = (latLngs: LatLngTuple[]) => {
//       const map = mapRef.current; // Get map instance from ref
//       if (map) {
//         map.eachLayer(layer => {
//           if (layer instanceof L.Polyline) {
//             map.removeLayer(layer); // Remove existing polyline
//           }
//         });
//         const featureGroup = L.featureGroup();

//         // Add blue polyline to the feature group
//         const polyline = L.polyline(latLngs, { color: 'blue' });
//         featureGroup.addLayer(polyline);
    
//         // Add red polyline to the feature group
//         const ogpolyline = L.polyline(lineArray, { color: 'red' });
//         featureGroup.addLayer(ogpolyline);
    
//         // Add the feature group to the map
//         featureGroup.addTo(map);

//         const firstPointMarker = L.marker(latLngs[0]).bindPopup(`Start Coordinate: : ${latLngs[0].toString()}`);
//         const lastPointMarker = L.marker(latLngs[latLngs.length - 1]).bindPopup(`Last Coordinate: ${latLngs[latLngs.length - 1].toString()}`);
//         featureGroup.addLayer(firstPointMarker);
//         featureGroup.addLayer(lastPointMarker);
    
//         map.fitBounds(polyline.getBounds());
//       }
//     };
// //   //   // Create pairs and send OSRM API requests
// //   //   if (trip.length > 1000) {

// //   //     const midpointIndex = Math.ceil(trip.length / 2);

// //   //     // Slice the array into two parts
// //   //     const firstHalf = trip.slice(0, midpointIndex);
// //   //     const secondHalf = trip.slice(midpointIndex - 1);
// //   //     console.log(firstHalf.length)
// //   //     console.log(secondHalf)
  
// //   //     const lngLatPairs1 = createPairs(firstHalf); // Pass firstHalf instead of trip
// //   //     sendOsrmRequest(lngLatPairs1);

// //   //     const lngLatPairs2 = createPairs(secondHalf); // Pass secondHalf instead of trip
// //   //     sendOsrmRequest(lngLatPairs2);
// //   //   }
// //   //   else {

// //   //     const lngLatPairs = createPairs(trip);
// //   //     sendOsrmRequest(lngLatPairs);
// //   //   }
// //   // }, [trip]);

//     // Create pairs and send OSRM API requests
//     const lngLatPairs = createPairs(trip);
//     sendOsrmRequest(lngLatPairs);
//   }, [trip, step]);

//   const handleStepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setStep(Number(event.target.value)); // Update the step value
//   };



//   return (
//     <div>
//       <div id="map" style={{ height: '1000px' }}></div>
//       <input type="range" min="9" max="25" value={step} onChange={handleStepChange} />
//       <p>Window Size: {step}</p> {/* Display the current step value */}
//     </div>
//   );
// };

// export default MyMap;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import L, { LatLngTuple } from 'leaflet';

// interface Coordinates {
//   latitude: number;
//   longitude: number;
//   trip_id: number;
// }

// interface Trip {
//   code: string;
//   matchings: { geometry: { coordinates: number[][] } }[];
// }

// const MyMap: React.FC = () => {
//   const [trips, setTrips] = useState<Record<string, Trip[]>>({});
//   const mapRef = React.useRef<L.Map | null>(null); // Ref to store map instance

//   useEffect(() => {
//     const fetchTripWithID = async () => {
//       try {
//         const response = await axios.get<Record<string, Trip[]>>("http://localhost:4000/trips");
//         setTrips(response.data);
//         console.log("Received trip data:", response.data);
//       } catch (error) {
//         console.log("Error fetching trip data:", error);
//       }
//     };

//     fetchTripWithID();
//   }, []);

//   useEffect(() => {
//     if (Object.keys(trips).length === 0) return; // Return if trip data is empty

//     if (!mapRef.current) { // Check if map is not already initialized
//       // Create Leaflet map
//       const map = L.map('map').setView([33.821062, -84.345405], 13);
//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
//       mapRef.current = map; // Assign map instance to ref
//     }

//     // Plot all trip routes on the map
//     plotPolyline(trips);
//   }, [trips]);

//   // Plot polyline on the map
//   const plotPolyline = (tripsData: Record<string, Trip[]>) => {
//     const map = mapRef.current; // Get map instance from ref
//     if (map) {
//       // Iterate over each trip
//       Object.entries(tripsData).forEach(([tripId, trips]) => {
//         // Assign color based on trip ID
//         let color = '';
//         if (tripId === '1') {
//           color = 'red';
//         } else if (tripId === '2') {
//           color = 'blue';
//         } else if (tripId === '3') {
//           color = 'green';
//         } else if (tripId === '4') {
//           color = 'yellow';
//         } else {
//           color = 'black'; // Default color if trip ID doesn't match
//         }

//         // Store all coordinates for a trip together
//         const allLatLngs: LatLngTuple[] = [];
//         trips.forEach((trip: Trip) => {
//           processOsrmData(trip, allLatLngs);
//         });

//         // Add polyline to the map with assigned color
//         const polyline = L.polyline(allLatLngs, { color }).addTo(map);

//         // Create markers for the first and last coordinates
//         const firstLatLng = allLatLngs[0];
//         const lastLatLng = allLatLngs[allLatLngs.length - 1];
//         const firstMarker = L.marker(firstLatLng).addTo(map);
//         const lastMarker = L.marker(lastLatLng).addTo(map);

//         // Bind popups to markers with trip ID
//         firstMarker.bindPopup(`Start Coordinate: ${firstLatLng}, Trip ID: ${tripId}`).openPopup();
//         lastMarker.bindPopup(`End Coordinate: ${lastLatLng}, Trip ID: ${tripId}`).openPopup();

//         map.fitBounds(polyline.getBounds());
//       });
//     }
//   };

//   // Process OSRM API response and append coordinates to allLatLngs
//   const processOsrmData = (trip: Trip, allLatLngs: LatLngTuple[]) => {
//     trip.matchings.forEach(matching => {
//       const coordinates = matching.geometry.coordinates;
//       coordinates.forEach(coordinate => {
//         const latLng: LatLngTuple = [coordinate[1], coordinate[0]];
//         allLatLngs.push(latLng);
//       });
//     });
//   };

//   return (
//     <div>
//       <div id="map" style={{ height: '1000px' }}></div>
//     </div>
//   );
// };

// export default MyMap;