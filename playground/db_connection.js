// This file is to test the SQL table what kind of response we recieve



var mysql = require('mysql');
const fs = require('fs');
var coords;

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "st"
  });

global.jsonData = []; 
  
  con.connect(function(err) {
    if (err) throw err;

    let offset = 0;
    const batchSize = 90000; // Adjust the batch size based on your needs
  
    function fetchNextBatch() {
      con.query(
        `SELECT trip_id, latitude, longitude, speed, recorded FROM coord LIMIT ${batchSize} OFFSET ${offset}`,
        function (err, result, fields) {
          if (err) throw err;
  
          if (result.length > 0) {
            console.log(result[0].latitude);
            console.log(result[0].longitude);
            console.log(result[0].trip_id);
            jsonData.push(...result);
  
            offset += batchSize;
            fetchNextBatch(); // Fetch the next batch
          } else {
            // All data fetched, save to file
            saveJsonToFile(jsonData, '/home/virajupadhyay/Desktop/Stress-Map/cycle-stress-map/playground/tripidall.json');
          }
        }
      );
    }
  
    // Start fetching the first batch
    fetchNextBatch();
  });
  
  function saveJsonToFile(data, filename) {
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
    console.log(`JSON data saved to ${filename}`);
  }
//     if (err) throw err;
//     con.query("SELECT trip_id,latitude,longitude,speed,recorded FROM coord LIMIT 90000", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result[0].latitude);
//       console.log(result[0].longitude);
//       console.log(result[0].trip_id);
//       jsonData.push(...result);
//       // Now jsonData is an array containing the fetched MySQL data
//       console.log(jsonData);
//       coords = result[0];
//       saveJsonToFile(jsonData, '/home/virajupadhyay/Desktop/Stress-Map/cycle-stress-map/playground/tripid1.json');
//     });
//   });

//   function saveJsonToFile(data, filename) {
//     fs.writeFileSync(filename, JSON.stringify(data, null, 2));
//     console.log(`JSON data saved to ${filename}`);
// }

// con.connect(function(err) {
//   if (err) throw err;
  
//   // Set the batch size
//   const batchSize = 90000;
  
//   // Initialize starting offset
//   let offset = 0;

//   function fetchAndSaveChunk() {
//     con.query(`SELECT trip_id, latitude, longitude, speed, recorded FROM coord LIMIT ${batchSize} OFFSET ${offset}`, function (err, result, fields) {
//       if (err) throw err;

//       if (result.length > 0) {
//         // Add the chunk to the global jsonData array
//         jsonData.push(...result);
        
//         // Increase the offset for the next chunk
//         offset += batchSize;

//         // Fetch and save the next chunk
//         fetchAndSaveChunk();
//       } else {
//         // No more data, save the entire jsonData array to a file
//         saveJsonToFile(jsonData, '/home/virajupadhyay/Desktop/Stress-Map/cycle-stress-map/playground/tripid1.json');
//         con.end(); // Close the connection when done
//       }
//     });
//   }

//   // Start fetching and saving chunks
//   fetchAndSaveChunk();
// });

// function saveJsonToFile(data, filename) {
//   fs.writeFileSync(filename, JSON.stringify(data, null, 2));
//   console.log(`JSON data saved to ${filename}`);
// }