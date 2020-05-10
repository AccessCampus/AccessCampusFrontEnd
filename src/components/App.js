import React from 'react';
import { Router } from '@reach/router';
import { render } from 'react-dom';
import CampusCards from './campus-cards/CampusCards';
import CampusMap from './campus-map/CampusMap';
import campusList from '../data/campusList';

const App = () => {
    return (
        <div className="app">
            <Router>
                <CampusCards path="/" campusList={campusList} />
                {campusList.map(({ campus, color }, index) =>
                    <CampusMap
                        key={index}
                        path={`/${campus}`}
                        campus={campus}
                        color={color}
                    />
                )}
            </Router>
        </div >
    )
};

render(React.createElement(App), document.getElementById("root"));