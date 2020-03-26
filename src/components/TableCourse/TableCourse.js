import React, { useEffect, useState } from 'react';

import TableHead from '../TableComponents/TableHead';
import TableData from '../TableComponents/TableData';

import api from '../../services/api';

function TableCourse() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function connectApi() {
      const response = await api.get('/courses');
      setCourses(response.data.rows);
    }
    connectApi();
  }, []);

  return(
    <div className="content-wrapper">
      <div className="card-body">
        <table className="table table-bordered table-hover">
          <TableHead 
            theader1='Nome do Curso' 
            theader2='Departamento' 
            theader3='Portaria de autorização do MEC' 
            theader4='Opções'
          />
          <tbody>
            {courses.map(course => (
              <tr key={course.id_course}>
                <TableData 
                  tdata1={course.course_name}
                  tdata2={course.department.department_name}
                  tdata3={course.mec_authorization 
                    ? 
                    'Portaria nº: ' + course.mec_authorization 
                    : 
                    'Não autorizado'}
                  class={course.mec_authorization 
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

export default TableCourse;