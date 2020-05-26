import React from 'react';
import {render } from 'react-dom'; 

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api/index';
import Typed from './components/Typed/Typed';
import Demo from './demo';

import coronaImage from './images/image.jpg'

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }


  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country })

  }
  render() {

    const { data, country } = this.state;

    return (
      
      <div className={styles}>
        <Demo/>
        <div className={styles.container}>
          <Typed/>
        <img className={styles.image} src={coronaImage} alt="covid-19" />
        <Cards data={data} />
        <br />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        </div>
      </div>
    )
  }
}
export default App;
