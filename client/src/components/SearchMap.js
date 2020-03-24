import React from "react";

const getCoords = (coords) => {
    coords.forEach((coord) => {
        console.log(`Lat: ${coord.lat}`);
        console.log(`Long: ${coord.long}`);
    });
}

const SearchMap = (props) => {
    getCoords(props.coords);
    return (
        <div className="search-map">
            <h1>Search Map</h1>
        </div>
    )
}

export default SearchMap;