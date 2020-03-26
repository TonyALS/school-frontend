import React, { useState, useEffect } from 'react';
import TableHead from '../TableComponents/TableHead';
import TableData from '../TableComponents/TableData';

import api from '../../services/api';

function TableTeacher() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    async function connectApi() {
      const response = await api.get('/teachers');
      setTeachers(response.data)
    }

    connectApi();
  }, [])
  
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
                  tdata1={teacher.first_name + ' ' + teacher.last_name}
                  tdata2={teacher.department.department_name}
                  tdata3={teacher.status 
                    ? 
                    'Em andamento' 
                    : 
                    'Dispensado'}
                  class={teacher.status 
                    ? 
                    'text-success text-center' 
                    : 
                    'text-warning text-center'}
                />
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
  );
}

export default TableTeacher;