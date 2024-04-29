// Define the url for the GeoJSON earthquake data
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Create the map
var map = L.map("map").setView([0, 0], 2.5);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Retrieve and add the earthquake data to the map
d3.json(url).then(function (data) {
    function mapStyle(feature) {
        return {
            opacity: 1,
            fillOpacity: 0.8,
            fillColor: getColor(feature.geometry.coordinates[2]),
            color: "#000",
            radius: mapRadius(feature.properties.mag),
            stroke: true,
            weight: 1
        };
    }

    // Establish colors for depth
    function getColor(depth) {
        var colors = ["#FFFF00", "#FFD700", "#FFA500", "#FF8C00", "#FF4500", "#800080"]; // Yellow to Violet
        var thresholds = [-10, 10, 30, 50, 70, 90];

        for (var i = 0; i < thresholds.length; i++) {
            if (depth <= thresholds[i]) {
                return colors[i];
            }
        }
        return colors[colors.length - 1]; // Default color for depths greater than 90
    }

    // Establish magnitude size
    function mapRadius(mag) {
        if (mag === 0) {
            return 1;
        }

        return mag * 4;
    }

    // Add earthquake data to the map
    L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng);
        },
        style: mapStyle,
        // Activate pop-up data when circles are clicked
        onEachFeature: function (feature, layer) {
            layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place + "<br>Depth: " + feature.geometry.coordinates[2]);
        }
    }).addTo(map);

    // Add the legend with colors to correlate with depth
    var legend = L.control({ position: "bottomright" });
    legend.onAdd = function() {
        var div = L.DomUtil.create("div", "info legend");
        var depth = [-10, 10, 30, 50, 70, 90];
        
        div.innerHTML += "<h3 style='text-align: center'>Depth Km</h3>";
        for (var i = 0; i < depth.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor(depth[i]) + '"></i> ' +
                depth[i] + (depth[i + 1] ? '&ndash;' + depth[i + 1] + '<br>' : '+');
        }
        return div;
    };
    legend.addTo(map);
});