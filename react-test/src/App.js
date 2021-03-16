import React, { Component } from 'react'
import './App.css';

class App extends Component() {
  constructor(props) {
    super(props);

    this.state = {
      entry: ''
    };
  }
  render() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="logo">
            Logo
          </div>
          <div className="radio-buttons">
            <input type="radio" value="admin" /> Admin <br /><br />
            <input type="radio" value="app" /> App
          </div>
        </div>
      </div>
    </div>
  );
 }
}

export default App;
