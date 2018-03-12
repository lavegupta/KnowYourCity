import React, { Component } from "react";

class Regions extends Component {

    constructor(){
        super();
        this.state = {
            regions: [],
            currentRegion: undefined 
        }
    }

    setRegion(v){
        this.props.getCities(v);
        this.setState({ currentRegion: v });
    }

    componentWillReceiveProps(props) {
        if(props.data.country.length){ 
            fetch(`http://geodb-free-service.wirefreethought.com/v1/geo/countries/${props.data.country}/regions/?limit=10`)
            .then(resp => resp.json())
            .then(data => this.setState({ regions : data.data }) )
        }
        
    }


    render(){
        return (
            <div className="Slot" id="regions">
                <h2>{this.props.title}</h2>
                <ul className="listing">
                    {this.state.regions.length ? this.state.regions.map(region => 
                        <li className={this.state.currentRegion === region.isoCode ? 'current' : ''} onClick={() => this.setRegion(region.isoCode)} key={region.isoCode}>{region.name}</li>
                    ) : <h4>No Regions</h4>}
                </ul>
            </div>
        )
    }
}

export default Regions;