import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar'
import TableTeacher from './components/TableTeacher/TableTeacher';
import TableCourse from './components/TableCourse/TableCourse';
import Form from './components/FormComponents/Form';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <Navbar />
        <Sidebar />
          <Switch>

          <Route path='/teachers' component={TableTeacher} />
          <Route path='/courses' component={TableCourse} />
          <Route path='/course/new' component={Form} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
