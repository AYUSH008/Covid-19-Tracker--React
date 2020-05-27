import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api/index';
import Demo from './demo';
import CenteredGrid from './components/DashBoard/DashBoard';
import FetchInda from './api/API';

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
        <CenteredGrid/>
        <FetchInda/>
        <br/>
        <br/>
        <div className={styles.container}>
       
        <Cards data={data} />
        <br />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart className="chartConatiner" data={data} country={country} />
        </div>
      </div>
    )
  }
}
export default App;
