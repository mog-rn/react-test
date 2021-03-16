import React from 'react'
import './App.css';

class App extends React.Component {
  constructor() {
    super();

     this.state = {
      app: 'none',
      admin: 'none'
    }

    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    if(e.target.value === 'app') {
      this.setState({ app: '' })
      this.setState({ admin: 'none' })
    } else if (e.target.value === 'admin') {
      this.setState({ admin: '' })
      this.setState({ app: 'none' })
    }
  }
  render() {
    return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="logo">
            Logo
          </div>
          <div className="radio-buttons" onChange={this.handleClick}>
            <input type="radio" value="admin" name="permission"  /> Admin <br /><br />
            <input type="radio" value="app" name="permission"  /> App
            
          </div>
          <div className="admin" style={{display: this.state.admin}}>
            <ul>
              <li>AdminEntry1</li>
              <li>AdminEntry2</li>
              <li>AdminEntry3</li>
            </ul>
          </div>
          <div className="app-1" style={{display: this.state.app}}>
            <ul>
              <li>Entry1</li>
              <li>Entry2</li>
              <li>Entry3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default App;