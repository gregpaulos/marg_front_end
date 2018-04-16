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
            <InfoWindow 
                lat={this.props.location.lat}
                lng={this.props.location.lng}
                content={'You are here!'} />
            {this.props.data.map((location, i) => {
                return (
                    <Marker
                        key={`marker-${i}`}
                        lat={Number(location.lat)}
                        lng={Number(location.long)} />
                )
            })}
            </Gmaps> }
            </div>
        );
    }
}

export default MargMap;