import SearchBar from "./SearchBar";
import SearchMap from "./SearchMap";
import React from "react";
import axios from "axios";

class App extends React.Component {
    state = {building: "", entrances: []};

    onSearchSubmit = async term => {
        let search = term;
        const res = await axios.get("http://localhost:4000/api/buildings", {
            params: { query: term }
        });
        let changed = false;
        res.data.data.forEach((data) => {
            if (data["name"] === search) {
                changed = true;
                this.setState({building: data["name"]});
                this.setState({entrances: data["entrances"]});
            }
        });
        if(!changed) {
            this.setState({building: "not found"});
            this.setState({entrances: [{lat: "not found", long: "not found"}]})
        }
    };

    render = () => {
        return(
            <div className="app">
                <h1>Access UBC</h1>
                <div>Search Icon</div>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <SearchMap entrances={this.state.entrances} name={this.state.building}/>
            </div>
        );
    };
}

export default App;