import React, { Component } from 'react';
import TableHead from '../TableComponents/TableHead';
import TableData from '../TableComponents/TableData';

import api from '../../services/api';

class TableTeacher extends Component {
  constructor() {
    super();
    this.state = {
      teachers: []
    }
  }

  async componentDidMount() {
    const response = await api.get('/teachers');
    this.setState({ teachers: response.data })
  }

  render() {
    const teachers = this.state.teachers;
    return (
      <div className="content-wrapper">
        <div className="card-body">
          <table className="table table-bordered table-hover">
            <TableHead 
              theader1='Nome do Professor' 
              theader2='Departamento' 
              theader3='Status do Contrato' 
              theader4='Opções'
            />
            <tbody>
            {teachers.map(teacher => (
              <tr key={teacher.id_teacher}>
                <TableData
                  id={teacher.id_teacher}
                  tdata1={teacher.first_name + ' ' + teacher.last_name}
                  tdata2={teacher.department.department_name}
                  tdata3={teacher.status ? 'Em andamento' : 'Dispensado'}
                  class={teacher.status ? 'text-success text-center' : 'text-warning text-center'}
                />
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TableTeacher;