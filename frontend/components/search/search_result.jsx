import React from 'react';
// import { Link } from "react-router-dom"
import SearchResultItem from './search_result_item'


class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSearch: this.props.location.search
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.search !== this.props.location.search) {
            const { location: { search } } = this.props;
            const query = search.split('=')[1].split('+').join(' ');
            this.props.getSearchBusinesses(query);
        }
    }

    componentDidMount() {
        const { location: { search } } = this.props;
        const query = search.split('=')[1].split('+').join(' ');
        this.props.getSearchBusinesses(query);
    }

    render() {
        if (!this.props.getSearchBusinesses) {
            return null;
        } else {
            return (
                <div className="business-box">
                    <div className="business-index">
                        <h3 className="business-ul-title">Search Results:</h3>
                    </div>
                    <div>
                        <ul className="business-ul">
                            {
                                this.props.businesses.map((business) => (<SearchResultItem business={business}
                                    key={business.id}
                                    fetchReviews={this.props.fetchReviews} />))
                            }
                        </ul>
                    </div>
                </div>
            )
        }
    }
}

export default SearchResult;