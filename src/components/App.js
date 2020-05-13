import React from 'react';
import { Router } from '@reach/router';
import { render } from 'react-dom';
import { Header, Footer } from './layouts/index';
import CampusCards from './campus-cards/CampusCards';
import CampusPage from './campus-page/CampusPage';
import campusList from '../data/campusList';

const App = () => {
    return (
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