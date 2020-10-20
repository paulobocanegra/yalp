import React from 'react'

class SearchBar extends React.Component{
    render(){
        return (
            <div className="search-bar">
                <div className="search-bar-left">
                    <label className="search-bar-label" id="find">Find
                        </label>
                    <input className="search-left-input" type="text" placeholder="delivery, takeout..." />
                </div>
                <div className="search-bar-right">
                    <label className="search-bar-label" id="near"> Near
                        </label>
                    <input className="search-right-input" type="text" placeholder="San Francisco" />
                </div>
            </div>
        )
    }
}



export default SearchBar;
