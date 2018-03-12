import React, { Component } from 'react';
import Country from './Country';
import Regions from './Regions';
import Cities from './Cities';
import Info from './Info';

class Main extends Component {


  constructor(){
    super();
    this.currentCountry = undefined;
    this.currentRegion = undefined;
    this.currentCity = undefined;
    // this.countryList = [];
    // this.regionList = [];
    // this.cityList = [];
    // this.info = {};
    this.state = {
      countries : [],
      regions : [],
      cities : [],
      cityInfo : {}
    };
  }

  componentWillMount(){
    fetch('http://services.groupkt.com/country/get/all')
    .then(resp => resp.json())
    .then(data => {
          // this.countryList = data.RestResponse.result;
          this.setState({ 
              countries : data.RestResponse.result,
              regions : [],
              cities : [],
              cityInfo : {}
          });
      }
    )
  }
  
  getRegions(v){
    this.currentCountry = v;
    fetch(`http://geodb-free-service.wirefreethought.com/v1/geo/countries/${v}/regions/?limit=10`)
    .then(resp => resp.json())
    .then(data => {
        // this.regionList = data.data;
        this.setState({ 
          regions : data.data,
          cities : [],
          cityInfo : {}
        });
      }
    )
  }

  getCities(v){
    this.currentRegion = v;
    fetch(`http://geodb-free-service.wirefreethought.com/v1/geo/countries/${this.currentCountry}/regions/${v}/cities?limit=10`)
    .then(resp => resp.json())
    .then(data => {
        // this.cityList = data.data;
        this.setState({ 
            cities : data.data,
            cityInfo : {}
        });
      }
    )
  }

  getInfo(v){
    this.currentCity = v;
    fetch(`http://geodb-free-service.wirefreethought.com/v1/geo/cities/${this.currentCity}`)
    .then(resp => resp.json())
    .then(data => {
        // this.info = data.data;
        this.setState({ 
            cityInfo : data.data
        });
      }
    )
  }


  render() {
    return (
      <main className="Main">
        <Country title={"Country"} list={this.state.countries} getRegions={this.getRegions.bind(this)} />
        <Regions title={"Regions"} list={this.state.regions} getCities={this.getCities.bind(this)} />
        <Cities title={"Cities"} list={this.state.cities} getInfo={this.getInfo.bind(this)} />
        <Info title={"Details"} data={this.state.cityInfo} />
      </main>
    )
  }
}

export default Main;
