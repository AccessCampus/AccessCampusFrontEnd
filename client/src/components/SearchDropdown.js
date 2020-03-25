import ReactDOM from "react-dom";
import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";

class SearchDropdown extends React.Component {
    state = { term: "", allnames: [] }

    static getDerivedStateFromProps(props, state) {
        if (props.allNames !== state.allNames) {
            return {
                allNames: props.allNames
            }
        }
        return null;
    }

    returnAllNames = () => {
        let result = [];
        if (this.state.allNames !== undefined) {
            for (let i = 0; i < this.state.allNames.length; i++) {
                result.push({key: i, text: this.state.allNames[i], value: i});
            }
        }
        console.log(result);
        return result;
    }
    
    options = this.returnAllNames();
    // [
    //     { key: 1, text: "ICICS", value: 1 },
    //     { key: 2, text: "AMS Nest", value: 2 },
    //     { key: 3, text: "Geology Building", value: 3 },
    //     { key: 4, text: "Biology Building", value: 4 },
    //     { key: 5, text: "Chemistry", value: 5 },
    // ]

    onDropDownClick = () => {
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
