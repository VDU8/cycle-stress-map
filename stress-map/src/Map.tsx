import "./Map.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import { LatLngExpression } from "leaflet";

// TODO: type not complete
type note = {
  id: number;
  user_id: number;
  trip_id: string;
  latitude: number;
  longitude: number;
  details: string;
};

type trip = {
  id: number;
  latitude: number;
  longitude: number;
};

function Map(): JSX.Element {
  const [trip, setTrip] = useState<trip[]>([]);
  const [coords, setCoords] = useState<note[]>([]);
  const [snapCoords, setSnapCoords] = useState<[]>([]);
  const [ltlng, setlatlong] = useState<[]>([]);

  // Fetch all notes from server
  useEffect(() => {
    const fetchAllCoords = async () => {
      try {
        const res = await axios.get("http://localhost:4000/note");
        setCoords(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllCoords();
  }, []);

  // Fetch all coords from a certain trip from server
  useEffect(() => {
    const fetchTripWithID = async () => {
      try {
        const response = await axios.get("http://localhost:4000/trip");
        setTrip(response.data);
        console.log("Created line with data", response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTripWithID();
  }, []);

  // Fetch all snappedCoords from server used to put on the streetgrid
  useEffect(() => {
    const fetchAllSnapCoords = async () => {
      try {
        const res = await axios.get("http://localhost:4000/snap");
        setSnapCoords(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllSnapCoords();
  }, []);

  useEffect(() => {
    const fetchAllSnapCoords = async () => {
      try {
        const res = await axios.get("http://localhost:5000/route/v1/foot/-84.38985,33.75447;-84.37717,33.75878?steps=true");
        setlatlong(res.data);
        console.log("got the OSRM data",res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllSnapCoords();
  }, []);

  const jsonData = 
    {"code":"Ok","routes":[{"geometry":"cpgmE`_zaOJkE{OqF_DwDaBwCqEiVaTaWyOkYeRwI_B_@cI~AwKwEgTvF}Nn@sJsBgLZaGeBkBnDArM|A??dB","legs":[{"steps":[{"intersections":[{"out":0,"entry":[true],"bearings":[90],"location":[-84.352008,33.794736]}],"driving_side":"right","geometry":"cpgmE`_zaO?uDJU","mode":"walking","duration":69.1,"maneuver":{"bearing_after":90,"location":[-84.352008,33.794736],"bearing_before":0,"type":"depart"},"weight":69.1,"distance":95.8,"name":"Reeder Circle Northeast"},{"intersections":[{"out":0,"location":[-84.350992,33.794682],"bearings":[15,120,195,300],"entry":[true,true,true,false],"in":3},{"out":0,"location":[-84.350646,33.795637],"bearings":[30,120,195,300],"entry":[true,true,false,true],"in":2}],"driving_side":"right","geometry":"wogmEtxyaOyBg@eA[kFyB","mode":"walking","duration":184.6,"maneuver":{"bearing_after":14,"type":"turn","modifier":"left","bearing_before":122,"location":[-84.350992,33.794682]},"weight":184.6,"distance":253.7,"name":"North Highland Avenue Northeast"},{"intersections":[{"out":0,"location":[-84.35004,33.796817],"bearings":[15,120,210,285],"entry":[true,true,false,true],"in":2},{"out":1,"location":[-84.349747,33.797428],"bearings":[0,45,210],"entry":[true,true,false],"in":2},{"out":0,"location":[-84.349322,33.797843],"bearings":[45,105,225,255,315],"entry":[true,true,false,true,true],"in":2},{"out":0,"location":[-84.348915,33.798132],"bearings":[45,135,225],"entry":[true,true,false],"in":2},{"out":1,"location":[-84.3481,33.798669],"bearings":[0,75,240],"entry":[true,true,false],"in":2},{"out":0,"location":[-84.347735,33.798789],"bearings":[75,150,255],"entry":[true,true,false],"in":2},{"out":0,"location":[-84.346725,33.799062],"bearings":[75,255,345],"entry":[true,false,true],"in":1},{"out":0,"location":[-84.344975,33.799519],"bearings":[75,165,255],"entry":[true,true,false],"in":2},{"out":0,"location":[-84.344133,33.799894],"bearings":[45,225,315],"entry":[true,false,true],"in":1},{"out":0,"location":[-84.342334,33.801659],"bearings":[45,150,225],"entry":[true,true,false],"in":2},{"out":0,"location":[-84.341175,33.802497],"bearings":[45,225,330],"entry":[true,false,true],"in":1},{"out":0,"location":[-84.339814,33.803591],"bearings":[45,150,225],"entry":[true,true,false],"in":2},{"out":0,"location":[-84.337925,33.804589],"bearings":[45,120,240,315],"entry":[true,true,false,true],"in":2}],"driving_side":"right","geometry":"c}gmEvryaOYIuAi@IEy@y@W[y@oAIKuA_CKWWgAu@iEMu@i@kDSeAOu@g@yBa@o@{@eAiC}B_CgC[[gDeF}@cAw@_AS[EI[e@m@aA_@k@c@o@AEYk@]eAEKMa@ISEOACYu@IWoA}B","mode":"walking","duration":1100.6,"maneuver":{"bearing_after":19,"type":"new name","modifier":"straight","bearing_before":22,"location":[-84.35004,33.796817]},"weight":1100.6,"distance":1529,"name":"Johnson Road Northeast"},{"intersections":[{"out":0,"location":[-84.337303,33.804993],"bearings":[45,210,225,315],"entry":[true,true,false,true],"in":2},{"out":0,"location":[-84.335977,33.806151],"bearings":[15,150,210],"entry":[true,true,false],"in":2},{"out":0,"location":[-84.335856,33.806485],"bearings":[15,135,195],"entry":[true,true,false],"in":2},{"out":0,"location":[-84.335677,33.807004],"bearings":[15,195,330],"entry":[true,false,true],"in":1}],"driving_side":"right","geometry":"epimEbcwaOc@m@SWu@cAKOc@m@CC_@c@CAa@UcAWQGsA[sAc@g@Yu@c@y@o@[W","mode":"walking","duration":322.3,"maneuver":{"bearing_after":46,"type":"turn","modifier":"straight","bearing_before":50,"location":[-84.337303,33.804993]},"ref":"GA 42","weight":322.3,"distance":444.9,"name":"Briarcliff Road Northeast"},{"intersections":[{"out":0,"location":[-84.334828,33.808322],"bearings":[0,30,210],"entry":[true,true,false],"in":2}],"driving_side":"right","geometry":"_ejmEtsvaOW?M?","mode":"walking","duration":14.7,"maneuver":{"bearing_after":0,"type":"turn","modifier":"slight left","bearing_before":35,"location":[-84.334828,33.808322]},"weight":14.7,"distance":20.4,"name":""},{"intersections":[{"out":0,"location":[-84.334828,33.808505],"bearings":[45,180,210,330],"entry":[true,false,true,true],"in":1},{"out":0,"location":[-84.334757,33.808563],"bearings":[15,90,225,285],"entry":[true,true,false,true],"in":2},{"out":0,"location":[-84.334738,33.808608],"bearings":[30,165,195,300],"entry":[true,true,false,true],"in":2},{"out":0,"location":[-84.334705,33.80867],"bearings":[30,60,210,270],"entry":[true,true,false,true],"in":2},{"out":3,"location":[-84.334814,33.81029],"bearings":[135,165,315,345],"entry":[true,false,true,true],"in":1},{"out":0,"location":[-84.334468,33.811717],"bearings":[30,120,210,300],"entry":[true,true,false,true],"in":2},{"out":3,"location":[-84.333995,33.813744],"bearings":[90,165,270,345],"entry":[true,false,true,true],"in":1},{"out":3,"location":[-84.334177,33.814311],"bearings":[75,165,240,345],"entry":[true,false,true,true],"in":1},{"out":3,"location":[-84.334623,33.815216],"bearings":[60,150,270,330],"entry":[true,false,true,true],"in":1}],"driving_side":"right","geometry":"efjmEtsvaOCIECICEGE@G@EOUKmASQKIBi@Jw@\\sA^m@Nu@D_@Cc@O_A_@e@YOK[WoAeA{@]m@Cg@Ag@NY@ICSB]BCFE?MDqBb@WFmAd@oAh@_@Pk@V","mode":"walking","duration":614.9,"maneuver":{"bearing_after":45,"type":"turn","modifier":"right","bearing_before":0,"location":[-84.334828,33.808505]},"weight":614.9,"distance":854.3,"name":""},{"intersections":[{"out":0,"location":[-84.33483,33.815601],"bearings":[60,150,315],"entry":[true,false,true],"in":1}],"driving_side":"right","geometry":"orkmEtsvaOEM","mode":"walking","duration":5.2,"maneuver":{"bearing_after":63,"type":"turn","modifier":"right","bearing_before":334,"location":[-84.33483,33.815601]},"weight":5.2,"distance":7.2,"name":""},{"intersections":[{"out":3,"location":[-84.33476,33.81563],"bearings":[75,150,240,330],"entry":[true,true,false,true],"in":2},{"out":3,"location":[-84.334804,33.815715],"bearings":[60,150,240,345],"entry":[true,false,true,true],"in":1},{"out":0,"location":[-84.335299,33.818935],"bearings":[15,180,270],"entry":[true,false,true],"in":1},{"out":0,"location":[-84.335151,33.819441],"bearings":[15,90,195],"entry":[true,true,false],"in":2},{"out":0,"location":[-84.335056,33.81964],"bearings":[15,195,285],"entry":[true,false,true],"in":1},{"out":0,"location":[-84.334776,33.820411],"bearings":[0,105,180],"entry":[true,true,false],"in":2},{"out":0,"location":[-84.334726,33.82155],"bearings":[0,90,91,178,269],"entry":[true,true,true,false,true],"in":3},{"out":0,"location":[-84.334857,33.82292],"bearings":[15,180,270],"entry":[true,false,true],"in":1}],"driving_side":"right","geometry":"urkmEfsvaOQFOF}@XIBG@KBYF[B{@FK?]BM@M?k@BY@]@]BW@]@kADG?o@Fc@?o@Ga@KQIg@QqBq@g@EmAK{@AyABoA?aEXyB_@KG{B}@","mode":"walking","duration":705.9,"maneuver":{"bearing_after":336,"type":"turn","modifier":"left","bearing_before":63,"location":[-84.33476,33.81563]},"ref":"GA 42","weight":705.9,"distance":977.1,"name":"Briarcliff Road Northeast"},{"intersections":[{"out":2,"location":[-84.33435,33.824213],"bearings":[30,210,300],"entry":[true,false,true],"in":1},{"out":3,"location":[-84.334458,33.824261],"bearings":[30,120,180,300],"entry":[true,false,true,true],"in":1}],"driving_side":"right","geometry":"ihmmEtpvaOITWt@]W","mode":"walking","duration":43.4,"maneuver":{"bearing_after":298,"type":"turn","modifier":"left","bearing_before":22,"location":[-84.33435,33.824213]},"weight":43.4,"distance":60.4,"name":""},{"intersections":[{"out":2,"location":[-84.334611,33.824533],"bearings":[30,210,300],"entry":[true,false,true],"in":1}],"driving_side":"right","geometry":"ijmmEhrvaOUp@M?","mode":"walking","duration":23.9,"maneuver":{"bearing_after":296,"type":"turn","modifier":"left","bearing_before":33,"location":[-84.334611,33.824533]},"weight":23.9,"distance":33.3,"name":""},{"intersections":[{"out":3,"location":[-84.334862,33.824707],"bearings":[0,90,165,270],"entry":[true,true,false,true],"in":2},{"out":3,"location":[-84.335144,33.824727],"bearings":[15,90,195,285],"entry":[true,false,true,true],"in":1},{"out":3,"location":[-84.335967,33.824757],"bearings":[0,90,180,270],"entry":[true,false,true,true],"in":1}],"driving_side":"right","geometry":"mkmmEzsvaOCv@?DCJ?r@A~A?@?hA@`A?lAAl@?t@","mode":"walking","duration":180.4,"maneuver":{"bearing_after":274,"type":"turn","modifier":"left","bearing_before":341,"location":[-84.334862,33.824707]},"weight":180.4,"distance":250.7,"name":""},{"intersections":[{"out":2,"location":[-84.337567,33.824764],"bearings":[0,90,180,270],"entry":[true,false,true,true],"in":1},{"out":2,"location":[-84.337569,33.824625],"bearings":[0,90,180,270],"entry":[false,true,true,true],"in":0},{"out":2,"location":[-84.337571,33.824446],"bearings":[0,90,180,270],"entry":[false,true,true,true],"in":0}],"driving_side":"right","geometry":"wkmmExdwaOX?b@?^??dB","mode":"walking","duration":71.2,"maneuver":{"bearing_after":180,"type":"turn","modifier":"left","bearing_before":270,"location":[-84.337567,33.824764]},"weight":71.2,"distance":99.1,"name":""},{"intersections":[{"in":0,"entry":[true],"bearings":[90],"location":[-84.338075,33.824291]}],"driving_side":"right","geometry":"yhmmE~gwaO","mode":"walking","duration":0,"maneuver":{"bearing_after":0,"type":"arrive","modifier":"left","bearing_before":270,"location":[-84.338075,33.824291]},"weight":0,"distance":0,"name":""}],"distance":4625.8,"duration":3336.2,"summary":"Johnson Road Northeast, Briarcliff Road Northeast","weight":3336.2}],"distance":4625.8,"duration":3336.2,"weight_name":"duration","weight":3336.2}],"waypoints":[{"hint":"1N4zgNveM4CMAQAAXAIAAMoDAABXAAAAwNRcQvDYp0L5lgZDV81AQYwBAABcAgAAygMAAFcAAAAEAAAA-OP4-rCqAwL44_j6paoDAgkAnwUJKIfA","distance":1.220066,"name":"Reeder Circle Northeast","location":[-84.352008,33.794736]},{"hint":"DGMhgBljIYBNAQAAYwEAAH0AAAAAAAAAleQ5QoIARUJbbopBAAAAAE0BAABjAQAAfQAAAAAAAAAEAAAAZRr5-iMeBAJlGvn6tR0EAgEA7xAJKIfA","distance":12.200759,"name":"","location":[-84.338075,33.824291]}]}
  

  // Create array to be used in line
  const lineArray: LatLngExpression[] = trip.map((coord) => [
    coord.latitude,
    coord.longitude,
  ]);
console.log("line", lineArray)
//   const coordinates = jsonData.routes[0].legs.flatMap((leg) =>
//   leg.steps.flatMap((step) =>
//     step.geometry.coordinates.map(([longitude, latitude]: [number, number]) => [latitude, longitude])
//   )
// );


const cs: LatLngExpression[] = jsonData.waypoints.map(waypoint => ([
  waypoint.location[1],  // Latitude is the second element in the array
  waypoint.location[0]  // Longitude is the first element in the array
] as LatLngExpression));
console.log(cs);

const locations = jsonData.routes;
console.log("Routes",locations);

const allLocations = jsonData.routes.flatMap(route => 
  route.legs.flatMap(leg => 
    leg.steps.flatMap(step => 
      step.intersections.flatMap(intersection => 
        intersection.location
      )
    )
  )
);

console.log("All Locations:", allLocations);

const pairedCoordinates: LatLngExpression[] = [];

for (let i = 0; i < allLocations.length; i += 2) {
  pairedCoordinates.push([allLocations[i + 1], allLocations[i]]);
}

console.log("paired", pairedCoordinates);

// above or down figure this out

  // const ltlngs: LatLngExpression[] = ltlng.map((coord) => [
  //   coord.location
  // ]);

  // Test data with raw coordinates
  const rawArray: LatLngExpression[] = [
    [33.787551958257, -84.359147478562],
    [33.787571290927, -84.35914751250401],
    [33.787598305876, -84.35915108828901],
  ];

  // Test data with snapped coordinates
  const testArray: LatLngExpression[] = [
    [33.787606, -84.359147],
    [33.787606, -84.359148],
    [33.787606, -84.359151],
    [33.787606, -84.359169],
    [33.787605, -84.3592],
    [33.787605, -84.359243],
    [33.787605, -84.35929],
    [33.787605, -84.359332],
    [33.787605, -84.359384],
    [33.787605, -84.359452],
  ];
  

  return (
    <div className="Map">
      <header className="Map-header">

        {/* Header */}
        <h2>
          <b>Stress Map</b> <code>[unstable prototype]</code>
        </h2>

{/* Map container form Leaflet */}
        <MapContainer
          center={[33.753746, -84.38633]}
          zoom={13}
          scrollWheelZoom={true}
        >

          {/* Get required title/map design from openstreetmap */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Placing markers at note positions (incl. the node as text*/}
          {coords.map((coord) => (
            <Marker position={[coord.latitude, coord.longitude]} key={coord.id}>
              <Popup>
                {coord.details !== "" ? coord.details : "No text added."}
              </Popup>
            </Marker>
          ))}

          {/* Creating lines (snapped) based on coords */}
          <Polyline positions={[lineArray]} color="blue" />
          <Polyline positions={[snapCoords]} color="green" />
          <Polyline positions={[pairedCoordinates]} color="red" />
          
        </MapContainer>
      </header>
    </div>
  );
}

export default Map;
