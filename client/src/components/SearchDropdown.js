import ReactDOM from "react-dom";
import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";

class SearchDropdown extends React.Component {
    constructor (props) {
        super(props);
        this.state = { term: "", allNames: [] };
    }
    
    static getDerivedStateFromProps(props, state) {
        if (props.allNames !== state.allNames) {
            return {
                allNames: props.allNames
            }
        }
        return null;
    }

    componentDidMount = () => {
        this.returnAllNames();
        this.props.onClick();
    }
    
    options = [];

    returnAllNames = () => {
        if (this.state !== undefined && this.state.allNames.length !== 0 && this.options.length === 0) {
            for (let i = 0; i < this.state.allNames.length; i++) {
                this.options.push({key: i, text: this.state.allNames[i], value: i});
            }
        }
    }

    onDropDownClick = () => {
        this.returnAllNames();
        this.props.onClick();
    }

    onDropdownSubmit = (event) => {
        this.props.onSubmit(this.getTextContent(event));
    }

    getTextContent = (event) => {
        let target = ReactDOM.findDOMNode(event.target).children[0]
        if (target === undefined) {
            return ReactDOM.findDOMNode(event.target).textContent;
        } else {
            return target.textContent;
        }
    }

    render = () => {
        return (
            <div className="search-dropdown">
                <div className="ui search">
                    <span style={{ fontSize: "25px", margin: "15px 0" }}>
                        Building
                    </span>
                    <span>
                        <Menu compact>
                            <Dropdown
                                text={this.state.term === "" ? "Building" : this.state.term}
                                options={this.options}
                                value={this.state.term}
                                onClick = {this.onDropDownClick}
                                onChange={(e) => {
                                    this.setState({ term: this.getTextContent(e) });
                                    this.onDropdownSubmit(e);
                                    }
                                }
                                simple item />
                        </Menu>
                    </span>
                </div>
            </div >
        );
    }
}

export default SearchDropdown;
