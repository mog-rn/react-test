import './App.css';
import ToggleSwitch from '../src/ToggleSwitch/ToggleSwitch';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="box-1">
            Logo
          </div>
          <div className="box-2">
            <ToggleSwitch />
          </div>
          <div className="box-3">
            <ul className="list-1">
              <li></li>
              <li></li> 
              <li></li> 
            </ul>  
          </div>   
        </div>
      </div>
    </div>
  );
}

export default App;
