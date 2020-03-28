import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar'
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Sidebar />
          <Routes />  
          <ToastContainer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
