import React, { Component } from "react";

class Cities extends Component {

    constructor(){
        super();
        this.state = {
            currentCity: undefined 
        }
    }

    setCity(v){
        this.props.getInfo(v);
        this.setState({ currentCity: v });
    }

    render(){
        return (
            <div className="Slot" id="cities">
                <h2>{this.props.title}</h2>
                <ul className="listing">
                    {this.props.list.length ? this.props.list.map(city => <li className={this.state.currentCity === city.id ? 'current' : ''} onClick={()=>this.setCity(city.id)} key={city.id}>{city.city}</li>) : <h4>No Cities</h4>}
                </ul>
            </div>
        )
    }
}

export default Cities;