import React, { Component } from 'react';
import BusGetter from './components/BusGetter'
import PhilaMap from './components/PhilaMap'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Septa, Where You At?</h2>
        </div>
        <BusGetter />
        <PhilaMap />
      </div>
    );
  }
}

export default App;
