import React, { Component } from 'react';
import BusGetter from './components/BusGetter'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-header navbar navbar-fixed-top">
          <div className="container">

            <div className="navbar-header">
              <div className="navbar-brand">
                <h2><strong>SEPTA</strong>, Where You At?</h2>
              </div>
            </div>
              <BusGetter />
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
