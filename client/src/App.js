import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
 } from "react-router-dom";
import Body from "./Containers/Body/Body.js"
function App() {
  return (
    <div className="App">
      <div className="wrapper">
      <div className="nav">
        <a href="#">
          <img src="https://uploads-ssl.webflow.com/5ed9ac87e93ebb3538348caf/5ed9afc30750797cc9305fe2_everydae_logo-1b-blu.png" alt="" />
        </a>
      </div>
      <div className="content">
     
    
        <Router>
          <Switch>
          <Route exact path='/parent/:id'>
            <Body  />
          </Route>
          </Switch>
        </Router>
      
      </div>
      </div>
    </div>
 
    
  );
}

export default App;
