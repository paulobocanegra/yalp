import React from 'react';
import { Link } from "react-router-dom"

class BusinessShowComponent extends React.Component{
    componentDidMount() {
        this.props.fetchBusiness(this.props.business.id)
    }

    render(){
        return(
            <div>
                <h1>{this.props.business.name}</h1>
                <p>{this.props.business.rating}</p>
                <p>{this.props.business.bio}</p>
                <p>rating: {this.props.business.rating}</p>
                <Link to="/businesses">home</Link>
            </div>
        )
    }
}

export default BusinessShowComponent;