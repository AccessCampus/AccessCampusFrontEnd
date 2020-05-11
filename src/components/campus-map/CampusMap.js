import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import dotenv from 'dotenv';

const CampusMap = ({ campus, color, index, buildingName, buildings }) => {
    const [entranceLocations, setEntranceLocations] = useState([]);

    function getEntranceLocations() {
        console.log(buildingName);
        console.log(buildings);
    }

    useEffect(() => {
        setEntranceLocations([]);
        getEntranceLocations();
    }, [buildings, buildingName]);

    dotenv.config();

    const mapStyles = {
        height: "50vh",
        width: "85%",
    }

    const defaultCenter = {
        lat: 41.3851, lng: 2.1734
    }

    return (
        <div className="campus-map">
            <LoadScript
                googleMapsApiKey={process.env.API_KEY}>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={13}
                    center={defaultCenter}
                />
            </LoadScript>
        </div>
    );
};

export default CampusMap;