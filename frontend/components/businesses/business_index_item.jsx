import React from 'react';
import { Link } from 'react-router-dom';


const BusinessIndexItem = ({ business }) => {
    return (
        <div className="business-li">
            <div className="business-img-holder">
                <img className="business-img" src={business.main_photoUrl} />
            </div>
            <div className="business-bottom">
                <li className="business-li-content">
                    <Link to={`/businesses/${business.id}`} className="business-link">{business.name}
                    </Link>
                    <p className="bottom-description"><img className="index-rating-img" src={window.rating4} /></p>
                        <p className="bottom-description">{business.bio}</p>
                        <p className="bottom-description">{business.location}</p>
                </li>
            </div>
        </div>
    )
}

export default BusinessIndexItem;