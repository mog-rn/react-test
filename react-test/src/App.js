import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

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
          <div className="admin">

          </div>
          <div className="app">
            <ul>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default App;