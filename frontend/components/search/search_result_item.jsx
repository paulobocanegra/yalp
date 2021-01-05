import React from 'react';
import { Link } from 'react-router-dom';
import AvgRating from '../reviews/avg_rating_container'

class SearchResultItem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // this.props.fetchBusiness(this.props.business.id);
        this.props.fetchReviews(this.props.business.id)
    }

    // componentWillUnmount(){
    //     this.props.fetchReviews(this.props.business.id)
    // }

    render() {
        return (
            <div className="business-li">
                <Link to={`/businesses/${this.props.business.id}`}>
                    <div className="business-img-holder">
                        <img className="business-img" src={this.props.business.main_photoUrl} />
                    </div>
                </Link>
                <div className="business-bottom">
                    <li className="business-li-content">
                        <Link to={`/businesses/${this.props.business.id}`} className="business-link">{this.props.business.name}
                        </Link>
                        <AvgRating businessId={this.props.business.id}
                            fetchReviews={this.props.fetchReviews}
                        />
                        <p className="bottom-description">{this.props.business.bio}</p>
                        <p className="bottom-description">{this.props.business.location}</p>
                    </li>
                </div>
            </div>
        )
    }
}

export default SearchResultItem;