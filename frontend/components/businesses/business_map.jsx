// import google from '@react-google-maps/api'
// import { GoogleMap } from '@react-google-maps/api'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from 'react'

class BusinessMap extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const mapOptions = {
            center: {
                lat: this.props.currentBusiness.lat, lng: this.props.currentBusiness.lng
            },
            zoom: 13
        }

        this.map = new google.maps.Map(this.mapNode, mapOptions)
    }

    render(){
        return (
            <div id='map-container' ref={ map => this.mapNode = map}>
            </div>
            )
    }
}

export default BusinessMap;