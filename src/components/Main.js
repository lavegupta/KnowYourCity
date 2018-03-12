import React, { Component } from 'react';
import Country from './Country';
import Regions from './Regions';
import Cities from './Cities';
import Info from './Info';

class Main extends Component {

  constructor(){
    super();
    this.state = {
      country : "",
      region : "",
      city : undefined,
    };
  }

  getRegions(v){
    this.setState({ country : v, region: "", city: "" });
  }

  getCities(v){
    this.setState({ region : v, city: "" });
  }

  getInfo(v){
    this.setState({ city : v });
  }

  render() {
    return (
      <main className="Main">
        <Country title={"Country"} getRegions={this.getRegions.bind(this)} />
        <Regions title={"Regions"} data={this.state} getCities={this.getCities.bind(this)} />
        <Cities title={"Cities"} data={this.state} getInfo={this.getInfo.bind(this)} />
        <Info title={"Details"} data={this.state} />
      </main>
    )
  }
}

export default Main;
