import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import CampusMap from '../campus-map/CampusMap';
import BuildingSelector from '../building-selector/BuildingSelector';
import dotenv from 'dotenv';

const CampusPage = ({ campus, color, index, coords }) => {
    dotenv.config();
    const [buildingName, setBuildingName] = useState("");
    const [buildings, setBuildings] = useState([]);

    // useEffect(() => {
    //     async function getBuildings() {
    //         const res = await axios.get(process.env.ENTRANCES_API);
    //         setBuildings(res.data.data);
    //     }
    //     getBuildings();
    // }, [buildingName]);

    const handleBuildingChoice = e => {
        setBuildingName(e.target.value)
    };

    return (
        <div className="campus-page">
            <Grid container>
                <Grid item xs={12} item align={"center"}>
                    <CampusMap
                        key={index}
                        index={index}
                        campus={campus}
                        color={color}
                        coords={coords}
                        buildings={buildings}
                        buildingName={buildingName}
                    />
                </Grid>
                <Grid item xs={12} item align={"center"}>
                    <BuildingSelector
                        campus={campus}
                        buildings={buildings}
                        buildingName={buildingName}
                        handleBuildingChoice={handleBuildingChoice}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default CampusPage;