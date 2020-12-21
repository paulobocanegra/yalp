import React from 'react'

class SearchBarShow extends React.Component {
    render() {
        return (
            <div className="search-bar-show">
                <div className="search-bar-left-show">
                    <input className="search-left-input-show" type="text" placeholder="delivery, takeout..." />
                </div>
                <div className="search-bar-right-show">
                    <input className="search-right-input-show" type="text" placeholder="San Francisco" />
                </div>
                <button className="search-button">
                    <i className="fas fa-search"></i>
                </button>
            </div>
        )
    }
}



export default SearchBarShow;

