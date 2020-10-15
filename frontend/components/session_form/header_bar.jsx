import React from 'react';
class SessionHeader extends React.Component{
    render(){
    return(
        <div className="session-header">
            <img className="logo" src={window.logoURL}/>
        </div>
    )
    }
}

export default SessionHeader;