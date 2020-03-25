import "../stylesheets/search_map.css"
import React from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class SearchMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = { entrances: [{}] };
    };

    static getDerivedStateFromProps(props, state) {
        if (props.entrances !== state.entrances) {
            return {
                entrances: props.entrances
            }
        }
        return null;
    }

    mapStyles = {
        marginLeft: "auto",
        marginRight: "auto",
        width: '85%',
        height: '50%',
    };

    displayCenter = () => {
        if (this.state.entrances[0] === undefined) {
            return {
                lat: 49.267854,
                lng: -123.24983199999997
            }
        } else {
            let centerLat = 0;
            let centerLong = 0;
            this.state.entrances.forEach((coord) => {
                centerLat += coord.lat;
                centerLong += coord.long;
            })
            centerLat = centerLat/this.state.entrances.length;
            centerLong = centerLong/this.state.entrances.length;
            return {
                lat: centerLat,
                lng: centerLong
            }
        }
    }

    displayZoom = () => {
        if (this.state.entrances[0] === undefined) {
            return 15;
        } else {
            return 18;
        }
    }

    displayMarkers = () => {
        if (this.state.entrances !== undefined && this.state.entrances !== null) {
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
                    zoom={this.displayZoom()}
                    style={this.mapStyles}
                    initialCenter={this.displayCenter()}
                    center={this.displayCenter()}>
                    {this.displayMarkers()}
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCDgTipX4nMXDFHiSkw0fSo0idfZsOecAs'
})(SearchMap);