import SearchDropdown from "./SearchDropdown";
import SearchMap from "./SearchMap";
import React from "react";
import axios from "axios";

class App extends React.Component {
    state = {building: "", entrances: [], allBuildings: []};

    onDropdownSubmit = async term => {
        let search = term;
        const res = await axios.get("http://localhost:4000/api/buildings", {
            params: { query: term }
        });
        let tempBuildings = [];
        let tempBuildingName = "";
        let tempEntrances = [];
        let changed = false;
        res.data.data.forEach((data) => {
            tempBuildings.push(data["name"]);
            if (data["name"] === search) {
                changed = true;
                tempBuildings = data["name"];
                tempEntrances = data["entrances"];
            }
        });
        if(!changed) {
            this.setState({building: "not found"});
        } else {
            this.setState({building: tempBuildingName}); 
            this.setState({entrances: tempEntrances});
            this.setState({allBuildings: tempBuildings});
            console.log(this.state.allBuildings);
        }
    };

    render = () => {
        return(
            <div className="app">
                <h1>Access UBC</h1>
                <div>Search Icon</div>
                <SearchDropdown onSubmit={this.onDropdownSubmit}/>
                <SearchMap entrances={this.state.entrances} name={this.state.building}/>
            </div>
        );
    };
}

export default App;