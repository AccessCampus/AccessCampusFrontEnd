import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const CampusMap = ({ campus, color }) => {
    const mapStyles = {
        height: "100vh",
        width: "100%",
    }

    const defaultCenter = {
        lat: 41.3851, lng: 2.1734
    }

    return (
        <div className="campus-map">
            <LoadScript
                googleMapsApiKey="AIzaSyCDgTipX4nMXDFHiSkw0fSo0idfZsOecAs">
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