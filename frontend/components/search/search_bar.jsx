import React from 'react'

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            query: '',
            location: ''
        };

        this.update = this.update.bind(this)
        this.updateLocation = this.updateLocation.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(e){
        e.preventDefault();
        this.setState({ query: e.target.value})
    }

    updateLocation(e){
        e.preventDefault();
        this.setState({ location: e.target.value})
    }

    // handleEnter(e) {
    //     if (e.key === 'Enter') {
    //         this.handleSubmit(e);
    //     }
    // }

    handleSubmit(e){
        e.preventDefault();
        debugger
        this.props.getSearchBusinesses(this.state)
            .then( () => this.props.history.push(`/search/${this.state.query}`));
    }

    render(){
        return (
            <div className="search-bar">
                <form className="search-bar" onSubmit={this.handleSubmit}>
                    <div className="search-bar-left">
                        <label className="search-bar-label" id="find">Find
                            </label>
                        <input className="search-left-input" type="text" placeholder="burgers, sushi..." 
                        onChange={this.update}/>
                    </div>
                    <div className="search-bar-right">
                        <label htmlFor="near-search" className="search-bar-label" id="near"> Near
                        </label>
                        <input id="near-search" className="search-right-input" type="text" placeholder="San Francisco" 
                            onChange={this.updateLocation}/>
                    </div>
                    <button className="search-button">
                        <i className="fas fa-search"></i>
                    </button>
                </form> 
            </div>
        )
    }
}



export default SearchBar;
