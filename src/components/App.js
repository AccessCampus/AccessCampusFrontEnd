import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import { render } from 'react-dom';
import axios from 'axios'
import { Header, Footer } from './layouts/index';
import CampusCards from './campus-cards/CampusCards';
import CampusPage from './campus-page/CampusPage';

const App = () => {
    const [campusList, setCampusList] = useState([{
        campus: "blank",
        color: "#000",
        coords: { lat: 0, long: 0 },
    }]);
    useEffect(() => {
        async function getCampuses() {
            const res = await axios.get("http://localhost:4000/api/campuses");
            let tempList = [];
            res.data.data.forEach(data => {
                tempList.push({
                    campus: data.attributes.acronym,
                    color: data.attributes["theme-color"],
                    coords: data.attributes.coords
                })
            });
            setCampusList(tempList);
        }
        getCampuses();
    }, []);

    return (
        campusList.length == 1 ?
            <h1>Loading</h1> :
            <div className="app">
                <Header />
                <Router>
                    <CampusCards path="/"
                        campusList={campusList}
                    />
                    {campusList.map(({ campus, color, coords }, index) =>
                        <CampusPage
                            key={index}
                            index={index}
                            path={`/${campus}`}
                            campus={campus}
                            color={color}
                            coords={coords}
                        />
                    )}
                </Router>
                <Footer />
            </div >
    )
};

render(React.createElement(App), document.getElementById("root"));