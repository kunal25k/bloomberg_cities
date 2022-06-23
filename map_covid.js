mapboxgl.accessToken = 'pk.eyJ1Ijoia3VuYWwyNWsiLCJhIjoiY2wzZXk5aHV6MDJxNjNrcWkzc3NmbmZsbSJ9.doJOBOpo8o2JpjQL1cCsNQ';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/kunal25k/cl3f3k2yq001n15pkeduqy8ew',
    zoom: 3.6,
    center: [-95.7129, 37.0902],
    // maxZoom: 15,
    // minZoom: 8,
    // maxBounds: [
    //     [-74.45, 40.45],
    //     [-73.55, 41]
    // ]
});

map.on('load', function() {
    // This is the function that finds the first symbol layer
    let layers = map.getStyle().layers;
    let firstSymbolId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
            firstSymbolId = layers[i].id;
            break;
        }
    }

    // map.addLayer({
    //     'id': 'MTA Station Data',
    //     'type': 'circle',
    //     'source': {
    //         'type': 'geojson',
    //         'data': 'data/turnstileData.geojson'
    //     },
    //     'paint': {
    //         'circle-color': ['interpolate', ['linear'],
    //             ['get', 'ENTRIES_DIFF'], -1, '#ff4400', -0.7, '#ffba31', -0.4, '#ffffff'
    //         ],
    //         'circle-stroke-color': '#4d4d4d',
    //         'circle-stroke-width': 0.5,
    //         'circle-radius': ['interpolate', ['exponential', 2],
    //             ['zoom'],
    //             10, ['interpolate', ['linear'],
    //                 ['get', 'ENTRIES_DIFF'], -1, 10, -0.4, 1
    //             ],
    //             15, ['interpolate', ['linear'],
    //                 ['get', 'ENTRIES_DIFF'], -1, 25, -0.4, 12
    //             ]
    //         ],
    //     }
    // }, firstSymbolId); // Here's where we tell Mapbox where to slot this new layer

    map.addLayer({
        'id': 'Household Income Data',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            // 'data': 'data/stripped.geojson'
            'data': 'data/edited_gdf.geojson'
        },
        'paint': {
            // 'fill-color': ['step', ['get', 'MHHI'],
            'fill-color': ['step', ['get', '2021-01-22'],            
                '#ffffff',
                200, '#ccedf5',
                500, '#99daea',
                750, '#66c7e0',
                1000, '#33b5d5',
                1500, '#00a2ca'
            ],
            'fill-opacity': ['case', ['==', ['get', '2021-01-22'], null], 0, 0.65]
        }
    }, 'waterway-shadow');
});

// // Create the popup
// map.on('click', 'MTA Station Data', function(e) {
//     let entriesDiff = e.features[0].properties.ENTRIES_DIFF;
//     let entries_06 = e.features[0].properties.ENTRIES_06;
//     let entries_20 = e.features[0].properties.ENTRIES_20;
//     let stationName = e.features[0].properties.stationName;
//     new mapboxgl.Popup()
//         .setLngLat(e.lngLat)
//         .setHTML('<h4>' + stationName + '</h4>' +
//             '<p><b>Friday, March 6th:</b> ' + entries_06 + ' entries<br>' +
//             '<b>Friday, March 20th:</b> ' + entries_20 + ' entries<br>' +
//             '<b>Change:</b> ' + Math.round(entriesDiff * 1000) / 10 + '%</p>')
//         .addTo(map);
// });
// // Change the cursor to a pointer when the mouse is over the turnstileData layer.
// map.on('mouseenter', 'MTA Station Data', function() {
//     map.getCanvas().style.cursor = 'pointer';
// });
// // Change it back to a pointer when it leaves.
// map.on('mouseleave', 'MTA Station Data', function() {
//     map.getCanvas().style.cursor = '';
// });

// add menu

// var toggleableLayerIds = ['MTA Station Data', 'Household Income Data'];
var toggleableLayerIds = ['Household Income Data'];

for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];

    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = id;

    link.onclick = function(e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        }
    };

    var layers = document.getElementById('menu');
    layers.appendChild(link);
}