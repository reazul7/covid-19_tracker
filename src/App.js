import React from 'react';
import { fetchData } from './api';
import './App.css';
import covidImage from './images/covid-19.png';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';


class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country});
    // console.log(country)
    // console.log(fetchedData);
  }

  render() {
    const {data, country} = this.state;
    return (
      <div className="text-center container">
        <img className="pt-4 img-fluid" src={covidImage} alt="COVID-19" />
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    );
  }
};

export default App;
