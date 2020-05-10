import React, { useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import dotenv from 'dotenv';
import axios from 'axios'

const CampusMap = ({ campus, color }) => {
    dotenv.config();

    useEffect(() => {
        console.log("useEffect")
        axios.get("https://access-campus-api.herokuapp.com/api/buildings")
            .then((res) => {
                console.log(res.data.data[0].name);
            }).catch(() => {
                console.error;
            });
    }, [])

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