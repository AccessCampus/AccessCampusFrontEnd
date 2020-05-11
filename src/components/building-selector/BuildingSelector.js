import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import capitalizeCampusName from '../../utils/capitalizeCampusName';

const BuildingSelector = ({ campus, buildings }) => {
    const campusText = capitalizeCampusName(campus);
    const [campusBuilding, setCampusBuildingNames] = useState([]);

    return (
        <div className="campus-selector">
            <Select
                multiple
                native
                value={campusBuilding}
            >
                <option>
                    Hello
                </option>
                ))}
            </Select>
        </div>
    );
}

export default BuildingSelector;