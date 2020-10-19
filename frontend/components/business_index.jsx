import React from 'react';
import { Link } from "react-router-dom"
import BusinessIndexItem from './business_index_item'

class BusinessIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBusinesses()
    }

    render() {
        return (
            <div>
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