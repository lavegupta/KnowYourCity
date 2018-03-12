import React, { Component } from "react";

class Regions extends Component {

    constructor(){
        super();
        this.state = {
            currentRegion: undefined 
        }
    }

    setRegion(v){
        this.props.getCities(v);
        this.setState({ currentRegion: v });
    }

    render(){
        return (
            <div className="Slot" id="regions">
                <h2>{this.props.title}</h2>
                <ul className="listing">
                    {this.props.list.length ? this.props.list.map(region => 
                        <li className={this.state.currentRegion === region.isoCode ? 'current' : ''} onClick={() => this.setRegion(region.isoCode)} key={region.isoCode}>{region.name}</li>
                    ) : <h4>No Regions</h4>}
                </ul>
            </div>
        )
    }
}

export default Regions;