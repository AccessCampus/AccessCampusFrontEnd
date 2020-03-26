import SearchDropdown from "./SearchDropdown";
import SearchMap from "./SearchMap";
import CampusMenu from "./CampusMenu"
import UBCLogo from "../images/ubc.png";
import "../stylesheets/app.css";
import React from "react";
import axios from "axios";

class App extends React.Component {
    state = { building: "", entrances: [], allNames: [] };

    onDropdownSubmit = async term => {
        let search = term;
        const res = await axios.get("http://localhost:4000/api/buildings", {
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
        const res = await axios.get("http://localhost:4000/api/buildings");
        let tempAllNames = [];
        res.data.data.forEach((data) => {
            tempAllNames.push(data["name"]);
        });
        this.setState({ allNames: tempAllNames });
    }

    onMenuClick = term => {
        console.log(term);
    }

    render = () => {
        return (
            <div className="app">
                <CampusMenu 
                    onClick={this.onMenuClick}/>
                <div className="header">
                    <span className="access">ACCESS</span>
                    <span>
                        <img alt="UBC" src={UBCLogo}></img>
                    </span>
                </div>
                <SearchDropdown
                    onSubmit={this.onDropdownSubmit}
                    onClick={this.onDropDownClick}
                    allNames={this.state.allNames} />
                <SearchMap
                    entrances={this.state.entrances}
                    name={this.state.building} />
            </div>
        );
    };
}

export default App;