import "../stylesheets/campus_menu.css";
import React from "react";

class CampusMenu extends React.Component {
    constructor (props) {
        super(props);
        this.state = {term: ""};
    }

    onMenuClick = (event) => {
        this.setState({term: event.target.textContent});
        this.props.onClick(event.target.textContent);
    }

    render = () => {
        return (
            <div className="campus-menu">
                <div className="ui four item menu">
                    <a className="item" onClick={this.onMenuClick}>UBC</a>
                    <a className="item" onClick={this.onMenuClick}>SFU</a>
                    <a className="item" onClick={this.onMenuClick}>Google</a>
                    <a className="item" onClick={this.onMenuClick}>Harvard</a>
                </div>
            </div>
        );
    }
}

export default CampusMenu;