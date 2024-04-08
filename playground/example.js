
function init() {
    var map = L.map('map', {
        center: [52.0, -11.0],
        zoom: 5,
        layers: [
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            })
        ]
    });

    // --- Example with an array of Polylines ---
    var multiCoords1 = [
        [[47.5468, -0.7910], [48.8068, -0.1318], [49.1242, 1.6699], [49.4966, 3.2958], [51.4266, 2.8564], [51.7542, 2.1093]],
        [[48.0193, -2.8125], [46.3165, -2.8564], [44.9336, -1.0107], [44.5278, 1.5820], [44.8714, 3.7353], [45.8287, 5.1855], [48.1953, 5.1416]],
        [[33.787606, -84.359147],
        [33.787606, -84.359148],
        [33.787606, -84.359151],
        [33.787606, -84.359169],
        [33.787605, -84.3592],
        [33.787605, -84.359243],
        [33.787605, -84.35929],
        [33.787605, -84.359332],
        [33.787605, -84.359384],
        [33.787605, -84.359452]]
    ];
    var plArray = [];
    for(var i=0; i<multiCoords1.length; i++) {
        plArray.push(L.polyline(multiCoords1[i]).addTo(map));
    }
    L.polylineDecorator(multiCoords1, {
        patterns: [
            {offset: 25, repeat: 50, symbol: L.Symbol.arrowHead({pixelSize: 15, pathOptions: {fillOpacity: 1, weight: 0}})}
        ]
    }).addTo(map);
}