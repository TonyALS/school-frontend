import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar'

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <Navbar />
        <Sidebar />
          <Switch>

          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
