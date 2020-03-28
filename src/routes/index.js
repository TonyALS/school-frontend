import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TableTeacher from '../components/TableTeacher/TableTeacher';
import TableCourse from '../components/TableCourse/TableCourse';
import FormNewCourse from '../components/FormCourse/FormNewCourse';
import FormEditCourse from '../components/FormCourse/FormEditCourse';

export default function Routes() {
  return (
    <Switch>
      {/* <Route path='/teachers' component={TableTeacher} /> */}
      <Route path='/courses' component={TableCourse} />
      <Route path='/course/new' component={FormNewCourse} />
      <Route path='/course/edit/:id_course' component={FormEditCourse} />
    </Switch>
  );
}