import React, { Component } from 'react';
import BusGetter from './components/BusGetter'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-header">
          <div className="container">

            <div className="navbar-header">
              <div className="navbar-brand septa-header">
                <h2><strong>SEPTA</strong>, where you at?</h2>
                <span>Get real-time locations for any SEPTA bus line</span>
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
