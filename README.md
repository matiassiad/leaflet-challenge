
# Earthquake Visualization with Leaflet - leaflet-challenge

This project visualizes earthquake data using Leaflet, D3, and GeoJSON. It displays earthquakes from the past week sourced from the USGS GeoJSON feed. Each earthquake is represented by a circle marker on the map, with its size corresponding to its magnitude and its color representing its depth.

## Usage

To use this project, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/matiassiad/leaflet-challenge
    ```

2. Navigate to the project directory:

    ```bash
    cd leaflet-challenge
    ```

3. Open `index.html` in a web browser.

## Dependencies

This project relies on the following libraries:

- Leaflet: For creating interactive maps.
- D3.js: For data manipulation and visualization.
- OpenStreetMap: For the base tile layer.

## Data Source

The earthquake data is sourced from the USGS GeoJSON feed, specifically the summary of earthquakes from the past week.

## Features

- Each earthquake is represented by a circle marker on the map.
- The size of the marker corresponds to the magnitude of the earthquake.
- The color of the marker represents the depth of the earthquake, ranging from yellow to violet.
- Clicking on a marker displays additional information about the earthquake, including its magnitude, location, and depth.
- A legend is provided to interpret the colors representing depth.

## References

- https://git.bootcampcontent.com/University-of-Adelaide/UADEL-VIRT-DATA-PT-12-2023-U-LOLC
- D3.js: https://d3js.org/
- https://leafletjs.com/
- 