import React, { Component } from "react";

class Info extends Component {
    
    render(){
        return (
            <div className="Slot" id="info">
                <h2>{this.props.title}</h2>
                {this.props.data.city ? <dl className="info">
                    <dt>Country Code</dt>
                    <dd>{this.props.data.countryCode}</dd>
                    <dt>Region Code</dt>
                    <dd>{this.props.data.regionCode}</dd>
                    <dt>Timezone</dt>
                    <dd>{this.props.data.timezone}</dd>
                    <dt>Population</dt>
                    <dd>{this.props.data.population}</dd>
                    <dt>Location (Lat, Long)</dt>
                    <dd>{
                        this.props.data.location.latitude}, {this.props.data.location.longitude
                        }</dd>
                </dl> : <h4>No Details Available</h4>}
            </div>
        )
    }
}

export default Info;