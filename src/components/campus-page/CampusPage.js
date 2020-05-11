import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import CampusMap from '../campus-map/CampusMap';
import BuildingSelector from '../building-selector/BuildingSelector';

const CampusPage = ({ campus, color, index }) => {
    return (
        <div className="campus-page">
            {/* <h1>{buildings.length == 0 ? "none" : buildings[0].name}</h1> */}
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