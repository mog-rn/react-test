import React, { Component } from "react";
import './App.css';
import Safe from 'react-safe'

class App extends Component {  
  constructor() {
    super();

    this.state = {
      entry: ''
    }
    this.onRadioChange = this.onRadioChange.bind(this);
  }
  onRadioChange = (e) => {
      this.setState({
        entry: e.target.value
      })
    }
  render() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="box-1">
            Logo
          </div>
          <div className="box-2">
            <Safe.script src="../Script/Script.js"></Safe.script>
            <input type="radio" value="admin" checked={this.state.entry === "admin"} onChange={this.onRadioChange} onClick="showAdmin()" />Admin <br />
            <input type="radio" value="app" checked={this.state.entry === "app"} onChange={this.onRadioChange} onClick="showApp()" />App
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="box-3">
              <ul>
                <li>AdminEntry1</li>
                <li>AdminEntry2</li>
                <li>AdminEntry3</li>
                <li>AdminEntry4</li>
                <li>AdminEntry5</li>
              </ul>
          </div>
          <div className="box-4">
            <ul>
              <li>Entry1</li>
              <li>Entry2</li>
              <li>Entry3</li>
              <li>Entry4</li>
              <li>Entry5</li>  
            </ul>  
          </div>   
        </div>
      </div>
    </div>
  );
 }
}


export default App;
