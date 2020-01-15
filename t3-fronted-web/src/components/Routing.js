import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Route,Switch} from 'react-router-dom'
import App from '../App'
import About from './About'
import Contact from './Contact'


import 'tachyons'

export default class Routing extends Component {
    render() {
        return (
            <Router>
            <div id="topheader">
                <nav class="navbar navbar-default">
		            <div class="container-fluid">
                        
                    <ul >
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                     </div>
                </nav>
            </div>
                    <Switch>
                        <Route exact path='/'>
                            <App />
                        </Route>
                        <Route path='/about'>
                            <About />
                        </Route>
                        <Route path='/contact'>
                            <Contact />
                        </Route>
                    </Switch>
                   
            </Router>
        )
    }
}
