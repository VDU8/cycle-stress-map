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

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import L, { LatLngTuple } from 'leaflet';

interface Coordinates {
  latitude: number;
  longitude: number;
  trip_id: number;
}

interface Trip {
  code: string;
  matchings: { geometry: { coordinates: number[][] } }[];
}

interface TripInfo {
  id: number;
  n_coord: number;
  purpose: string;
  start: string;
  stop: string;
  user_id: number;
}


const MyMap: React.FC = () => {
  const [trips, setTrips] = useState
  
  <Record<string, Trip[]>>({});
  const [currentTripIds, setCurrentTripIds] = useState({ start: 1, end: 10 });

  const [tripinfo, setTripInfo] = useState<any>(null);
  const [selectedTripInfo, setSelectedTripInfo] = useState<TripInfo | null>(null);
  
  const [userinfo, setUserInfo] = useState<any>(null);

  const [showFilters, setShowFilters] = useState(false);

const toggleFilters = () => {
  setShowFilters(!showFilters);
};

  const mapRef = React.useRef<L.Map | null>(null); // Ref to store map instance

  useEffect(() => {
    const fetchTripWithID = async () => {
      try {
        const response = await axios.get<Record<string, Trip[]>>("http://localhost:4000/trips");
        setTrips(response.data);
        console.log("Received trip data:", response.data);
      } catch (error) {
        console.log("Error fetching trip data:", error);
      }
    };

    fetchTripWithID();
  }, []);

  useEffect(() => {
  const fetchTripInfo = async () => {
    try {
      const response = await axios.get("http://localhost:4000/tripnote");
      setTripInfo(response.data); // Assuming you have a state variable named tripInfo to store trip information
      console.log("Received trip information:", response.data);
    } catch (error) {
      console.log("Error fetching trip data:", error);
    }
  };

  fetchTripInfo();
}, []);


  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get("http://localhost:4000/tripnote");
        setUserInfo(response.data); // Assuming you have a state variable named tripInfo to store trip information
        console.log("Received trip information:", response.data);
      } catch (error) {
        console.log("Error fetching trip data:", error);
      }
    };

    fetchUserInfo();
  }, []);


  useEffect(() => {
    if (Object.keys(trips).length === 0) return; // Return if trip data is empty

    if (!mapRef.current) { // Check if map is not already initialized
      // Create Leaflet map
      const map = L.map('map').setView([33.821062, -84.345405], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
      mapRef.current = map; // Assign map instance to ref
    }

    // Plot trip routes based on currentTripIds
    plotPolyline(trips, currentTripIds.start, currentTripIds.end);
  }, [trips, currentTripIds]);

  // Plot polyline on the map
  const plotPolyline = (tripsData: Record<string, Trip[]>, start: number, end: number) => {
    const map = mapRef.current; // Get map instance from ref
    if (map) {
      // Iterate over each trip within start and end range
      for (let i = start; i <= end; i++) {
        const tripId = i.toString();
        const tripsInRange = tripsData[tripId];
        if (tripsInRange) {
          // Assign random color based on trip ID
          const color = getRandomColor();

          // Store all coordinates for a trip together
          const allLatLngs: LatLngTuple[] = [];
          tripsInRange.forEach((trip: Trip) => {
            processOsrmData(trip, allLatLngs);
          });

          // Add polyline to the map with assigned color
          const polyline = L.polyline(allLatLngs, { color }).addTo(map);

          // Create markers for the first and last coordinates
          const firstLatLng = allLatLngs[0];
          const lastLatLng = allLatLngs[allLatLngs.length - 1];
          const firstMarker = L.marker(firstLatLng).addTo(map);
          const lastMarker = L.marker(lastLatLng).addTo(map);

          // Bind popups to markers with trip ID
          firstMarker.bindPopup(`Start Coordinate: ${firstLatLng}, Trip ID: ${tripId}`).openPopup();
          lastMarker.bindPopup(`End Coordinate: ${lastLatLng}, Trip ID: ${tripId}`).openPopup();

          map.fitBounds(polyline.getBounds());
        }
      }
    }
  };

  // Process OSRM API response and append coordinates to allLatLngs
  const processOsrmData = (trip: Trip, allLatLngs: LatLngTuple[]) => {
    trip.matchings.forEach(matching => {
      const coordinates = matching.geometry.coordinates;
      coordinates.forEach(coordinate => {
        const latLng: LatLngTuple = [coordinate[1], coordinate[0]];
        allLatLngs.push(latLng);
      });
    });
  };

  // Generate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Handle clicking Next button
  const handleNext = () => {
    setCurrentTripIds(prevIds => ({ start: prevIds.start + 10, end: prevIds.end + 10 }));
  };
  
  // Handle clicking Previous button
  const handlePrevious = () => {
    setCurrentTripIds(prevIds => ({ start: Math.max(1, prevIds.start - 10), end: Math.max(10, prevIds.end - 10) }));
  };

  // Add an event handler to update the selected trip's information
const handleTripSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const selectedTripId = parseInt(event.target.value);
  // Find the selected trip information from the tripinfo array
  const selectedTrip = tripinfo.find((trip: TripInfo) => trip.id === selectedTripId);
  setSelectedTripInfo(selectedTrip);
};

  return (
<div style={{ position: 'relative' }}>
  <div id="map" style={{ height: '1300px' }}>
    {/* Your map component */}
  </div>

  <div style={{ position: 'absolute', top: '1320px', right: '20px', zIndex: 1000, display: 'flex', gap: '10px'}}>
    <button onClick={handlePrevious} disabled={currentTripIds.start === 1}
    style={{border: '1px solid #ccc', borderRadius: '20px', padding: '10px', backgroundColor: '#2A7EB5', color: '#fff' }}>
      Previous Set of Trips
      </button>
    <button onClick={handleNext} disabled={currentTripIds.end >= Object.keys(trips).length} style={{border: '1px solid #ccc', borderRadius: '20px', padding: '10px', backgroundColor: '#2A7EB5', color: '#fff' }}>
      Next Set of Trips
      </button>
     <div style={{ border: '1px solid #ccc', borderRadius: '20px', padding: '10px', backgroundColor: '#2A7EB5', color: '#fff', display: 'flex', alignItems: 'center' }}>
     <p> Select Trip ID:</p>
      {/* {Object.keys(trips).map(tripId => (
      <option key={tripId} value={tripId}>{tripId}</option> */}

{/* This way, the select element will only be rendered when tripinfo is not null, preventing the "Cannot read properties of null" error. */}
{tripinfo && (
  <select style={{ overflow: 'auto', backgroundColor: '#2A7EB5', color: '#fff' }} onChange={handleTripSelection}>
    {tripinfo.map((trip: TripInfo) => (
      <option key={trip.id} value={trip.id}>{trip.id}</option>
    ))}
  </select>
)}
      </div>

  </div>

  <div style={{ position: 'absolute', top: '100px', left: '10px', zIndex: 1000 }}>
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', backgroundColor: '#2A7EB5' , color: '#fff' }}>
        <p> Trip Information: </p>
        {selectedTripInfo && (
      <div>
        <p>Trip ID: {selectedTripInfo.id}</p>
        <p>n_coord: {selectedTripInfo.n_coord}</p>
        <p>Purpose: {selectedTripInfo.purpose}</p>
        <p>Start: {selectedTripInfo.start}</p>
        <p>Stop: {selectedTripInfo.stop}</p>
        <p>User ID: {selectedTripInfo.user_id}</p>
      </div>
    )}
      </div>
  </div>

      {/* Filters */}
      <div style={{ position: 'absolute', top: '100px', right: '20px', zIndex: 1000 }}>
        <div style={{ border: '1px solid #ccc', borderRadius: '35px', padding: '10px', backgroundColor: '#2A7EB5', color: '#fff', cursor: 'pointer' }} onClick={toggleFilters}>
          <p> Filters: </p>
        </div>
        {showFilters && (
          <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginTop: '5px' }}>
            {/* Gender */}
            <div>
              <p>Gender:</p>
              <label><input type="checkbox" /> Male</label><br></br>
              <label><input type="checkbox" /> Female</label><br></br>
            </div>

            {/* Duration */}
            <div>
              <p>Duration:</p>
              <label><input type="checkbox" /> &lt; 5 minutes</label><br></br>
              <label><input type="checkbox" /> 5-10 minutes</label><br></br>
              <label><input type="checkbox" /> 10-20 minutes</label><br></br>
              <label><input type="checkbox" /> 20-60 minutes</label><br></br>
            </div>

            {/* Notes */}
            <div>
              <label><input type="checkbox" /> Notes</label>
            </div>

            {/* Ethnicity */}
                        <div>
              <p>Ethnicity:</p>
              <label><input type="checkbox" /> White</label><br></br>
              <label><input type="checkbox" /> African American</label><br></br>
              <label><input type="checkbox" /> Asian</label><br></br>
              <label><input type="checkbox" /> Native American</label><br></br>
              <label><input type="checkbox" /> Pacific Islander</label><br></br>
              <label><input type="checkbox" /> Multi-racial</label><br></br>
              <label><input type="checkbox" /> Hispanic / Mexican / Latino</label><br></br>
            </div>

            {/* Cycling Frequency */}
            <div>
              <p>Cycling Frequency:</p>
              <label><input type="checkbox" /> &lt; once a month</label><br></br>
              <label><input type="checkbox" /> Several times per month</label><br></br>
              <label><input type="checkbox" /> Several times per week</label><br></br>
              <label><input type="checkbox" /> Daily</label><br></br>
            </div>

            {/* Age */}
            <div>
              <p>Age:</p>
              <label><input type="checkbox" /> &lt; 18</label><br></br>
              <label><input type="checkbox" /> 18-24</label><br></br>
              <label><input type="checkbox" /> 25-34</label><br></br>
              <label><input type="checkbox" /> 35-44</label><br></br>
              <label><input type="checkbox" /> 45-54</label><br></br>
              <label><input type="checkbox" /> 55-64</label><br></br>
              <label><input type="checkbox" /> 65+</label>
            </div>

            {/* Rider Type */}
            <div>
              <p>Rider Type:</p>
              <label><input type="checkbox" /> &lt; Strong & fearless</label><br></br>
              <label><input type="checkbox" /> Enthused & confident</label><br></br>
              <label><input type="checkbox" /> Comfortable, but cautious</label><br></br>
              <label><input type="checkbox" /> Interested, but concerned</label><br></br>
            </div>

            {/* Commute Purpose */}
            <div>
              <p>Trip Purpose:</p>
              <label><input type="checkbox" /> &lt; Exercise</label><br></br>
              <label><input type="checkbox" /> Commute</label><br></br>
              <label><input type="checkbox" /> Social</label><br></br>
              <label><input type="checkbox" /> School </label><br></br>
              <label><input type="checkbox" /> Work-Related </label><br></br>
              <label><input type="checkbox" /> Errand </label><br></br>
              {/* List of commute purpose checkboxes */}
            </div>
          </div>
        )}
      </div>
  
</div>
  );
};

export default MyMap;