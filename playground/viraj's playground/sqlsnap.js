document.addEventListener('DOMContentLoaded', function () {
    // Initialize Leaflet map
    var map = L.map('map').setView([33.821062, -84.345405], 13); // Adjust to initial coordinates

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

var mysql = require('mysql');
const fs = require('fs');
var coords;

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "st"
  });
con.connect(function (err) {
        if (err) throw err;

        let offset = 0;
        const batchSize = 90000; // Adjust the batch size based on your needs
        var groupedCoordinates = {}; // Initialize an empty object to store grouped coordinates

        function fetchNextBatch() {
            con.query(
                `SELECT trip_id, latitude, longitude, speed, recorded, node_id FROM sc LIMIT ${batchSize} OFFSET ${offset}`,
                function (err, result, fields) {
                    if (err) throw err;

                    if (result.length > 0) {
                        // Process fetched data
                        result.forEach(entry => {
                            if (!groupedCoordinates[entry.trip_id]) {
                                groupedCoordinates[entry.trip_id] = [];
                            }
                            // Push latitude and longitude as LatLng objects to the corresponding trip_id
                            groupedCoordinates[entry.trip_id].push(L.latLng(entry.latitude, entry.longitude));
                        });

                        offset += batchSize;
                        fetchNextBatch(); // Fetch the next batch
                    } else {
                        // All data fetched, plot markers and polylines
                        plotMarkersAndPolylines(groupedCoordinates);
                    }
                }
            );
        }

        // Start fetching the first batch
        fetchNextBatch();
    });

    function plotMarkersAndPolylines(groupedCoordinates) {
        // Plot markers for node coordinates if needed
        // nodecord.forEach(coord => {
        //     var marker = L.marker([coord.Lat, coord.Long]);
        //     marker.bindTooltip(`Trip_id: ${coord.trip_id}`, { permanent: true, direction: 'top', className: 'tooltip-class' });
        //     marker.addTo(map);
        // });

        // Define color mapping for trip_ids
        var colorMapping = {
            176: 'red',
            17: 'blue'
            // Add more entries for other trip_id values and their colors
        };

        // Plot polylines for each trip_id
        Object.keys(groupedCoordinates).forEach(id => {
            var color = colorMapping[id] || 'black'; // Default color if not found in mapping
            var polyline = L.polyline(groupedCoordinates[id], { color: color, weight: 5, opacity: 0.7 }).addTo(map);
            map.fitBounds(polyline.getBounds());
        });
    }
});