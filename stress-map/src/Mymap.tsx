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

interface UserInfo {
  user_id: number;
  agetype?: string | null; // Optional property as it seems to be nullable in the provided sample data
  created?: string | null;
  cycling_freqtype?: string | null;
  device?: string | null;
  email?: string | null;
  ethnicitytype?: string | null;
  gendertype?: string | null;
  incometype?: string | null;
  rider_historytype?: string | null;
  rider_info?: string | null;
  schoolZIP?: string | null;
  workZIP?: string | null;


}

const MyMap: React.FC = () => {
  const [trips, setTrips] = useState
  
  <Record<string, Trip[]>>({});
  const [currentTripIds, setCurrentTripIds] = useState({ start: 1, end: 50 });
  const [selectedTripId, setSelectedTripId] = useState<number | null>(null);

  const [tripinfo, setTripInfo] = useState<any>(null);
  const [selectedTripInfo, setSelectedTripInfo] = useState<TripInfo | null>(null);
  
  const [userinfo, setUserInfo] = useState<any>(null);
  const [selectedUserInfo, setSelectedUserInfo] = useState<UserInfo | null>(null);
  const [attributeTypes, setAttributeTypes] = useState<{ [key: string]: string[] }>({
  ageTypes: [],
  cyclingFreqTypes: [],
  ethnicityTypes: [],
  genderTypes: [],
  incomeTypes: [],
  riderHistoryTypes: [],
  riderInfoTypes: [],
});

  

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
        const response = await axios.get("http://localhost:4000/usernote");
        setUserInfo(response.data); // Assuming you have a state variable named tripInfo to store trip information
        console.log("Received User information:", response.data);

        // Extract unique values for each attribute
        const newAttributeTypes: { [key: string]: string[] }  = {
          ageTypes: Array.from(new Set(response.data.map((userinfo: any) => userinfo.agetype))),
          cyclingFreqTypes: Array.from(new Set(response.data.map((userinfo: any) => userinfo.cycling_freqtype))),
          ethnicityTypes: Array.from(new Set(response.data.map((userinfo: any) => userinfo.ethnicitytype))),
          genderTypes: Array.from(new Set(response.data.map((userinfo: any) => userinfo.gendertype))),
          incomeTypes: Array.from(new Set(response.data.map((userinfo: any) => userinfo.incometype))),
          riderHistoryTypes: Array.from(new Set(response.data.map((userinfo: any) => userinfo.rider_historytype))),
          riderInfoTypes: Array.from(new Set(response.data.map((userinfo: any) => userinfo.rider_info))),
        };
        setAttributeTypes(newAttributeTypes);
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
    plotPolyline(trips, currentTripIds.start, currentTripIds.end, selectedTripId);
  }, [trips, currentTripIds, selectedTripId]);


  const [highlightedPolyline, setHighlightedPolyline] = useState<L.Polyline | null>(null);
  // Plot polyline on the map
  const plotPolyline = (tripsData: Record<string, Trip[]>, start: number, end: number, selectedTripId: number | null) => {
    
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

          if (highlightedPolyline && mapRef.current) {
            mapRef.current.removeLayer(highlightedPolyline);
          }
          // Add polyline to the map with assigned color
          const polyline = L.polyline(allLatLngs, { color }).addTo(map);
          if (selectedTripId === parseInt(tripId)) {
            polyline.setStyle({ weight: 18, opacity: 1 }); // Adjust the style as needed
            setHighlightedPolyline(polyline);
          }

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

  // Add an event handler to update the selected Trip ID's information
const handleTripSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const selectedTripId = parseInt(event.target.value);
  // Find the selected trip information from the tripinfo array
  const selectedTrip = tripinfo.find((trip: TripInfo) => trip.id === selectedTripId);
  setSelectedTripInfo(selectedTrip);
  plotPolyline(trips, currentTripIds.start, currentTripIds.end, selectedTripId);
};

  // Add an event handler to update the selected User ID's information
  const handleUserSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedUserId = parseInt(event.target.value);
    // Find the selected trip information from the tripinfo array
    const selectedUser = userinfo.find((trip: UserInfo) => trip.user_id === selectedUserId);
    setSelectedUserInfo(selectedUser);
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

      <div style={{ border: '1px solid #ccc', borderRadius: '20px', padding: '10px', backgroundColor: '#2A7EB5', color: '#fff', display: 'flex', alignItems: 'center' }}>
     <p> Select User ID:</p>
      {/* {Object.keys(trips).map(tripId => (
      <option key={tripId} value={tripId}>{tripId}</option> */}

{/* This way, the select element will only be rendered when tripinfo is not null, preventing the "Cannot read properties of null" error. */}
{userinfo && (
  <select style={{ overflow: 'auto', backgroundColor: '#2A7EB5', color: '#fff' }} onChange={handleUserSelection}>
    {userinfo.map((trip: UserInfo) => (
      <option key={trip.user_id} value={trip.user_id}>{trip.user_id}</option>
    ))}
  </select>
)}
      </div>

  </div>


  {/* Trip Information component */}

  <div style={{ position: 'absolute', top: '100px', left: '10px', zIndex: 1000 }}>
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', backgroundColor: '#2A7EB5' , color: '#fff' }}>
        <u> Trip Information: </u>
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
      {/* User Info component */}
            <u> User Information: </u>
        {selectedUserInfo && (
      <div>
        <p>User ID: {selectedUserInfo.user_id}</p>
        <p>Age: {selectedUserInfo.agetype}</p>
        <p>Frequency of Cycling: {selectedUserInfo.cycling_freqtype}</p>
        <p>Gender: {selectedUserInfo.gendertype}</p>
        <p>Income: {selectedUserInfo.incometype}</p>
        <p>Created: {selectedUserInfo.created}</p>
        <p>Device: {selectedUserInfo.device}</p>
        <p>Email: {selectedUserInfo.email}</p>
        <p>Type: {selectedUserInfo.rider_historytype}</p>
        <p>Personality: {selectedUserInfo.rider_info}</p>
        <p>Schoolzip: {selectedUserInfo.schoolZIP}</p>
        <p>Workzip: {selectedUserInfo.workZIP}</p>
      </div>
    )}
      </div>
  </div>






      {/* Filters */}
      <div style={{  height: '1000px', position: 'absolute', top: '100px', right: '20px', zIndex: 1000, overflow: 'auto' }}>
        <div style={{ border: '1px solid #ccc', borderRadius: '35px', padding: '10px', backgroundColor: '#2A7EB5', color: '#fff', cursor: 'pointer' }} onClick={toggleFilters}>
          <p> Filters: </p>
        </div>
        {showFilters && (

          <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginTop: '5px',  overflow: 'auto' }} >
          {Object.entries(attributeTypes).map(([attribute, types]) => (
            <div key={attribute}>
              <p>{attribute.charAt(0).toUpperCase() + attribute.slice(1).replace(/_/g, ' ')}:</p>
              {types.map((type: string, index: number) => (
                <div key={index}>
                  <input type="checkbox" id={`${attribute}-${index}`} />
                  <label htmlFor={`${attribute}-${index}`}>{type}</label>
                </div>
              ))}
            </div>
          ))}
          <div>
              <p>Trip Purpose:</p>
              <label><input type="checkbox" /> Exercise</label><br></br>
              <label><input type="checkbox" /> Commute</label><br></br>
              <label><input type="checkbox" /> Social</label><br></br>
              <label><input type="checkbox" /> School </label><br></br>
              <label><input type="checkbox" /> Work-Related </label><br></br>
              <label><input type="checkbox" /> Errand </label><br></br>
              {/* List of commute purpose checkboxes */}
            </div>

            <div>
              <p>Duration:</p>
              <label><input type="checkbox" /> &lt; 5 minutes</label><br></br>
              <label><input type="checkbox" /> 5-10 minutes</label><br></br>
              <label><input type="checkbox" /> 10-20 minutes</label><br></br>
              <label><input type="checkbox" /> 20-60 minutes</label><br></br>
            </div>

          </div>
        )}
      </div>

</div>
  );
};

export default MyMap;