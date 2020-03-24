import React from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class SearchMap extends React.Component {
    constructor(props) {
        super(props);
        console.log("hello");
        this.state = this.props.entrances;
    };

    mapStyles = {
        width: '50%',
        height: '50%',
    };

    displayMarkers = () => {
        if (this.state.entrances !== undefined && this.state.entrances !== null) {
            console.log(this.state.entrances[1]);
            return this.state.entrances.map((entrance, index) => {            
                return <Marker key={index} id={index} position={{
                    lat: entrance.lat,
                    lng: entrance.long
                }}
                    onClick={() => console.log("You clicked me!")} />
            })
        }
    }

    render = () => {
        return (
            <div className="search-map">
                <Map
                    google={this.props.google}
                    zoom={15}
                    style={this.mapStyles}
                    initialCenter={{ lat: 49.267854, lng: -123.24983199999997 }}>
                    {this.displayMarkers()}
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCDgTipX4nMXDFHiSkw0fSo0idfZsOecAs'
})(SearchMap);