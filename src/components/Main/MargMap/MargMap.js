import React, { Component } from "react";
import { Gmaps, Marker, InfoWindow } from 'react-gmaps';

class MargMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coordinates: [],
            infoWindows: [false, false, false, false, false]
        };
    }

    onMapCreated = (map) => {
        map.setOptions({
            disableDefaultUI: true
        });
    }

    toggleInfoWindow = (i) => {
        const {infoWindows} = this.state;
        infoWindows[i] = !infoWindows[i];
        this.setState({
            infoWindows
        });
    }

    renderInfoWindows = () => {
        return this.props.data.map((location, i) => {
            if (!this.state.infoWindows[i]) return null;
            return (
              <InfoWindow
                key={i}
                lat={location.lat}
                lng={location.long}
                content={`<h2>${location.name}</h2>`}
                onCloseClick={() => this.toggleInfoWindow(i)}
              />
            );
        })
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
                        lng={Number(location.long)}
                        onClick={() => this.toggleInfoWindow(i)} />
                )
            })}
            {this.renderInfoWindows()}
            </Gmaps> }
            </div>
        );
    }
}

export default MargMap;