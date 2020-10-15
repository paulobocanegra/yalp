import React from 'react';
class SessionHeader extends React.Component{
    render(){
    return(
        <div className="session-header">
            <img src={window.logoURL}/>
        </div>
    )
    }
}

export default SessionHeader;