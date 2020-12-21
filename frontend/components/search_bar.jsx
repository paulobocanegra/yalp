import React from 'react'

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            query: ''
        };

        this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(e){
        e.preventDefault();
        this.setState({ query: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();

        this.props.getSearchBusinesses(this.state.query)
            .then( () => this.props.history.push(`/search/${this.state.query}`));
    }

    render(){
        return (
            <div className="search-bar">
                <form className="search-bar" onSubmit={this.handleSubmit}>
                    <div className="search-bar-left">
                        <label className="search-bar-label" id="find">Find
                            </label>
                        <input className="search-left-input" type="text" placeholder="delivery, takeout..." 
                        onChange={this.update}/>
                    </div>
                    <div className="search-bar-right">
                        <label htmlFor="near-search" className="search-bar-label" id="near"> Near
                        </label>
                        <input id="near-search" className="search-right-input" type="text" placeholder="San Francisco" 
                        onChange={this.update}/>
                    </div>
                    <button>
                        <img className="search-logo" src={window.search} />
                    </button>
                </form> 
            </div>
        )
    }
}



export default SearchBar;
