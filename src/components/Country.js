import React, { Component } from "react";

class Country extends Component {

    constructor(){
        super();
        this.state = {
            countries: [],
            currentCountry: undefined 
        }
    }

    componentWillMount(){
        fetch('http://services.groupkt.com/country/get/all')
        .then(resp => resp.json())
        .then(data => {
              this.setState({ 
                  countries : data.RestResponse.result.slice(5, 15),
              });
          }
        )
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
                    {this.state.countries.map(country => 
                        <li className={this.state.currentCountry === country.alpha2_code ? 'current' : ''} onClick={() => this.setCountry(country.alpha2_code)} key={country.alpha2_code}>{country.name}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Country;