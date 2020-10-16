import React from 'react';
import { Link } from 'react-router-dom'
class SessionHeader extends React.Component{
    render(){
    return(
        <div className="session-header">
            <Link to="/">
                <img className="logo" src={window.logoURL} />
            </Link>
        </div>
    )
    }
}

export default SessionHeader;