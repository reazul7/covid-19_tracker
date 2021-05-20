import React from 'react';
import './App.css';
import { Cards, Chart, CountryPicker } from './components';
import {fetchData} from './api/index';


class App extends React.Component {

  async componentDidMount() {
    const data = await fetchData();
    
    console.log(data);
  }

  render() {
    return (
      <div className="container">
         <Cards/>
         <Chart/>
         <CountryPicker/>
      </div>
    );
  }
}

export default App;



// import './App.css';

// import { Cards, Chart, CountryPicker } from './components';
// import {fetchData} from './api/index';

// function App() {
//   async componentDidMount() {
//     const data = await fetchData();
//     console.log(data);
//   }
//   return (
//     <div className="container">
//        <Cards/>
//        <Chart/>
//        <CountryPicker/>
//     </div>
//   );
// }

// export default App;
