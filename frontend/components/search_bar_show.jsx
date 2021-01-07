import React from 'react'
import { connect } from "react-redux"
// import SearchBar from "./search_bar"
import { getSearchBusinesses } from "../actions/business_actions"
import { withRouter } from "react-router-dom"

const mDTP = dispatch => {
    return {
        getSearchBusinesses: query => dispatch(getSearchBusinesses(query))
    }
};



class SearchBarShow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            query: ''
        };

        this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(e) {
        e.preventDefault();
        this.setState({ query: e.target.value })
    }

    // handleEnter(e) {
    //     if (e.key === 'Enter') {
    //         this.handleSubmit(e);
    //     }
    // }

    handleSubmit(e) {
        e.preventDefault();

        this.props.getSearchBusinesses(this.state.query)
            .then(() => this.props.history.push(`/search/${this.state.query}`));

    }

    render() {
        return (
            <div className="search-bar-show">
                <form className="search-bar">
                    <div className="search-bar-left-show">
                        <input className="search-left-input-show" type="text" placeholder="burgers, sushi..." 
                            onChange={this.update}/>
                    </div>
                    <div className="search-bar-right-show">
                        <input className="search-right-input-show" type="text" placeholder="San Francisco" 
                            onChange={this.update}/>
                    </div>
                    <button className="search-button">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>
        )
    }
}


export default withRouter(connect(null, mDTP)(SearchBarShow))
