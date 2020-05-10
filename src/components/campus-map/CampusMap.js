import React from 'react';

const CampusMap = ({ campus, color }) => {
    return (
        <div className="campus-map">
            {campus} + {color}
        </div>
    );
};

export default CampusMap;