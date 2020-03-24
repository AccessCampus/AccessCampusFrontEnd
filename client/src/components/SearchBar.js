import React from "react";

class SearchBar extends React.Component {
    state = { term: "" }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render = () => {
        return (
            <div className="search-bar">
                <form onSubmit={this.onFormSubmit}>
                    <div className="ui search">
                        <div style={{ fontSize: "25px", margin: "15px 0" }}>
                            Building
                        </div>
                        <div className="ui icon input">
                            <input
                                className="prompt"
                                type="text"
                                placeholder="Type term ID here..."
                                value={this.state.term}
                                onChange={e => this.setState({ term: e.target.value })} />
                            <i className="search icon"></i>
                        </div>
                        <div className="results" />
                    </div>
                </form>
            </div >
        );
    }
}

export default SearchBar;
