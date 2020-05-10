import React from 'react';
import capitalizeCampusName from '../../utils/capitalizeCampusName'

const BuildingSelector = ({ campus }) => {
    const campusText = capitalizeCampusName(campus);

    return (
        <div className="campus-selector">
            Choose your building on the {campusText} Campus!
        </div>
    );
}

export default BuildingSelector;