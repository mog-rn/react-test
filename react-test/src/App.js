import React, { Component } from "react";
import { Button } from "react-native";
import './App.css';



class App extends Component {  
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    
    this.handleClick = this.handleClick.bind(this);
    }
    handleClick () {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
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
            <button onClick={this.handleClick}>
              {this.state.isToggleOn ? 'Admin' : 'App'}
            </button>
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
