import SearchDropdown from "./SearchDropdown";
import SearchMap from "./SearchMap";
import CampusMenu from "./CampusMenu";
import UBCLogo from "../images/ubc.png";
import HarvardLogo from "../images/harvard.png";
import SFULogo from "../images/sfu.png";
import GoogleLogo from "../images/google.png";
import "../stylesheets/app.css";
import React from "react";
import axios from "axios";

class App extends React.Component {
    state = { campus: "", building: "", entrances: [], allNames: [] };

    componentDidUpdate = () => {
        if (this.state.campus === "Harvard") {
            document.body.style.backgroundColor = "#A41034";
        } else if (this.state.campus === "SFU") {
            document.body.style.backgroundColor = "#CD3D3D";
        } else if (this.state.campus === "Google") {
            document.body.style.backgroundColor = "#E6E6E6";
        } else {
            document.body.style.backgroundColor = "#0C2344";
        }
    }

    onDropdownSubmit = async term => {
        let search = term;
        const res = await axios.get("https://access-campus-api.herokuapp.com/api/buildings", {
            params: { query: term }
        });
        let tempBuildingName = "";
        let tempEntrances = [];
        let changed = false;
        res.data.data.forEach((data) => {
            if (data["name"] === search) {
                changed = true;
                tempBuildingName = data["name"];
                tempEntrances = data["entrances"];
            }
        });
        if (!changed) {
            this.setState({ building: "not found" });
        } else {
            this.setState({ building: tempBuildingName });
            this.setState({ entrances: tempEntrances });
        }
    }

    onDropDownClick = async () => {
        const res = await axios.get("https://access-campus-api.herokuapp.com/api/buildings");
        let tempAllNames = [];
        res.data.data.forEach((data) => {
            tempAllNames.push(data["name"]);
        });
        this.setState({ allNames: tempAllNames });
    }

    onMenuClick = term => {
        this.setState({ campus: term });
    }

    returnLogo = () => {
        if (this.state.campus === "Harvard") {
            return HarvardLogo;
        } else if (this.state.campus === "SFU") {
            return SFULogo;
        } else if (this.state.campus === "Google") {
            return GoogleLogo;
        } else {
            return UBCLogo;
        }
    }

    returnClassName = () => {
        if (this.state.campus === "Harvard") {
            return "harvard";
        } else if (this.state.campus === "SFU") {
            return "sfu";
        } else if (this.state.campus === "Google") {
            return "google";
        } else {
            return "ubc";
        }
    }

    searchDropDown = () => {
        if (this.state.campus === "Harvard") {
            return (
                <div className="harvard-text">
                    Coming Soon!
                </div>
            )
        } else if (this.state.campus === "SFU") {
            return (
                <div className="sfu-text">
                    Coming Soon!
                </div>
            )
        } else if (this.state.campus === "Google") {
            return (
                <div className="google-text">
                    Coming Soon!
                </div>
            )
        } else {
            return (
                <SearchDropdown
                    onSubmit={this.onDropdownSubmit}
                    onClick={this.onDropDownClick}
                    allNames={this.state.allNames} />
            );
        }
    }

    render = () => {
        return (
            <div className="app">
                <CampusMenu
                    onClick={this.onMenuClick} />
                <div className="header">
                    <img className={this.returnClassName()} alt={this.returnClassName()} src={this.returnLogo()}></img>
                </div>
                <div className="api">
                    <a href="https://access-campus-api.herokuapp.com/api/buildings">Click here for the API!</a>
                </div>
                {this.searchDropDown()}
                <SearchMap
                    entrances={this.state.entrances}
                    name={this.state.building} />
            </div>
        );
    };
}

export default App;