import logo from './logo.svg';
import './App.css';
import LifeCycle from './training/LifeCycle';
import PropsDemo from './training/PropsDemo';
import HomePage from './training/HomePage';
import StateDemo from './training/StateDemo';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import FullReload from './training/FullReload';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a> 
      </header> */}

      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>  
          <Route exact path='/props-demo' component={PropsDemo}></Route>  
          <Route exact path='/state-demo' component={StateDemo}></Route>  
          <Route exact path='/lifecycle-demo' component={LifeCycle}></Route>
          <Route exact path='/fullreload-demo' component={FullReload}></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
