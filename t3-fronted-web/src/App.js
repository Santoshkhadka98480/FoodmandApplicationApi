import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';


class App extends Component {
  render() {
    return (
      <div>
        
        <Router>
          <Route exact path='/' component={Login} />
          <Route path='/Register' component={Register} />  
        </Router>   
      </div>  
    );
  }
}

export default App;
