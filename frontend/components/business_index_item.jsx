import React from 'react';
import { Link } from 'react-router-dom';


const BusinessIndexItem = ({ business }) => {
    return (
        <li>
            <Link to={`/businesses/${business.id}`}>{business.name}</Link>
                <p>{business.rating}</p>
                <p>{business.bio}</p>
                <p>{business.location}</p>
        </li>
    )
}

export default BusinessIndexItem;