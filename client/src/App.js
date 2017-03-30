import React, { Component } from 'react';
import logo from './NYTlogo.png';
import './App.css';
import InputForm from './components/input-form';
import Results from './components/results';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <InputForm />
        <Results />
      </div>
    );
  }
}

export default App;
