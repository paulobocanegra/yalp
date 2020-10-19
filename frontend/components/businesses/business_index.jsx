import React from 'react';
// import { Link } from "react-router-dom"
import BusinessIndexItem from './business_index_item'
import HomeContainer from '../home_container'
import Home from '../home'

class BusinessIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBusinesses()
    }

    render() {
        if (!this.props.fetchBusinesses){
            return null;
        }
        return (
            <div className="business-index">
                <ul>
                    {
                        this.props.businesses.map((business) => <BusinessIndexItem business={business}
                                                                                    key={business.id}/>)
                    }
                </ul>
            </div>
        )
    }
}

export default BusinessIndex;