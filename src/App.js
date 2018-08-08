import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Navigation from './Layout/Navigation';
import Content from './Layout/Content';

import Home from './Pages/Home';
import Bio from './Pages/Bio';
import Projects from './Pages/Projects';
import Technology from './Pages/Technology';
import Music from './Pages/Music';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Content>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/bio" component={Bio} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/technology" component={Technology} />
              <Route exact path="/music" component={Music} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </Content>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
