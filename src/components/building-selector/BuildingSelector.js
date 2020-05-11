import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import capitalizeCampusName from '../../utils/capitalizeCampusName';

const BuildingSelector = ({ campus }) => {
    const campusText = capitalizeCampusName(campus);
    const [buildings, setBuildings] = useState([]);

    useEffect(() => {
        async function getBuildings() {
            const res = await axios.get("https://access-campus-api.herokuapp.com/api/buildings");
            setBuildings(res.data.data);
        }
        getBuildings();
    }, []);

    return (
        <div className="campus-selector">
            <InputLabel
                shrink
                htmlFor="select-multiple-native"
            >
                {`${campusText} Buildings`}
            </InputLabel>
            <Select
                multiple
                native
                value={buildings}
            >
                {buildings.length === 0 ?
                    <option
                        key={"none"}
                        value={"none"}
                    >
                        No info available
                    </option>
                    :
                    buildings.map(building => (
                        <option
                            key={building.id}
                            value={building.name}
                        >
                            {building.name}
                        </option>
                    ))}
            </Select>
        </div>
    );
}

export default BuildingSelector;