import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import dotenv from 'dotenv';

const CampusMap = ({ campus, color, index, buildingName, buildings }) => {
    dotenv.config();
    const [entranceLocations, setEntranceLocations] = useState([]);

    function getEntranceLocations() {
        for (let building of buildings) {
            if (building.name === buildingName) {
                return building.entrances;
            }
        }
        return [];
    }

    useEffect(() => {
        setEntranceLocations([]);
        setEntranceLocations(getEntranceLocations());
    }, [buildings, buildingName]);

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