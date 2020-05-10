import React from 'react';
import { Router } from '@reach/router';
import { render } from 'react-dom';
import CampusCards from './campus-cards/CampusCards';
import campusList from '../data/campusList';

const App = () => {
    return (
        <div className="app">
            <Router>
                <CampusCards default campusList={campusList} />
            </Router>
        </div >
    )
};

render(React.createElement(App), document.getElementById("root"));