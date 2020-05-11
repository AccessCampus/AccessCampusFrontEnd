import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import { render } from 'react-dom';
import CampusCards from './campus-cards/CampusCards';
import CampusPage from './campus-page/CampusPage';
import campusList from '../data/campusList';
import axios from 'axios';

const App = () => {
    return (
        <div className="app">
            <Router>
                <CampusCards path="/"
                    campusList={campusList}
                />
                {campusList.map(({ campus, color }, index) =>
                    <CampusPage
                        key={index}
                        index={index}
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