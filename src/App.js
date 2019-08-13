import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Users from './components/Users';
// import About from './components/About';
// import Contact from './components/Contact';
import './App.css';
import Nav from "./components/Nav";

const NavRoute = ({exact, path, component}) => (
  <Route exact={exact} path={path} render={(props) => (
    <div>
      <Nav toRender={component}/>
    </div>
  )}/>
)

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <NavRoute exact component={<Home />} path="/" />
            {/* <Route exact component={Home} path="/login" /> */}
            <NavRoute component={<Users />} path="/users" />
            {/* <NavRoute exact component={Contact} path="/contact" /> */}
            <NavRoute component={<Home />} />
          </Switch>
      </Router>
    );
  }
}

export default App;