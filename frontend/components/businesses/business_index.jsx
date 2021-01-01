import React from 'react';
// import { Link } from "react-router-dom"
import BusinessIndexItem from './business_index_item'

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
        } else {
        return (
            <div className="business-box">
                <div className="business-index">
                    <h3 className="business-ul-title">Find the Best Businesses in Town</h3>
                </div>
                <div>
                    <ul className="business-ul">
                        {
                            this.props.businesses.map((business) => (<BusinessIndexItem business={business}
                                                                                        key={business.id}
                                                                                        fetchReviews={this.props.fetchReviews}/>))
                        }
                    </ul>
                </div>
            </div>
        )}
    }
}

export default BusinessIndex;