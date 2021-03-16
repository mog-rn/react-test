import React, { Component } from "react";
import { Button } from "react-native";
import './App.css';


function showAdmin (props) {
  let element = document.getElementById('box-3');
  element.style.display="block";
}

function showApp (props) {
  let element = document.getElementById('box-4');
  element.style.display="block";
}
class App extends Component {  
  constructor(props) {
    super(props);

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
            
            <Button onClick={showAdmin}>Admin</Button>
            <Button onClick={showApp}>App</Button>
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
