import React from 'react';
import CampusMap from '../campus-map/CampusMap';

const CampusPage = ({ campus, color, index }) => {
    return (
        <div className="campus-page">
            <CampusMap
                key={index}
                index={index}
                campus={campus}
                color={color}
            />
        </div>
    );
}

export default CampusPage;