import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import dotenv from 'dotenv';

const CampusMap = ({ campus, color, index, coords, buildingName, buildings }) => {
    dotenv.config();
    const [entrances, setEntrances] = useState([]);

    function getEntrances() {
        for (let building of buildings) {
            if (building.name === buildingName) {
                return returnConvertedEntrances(building.entrances);
            }
        }
        return [];
    }

    function returnConvertedEntrances(apiEntrances) {
        let result = apiEntrances.map((entrance) => (
            { lat: entrance.lat, lng: entrance.long }
        ));
        return result;
    }

    function calculateCenter() {
        let lat = 0;
        let lng = 0;
        entrances.forEach(coord => {
            lat += coord.lat;
            lng += coord.lng;
        });
        lat = lat / entrances.length;
        lng = lng / entrances.length;
        return { lat: lat, lng: lng }
    }

    useEffect(() => {
        setEntrances([]);
        setEntrances(getEntrances());
        console.log(entrances);
    }, [buildings, buildingName]);

    const mapStyles = {
        height: "50vh",
        width: "85%",
    }

    const defaultCenter = entrances.length === 0 ?
        coords :
        calculateCenter();

    return (
        <div className="campus-map">
            <LoadScript
                googleMapsApiKey={process.env.API_KEY}>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={13}
                    center={defaultCenter}
                >
                    {entrances.map((entrance, index) => (
                        <Marker
                            key={index}
                            position={{ lat: entrance.lat, lng: entrance.lng }}>
                        </Marker>
                    ))}

                </GoogleMap>
            </LoadScript>
        </div >
    );
};

export default CampusMap;