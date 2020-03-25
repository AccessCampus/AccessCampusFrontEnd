import SearchDropdown from "./SearchDropdown";
import SearchMap from "./SearchMap";
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

    onDropDownClick = async term => {
        const res = await axios.get("http://localhost:4000/api/buildings");
        let tempAllNames = [];
        res.data.data.forEach((data) => {
            tempAllNames.push(data["name"]);
        })
        this.setState({ allNames: tempAllNames});
    }

    render = () => {
        return (
            <div className="app">
                <h1>Access UBC</h1>
                <div>Search Icon</div>
                <SearchDropdown
                    onSubmit={this.onDropdownSubmit}
                    onClick={this.onDropDownClick} />
                <SearchMap
                    entrances={this.state.entrances}
                    name={this.state.building}
                    allNames = {this.state.allNames}/>
            </div>
        );
    };
}

export default App;