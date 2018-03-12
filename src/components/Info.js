import React, { Component } from "react";

class Info extends Component {
    constructor(props){
        super(props);
        this.state = {
            cityDetails : undefined
        }
    }

    componentWillReceiveProps(props) {
        typeof props.data.city === 'number' ? 
        fetch(`http://geodb-free-service.wirefreethought.com/v1/geo/cities/${props.data.city}`)
        .then(resp => resp.json())
        .then(data => this.setState({ cityDetails : data.data }) ) : 
        this.setState({ cityDetails : undefined })
        console.log(props);
        
    }

    render(){
        return (
            <div className="Slot" id="info">
                <h2>{this.props.title}</h2>
                {this.state.cityDetails !== undefined ? <dl className="info">
                    <dt>Country Code</dt>
                    <dd>{this.state.cityDetails.countryCode}</dd>
                    <dt>Region Code</dt>
                    <dd>{this.state.cityDetails.regionCode}</dd>
                    <dt>Timezone</dt>
                    <dd>{this.state.cityDetails.timezone}</dd>
                    <dt>Population</dt>
                    <dd>{this.state.cityDetails.population}</dd>
                    <dt>Location (Lat, Long)</dt>
                    <dd>{this.state.cityDetails.location.latitude}, {this.state.cityDetails.location.longitude }</dd>
                </dl> : <h4>No Details Available</h4>}
            </div>
        )
    }
}

export default Info;