import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import { render } from 'react-dom';
import CampusCards from './campus-cards/CampusCards';
import CampusPage from './campus-page/CampusPage';
import campusList from '../data/campusList';
import axios from 'axios';

const App = () => {
    const [buildings, setBuildings] = useState([]);

    useEffect(() => {
        async function getBuildings() {
            const res = await axios.get("https://access-campus-api.herokuapp.com/api/buildings");
            setBuildings(res.data.data);
        }
        getBuildings();
    }, []);

    return (
        <div className="app">
            <Router>
                <CampusCards path="/"
                    campusList={campusList}
                    buildings={buildings}
                />
                {campusList.map(({ campus, color }, index) =>
                    <CampusPage
                        key={index}
                        index={index}
                        path={`/${campus}`}
                        campus={campus}
                        color={color}
                        buildings={buildings}
                    />
                )}
            </Router>
        </div >
    )
};

render(React.createElement(App), document.getElementById("root"));