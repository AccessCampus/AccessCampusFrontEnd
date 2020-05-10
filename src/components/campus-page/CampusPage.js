import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import CampusMap from '../campus-map/CampusMap';
import BuildingSelector from '../building-selector/BuildingSelector';

const CampusPage = ({ campus, color, index }) => {
    useEffect(() => {
        axios.get("https://access-campus-api.herokuapp.com/api/buildings")
            .then((res) => {
                console.log(res.data.data);
            }).catch(() => {
                console.error;
            });
    }, []);

    return (
        <div className="campus-page">
            <Grid container>
                <Grid item xs={12} md={6} item>
                    <CampusMap
                        key={index}
                        index={index}
                        campus={campus}
                        color={color}
                    />
                </Grid>
                <Grid item xs={12} md={6} item>
                    <BuildingSelector
                        campus={campus}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default CampusPage;