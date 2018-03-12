import React, { Component } from "react";

class Country extends Component {

    constructor(){
        super();
        this.state = {
            currentCountry: undefined 
        }
    }

    setCountry(v){
        this.props.getRegions(v);
        this.setState({ currentCountry: v });
    }

    render(){
        return (
            <div className="Slot" id="country">
                <h2>{this.props.title}</h2>
                <ul className="listing">
                    {this.props.list.map(country => 
                        <li className={this.state.currentCountry === country.alpha2_code ? 'current' : ''} onClick={() => this.setCountry(country.alpha2_code)} key={country.alpha2_code}>{country.name}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Country;