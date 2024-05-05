const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const axios = require("axios");

// Set up express.js server
const app = express();

// TODO: Create remote db
// Set up MySQL database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "st",
});

app.use(express.json());
app.use(cors());

// Test response to check if server is running and available 
app.get("/test", (req, res) => {
  res.json("Backend reached.");
});

// Get all notes that were entered on Cycle ATL data
app.get("/note", (req, res) => {
  // Query to get all lat and long data from note table
  const query = "SELECT id, latitude, longitude, details FROM note";
  

  // Send query to db connection
  db.query(query, (err, data) => {
    if (err) return res.json(err); // When error occurs send client error code
    return res.json(data);
  });
});

// Get all userinformation that were entered on Cycle ATL data
app.get("/tripnote", (req, res) => {
  // Query to get all lat and long data from note table
  const query = "SELECT id, user_id, purpose, start, stop, n_coord FROM trip";
  

  // Send query to db connection
  db.query(query, (err, data) => {
    if (err) return res.json(err); // When error occurs send client error code
    return res.json(data);
  });
});

app.get("/notescomments", (req, res) => {
  // Query to get all lat and long data from noteinformation table
  const query = "SELECT user_id, recorded, latitude, longitude, speed, details, text, note_type FROM noteinformation";
  

  // Send query to db connection
  db.query(query, (err, data) => {
    if (err) return res.json(err); // When error occurs send client error code
    return res.json(data);
  });
});

app.get("/usernote", (req, res) => {
  // Query to get all lat and long data from userinformation table
  const query = "SELECT user_id, created, device, email, schoolZIP, workZIP, agetype, cycling_freqtype, ethnicitytype, gendertype, incometype, rider_historytype, rider_info FROM userinformation";
  

  // Send query to db connection
  db.query(query, (err, data) => {
    if (err) return res.json(err); // When error occurs send client error code
    return res.json(data);
  });
});



app.get("/trip", (req, res) => {
  // Query to get all lat and long data from coords with matching trip_id and only starting at 50 max 150 coords
  const query =
    "SELECT trip_id, latitude, longitude FROM coord WHERE trip_id=203;";

  // Send query to db connection
  db.query(query, (err, data) => {
    if (err) return res.json(err); // When error occurs send client error code
    return res.json(data);
  });
});

// // Get trip coordinates with certain trip_id
app.get("/trip/:trip_id", (req, res) => {
  const tripId = req.params.trip_id;
  // Query to get all lat and long data from coords with matching trip_id and only starting at 50 max 150 coords
  const query =
    `SELECT trip_id, latitude, longitude FROM coord WHERE trip_id=${tripId};`;

  // Send query to db connection
  db.query(query, (err, data) => {
    if (err) return res.json(err); // When error occurs send client error code
    return res.json(data);
  });
});


//                                                                      TripID with all parts

app.get("/trippagination", (req, res) => {
  const { page = 1, limit = 200 } = req.query; // Get page number and limit from query parameters
  const offset = (page - 1) * limit; // Calculate offset based on page number and limit
  const query = `SELECT trip_id, response FROM osr WHERE response LIKE '{"code": "Ok",%' LIMIT ${limit} OFFSET ${offset};`; // Use LIMIT and OFFSET in the SQL query

  // Send query to db connection
  db.query(query, (err, data) => {
    if (err) {
      return res.json(err); // When error occurs, send client error code
    }

    // Organize data by trip ID
    const tripsData = {};
    data.forEach(row => {
      const tripId = row.trip_id;
      const response = JSON.parse(row.response);
      
      if (!tripsData[tripId]) {
        tripsData[tripId] = [];
      }
      tripsData[tripId].push(response);
    });

    return res.json(tripsData);
  });
});

app.get("/trips", (req, res) => {
  const query = `SELECT trip_id, response FROM osr LIMIT 200;`;
  // const query = `SELECT trip_id, response FROM osr WHERE trip_id BETWEEN 784 AND 789;`;

  // Send query to db connection
  db.query(query, (err, data) => {
    if (err) {
      return res.json(err); // When error occurs, send client error code
    }

    // Organize data by trip ID
    const tripsData = {};
    data.forEach(row => {
      const tripId = row.trip_id;
      const response = JSON.parse(row.response);
      if (!tripsData[tripId]) {
        tripsData[tripId] = [];
      }
      tripsData[tripId].push(response);
    });

    return res.json(tripsData);
  });
});

// Get data to be matched with OSRM 
app.get("/matched", (req, res) => {
  const query =
    "SELECT trip_id, latitude, longitude FROM coord WHERE trip_id=76;";

  var coords = [];
  // Send query to db connection
  db.query(query, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      coords = data;
      console.log("***PRINT COORD DATA***");
      console.log(coords);
      // Create array in reverse format for API
      let coordArray = coords.map(({ latitude, longitude }) => [
        longitude,
        latitude,
      ]);
      console.log(coordArray.toString());
      let stringArray = coordArray.toString();

      // Replace every second comma with semi-colon to address API correctly
      let n = 2;
      let ch = ",";
      let regex = new RegExp(
        "((?:[^" + ch + "]*" + ch + "){" + (n - 1) + "}[^" + ch + "]*)" + ch,
        "g"
      );
      let urlCoords = stringArray.replace(regex, "$1;");
      console.log(urlCoords);
      return res.json(urlCoords); // - PROBLEM
    }
  });
});

// Snap data with OSRM to streetgrid of Atlanta
app.get("/snap", (req, res) => {
  axios.get("http://localhost:4000/matched").then((response) => {
    console.log(response.data);
    let url = `http://localhost:5000/match/v1/foot/${response.data}`;
    console.log(url);
    axios
      .get(url)
      .then((response2) => {
        // only returns the snapped location]
        console.log(response2.data.tracepoints.some((item) => item === null));
        let tracepoints = response2.data.tracepoints.filter(function (
          tracepoint
        ) {
          return tracepoint !== null;
        });
        console.log(tracepoints.some((item) => item === undefined));

        let snappedCoords = tracepoints.map(({ location }) => location);
        // Reverse each coord so latitude is before longitude
        snappedCoords.forEach((coord) => {
          coord.reverse();
          console.log(coord);
        });
        return res.json(snappedCoords);
      })
      .catch((error) => {
        console.log(error);
      });

    // return res.json("ERROR");
  });
});

// Open the port 4000 to listen to requests
app.listen(4000, () => {
  console.log("Connection to backend successful.");
});
