import React from 'react';
import { Link } from 'react-router-dom';


const BusinessIndexItem = ({ business }) => {
    debugger
    return (
        <div className="business-li">
            <div className="business-img">
                <img src={business.main_photoUrl} />
            </div>
            <div className="business-bottom">
                <li className="business-li-content">
                    <Link to={`/businesses/${business.id}`} className="business-link">{business.name}
                    </Link>
                        <p className="bottom-description">{business.rating}</p>
                        <p className="bottom-description">{business.bio}</p>
                        <p className="bottom-description">{business.location}</p>
                </li>
            </div>
        </div>
    )
}

export default BusinessIndexItem;