import React from 'react';
import { Link } from "react-router-dom"
import HeaderContainer from '../header_container'

class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            review: {
                body: "",
                rating: 0,
            },
            loading: true,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){

    }

}

export default Profile;