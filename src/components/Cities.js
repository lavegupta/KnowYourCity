import React, { Component } from "react";

class Cities extends Component {

    constructor(){
        super();
        this.state = {
            cities : [],
            currentCity: undefined 
        }
    }

    setCity(v){
        this.props.getInfo(v);
        this.setState({ currentCity: v });
    }

    componentWillReceiveProps(props) {
        if(props.data.region.length && props.data.country.length){
            fetch(`http://geodb-free-service.wirefreethought.com/v1/geo/countries/${props.data.country}/regions/${props.data.region}/cities?limit=10`)
            .then(resp => resp.json())
            .then(data => this.setState({ cities : data.data }) )
        }
    }

    render(){
        return (
            <div className="Slot" id="cities">
                <h2>{this.props.title}</h2>
                <ul className="listing">
                    {this.state.cities.length ? this.state.cities.map(city => <li className={this.state.currentCity === city.id ? 'current' : ''} onClick={()=>this.setCity(city.id)} key={city.id}>{city.city}</li>) : <h4>No Cities</h4>}
                </ul>
            </div>
        )
    }
}

export default Cities;