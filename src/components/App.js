import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import { render } from 'react-dom';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faSpin } from '@fortawesome/free-solid-svg-icons'
import { Header, Footer } from './layouts/index';
import CampusCards from './campus-cards/CampusCards';
import CampusPage from './campus-page/CampusPage';

const App = () => {
    const [campusList, setCampusList] = useState([]);
    useEffect(() => {
        async function getCampuses() {
            const campuses = await axios.get("https://www.access-campus-api.app/api/campuses");
            const buildings = await axios.get("https://www.access-campus-api.app/api/buildings")
            let tempBuildings = {};
            let tempCampuses = [];
            buildings.data.data.forEach(building => {
                createBuilding(building, tempBuildings);
            });
            campuses.data.data.forEach(campus => {
                tempCampuses.push({
                    campus: campus.attributes.acronym,
                    color: campus.attributes["theme-color"],
                    coords: campus.attributes.coords,
                    buildings: tempBuildings[campus.attributes.acronym]
                })
            });
            setCampusList(tempCampuses);
        }
        getCampuses();
    }, []);

    function createBuilding(building, tempBuildings) {
        let newObj = {
            name: building.attributes.name,
            coords: building.attributes.coords,
            entrances: building.attributes.entrances
        }
        if (tempBuildings[building.attributes["campus-name"]] === undefined) {
            tempBuildings[building.attributes["campus-name"]] = [newObj];
        } else {
            tempBuildings[building.attributes["campus-name"]].push(newObj);
        }
    }

    return (
        campusList.length == 0 ?
            <div>
                <h1>Loading</h1>
                <span>
                    <FontAwesomeIcon size={"3x"} icon={faSpinner} spin />
                </span>
            </div>
            :
            <div className="app">
                <Header />
                <Router>
                    <CampusCards path="/"
                        campusList={campusList}
                    />
                    {campusList.map(({ campus, color, coords, buildings }, index) =>
                        <CampusPage
                            key={index}
                            index={index}
                            path={`/${campus}`}
                            campus={campus}
                            color={color}
                            coords={coords}
                            buildings={buildings}
                        />
                    )}
                </Router>
                <Footer />
            </div >
    )
};

render(React.createElement(App), document.getElementById("root"));