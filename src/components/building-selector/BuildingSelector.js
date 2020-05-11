import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from '@material-ui/core/Select';
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
            <Select
                multiple
                native
                value={buildings}
            >
                <option
                    key={
                        buildings.length === 0 ?
                            "none" : buildings[0].id
                    }
                    value={
                        buildings.length === 0 ?
                            "none" : buildings[0].id
                    }
                >
                    {
                        buildings.length === 0 ?
                            "none" : buildings[0].id
                    }
                </option>
                ))}
            </Select>
        </div>
    );
}

export default BuildingSelector;