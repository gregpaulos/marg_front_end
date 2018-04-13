import React, { Component } from "react";
import { Gmaps, Marker, InfoWindow } from 'react-gmaps';

class MargMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coordinates: [],
        };
    }

    onMapCreated = (map) => {
        map.setOptions({
            disableDefaultUI: true
        });
    }

    // markers = this.props.data.map(location => {
    //     return <Marker 
    //             lat={Number(location.lat)}
    //             lng={Number(location.long)}
    //             draggable={false} />
    // });

    render() {
        return (
           <div> 
            { this.props.showMap && 
            <Gmaps 
            width={'600px'}
            height={'400px'}
            lat={this.props.location.lat}
            lng={this.props.location.lng}
            zoom={12}
            onMapCreated={this.onMapCreated} >
            {this.markers}
            <InfoWindow 
              lat={this.props.location.lat}
              lng={this.props.location.lng}
              content={'You are here!'} />
              <Marker 
              lat={Number(this.props.data[0].lat)}
              lng={Number(this.props.data[0].long)} />
              </Gmaps> }
            </div>
        );
    }
}

export default MargMap;