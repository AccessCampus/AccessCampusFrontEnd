import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import capitalizeCampusName from '../../utils/capitalizeCampusName';

const BuildingSelector = ({ campus, handleBuildingChoice }) => {
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
                htmlFor="select-multiple-native"
            >
                {`${campusText} Buildings`}
            </InputLabel>
            <Select
                variant="outlined"
                native
                onChange={handleBuildingChoice}
            >
                {buildings.length === 0 ?
                    <option
                        value={"none"}
                        key={"none"}
                    >
                        No buildings available to search
                    </option>
                    :
                    [<option
                        value={"disabled"}
                        disabled
                        key={"-1"}
                    >
                        Choose a building to find entrances for below:
                    </option>]
                        .concat(
                            buildings.map(building => (
                                <option
                                    key={building.id}
                                    value={building.name}
                                >
                                    {building.name}
                                </option>
                            ))
                        )}
            </Select>
        </div>
    );
}

export default BuildingSelector;