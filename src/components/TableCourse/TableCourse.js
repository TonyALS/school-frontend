import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Table as TableReact } from 'react-bootstrap';
import DeleteModal from '../Buttons/DeleteModal';
import EditModal from '../Buttons/EditModal';
import ErrorRoundedIcon from '@material-ui/icons/ErrorRounded';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

import { toast } from 'react-toastify';

export default function Table() {
  
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function connectApi() {
      const response = await api.get('/courses');
      setCourses(response.data.rows);
    }
    connectApi();
  }, []);

  async function handleDelete (id) {
    try {
      const response = await api.delete(`/courses/${id}`);
      let newCourses = []
      courses.map(course => {
        if (course.id_course !== id ) {
          return newCourses = [...newCourses, course]
        } else {
          return null;
        }
      })
      setCourses(newCourses);
      toast.success(response.data.success, { autoClose: 2000});
    } catch (err) {
      return toast.error(err.response.data.error, { autoClose: 2000});
    }
  }

  return (
    <div className="content-wrapper">
      <div className="card-body">
          <TableReact striped bordered hover>
            <thead className='thead-dark'>
              <tr>
                <th className='text-center'>Nome do Curso</th>
                <th className='text-center'>Departamento</th>
                <th className='text-center'>Portaria de autorização do MEC</th>
                <th className='text-center'>Opções</th>
              </tr>
            </thead>
            <tbody>
              { courses.map(course => (
                <tr key={course.id_course} >
                  <td className='text-center'>{course.course_name}</td>
                  <td className='text-center'>{course.department.department_name}</td>
                  <td className='text-center'>
                    { course.mec_authorization
                      ?
                      <span>
                        <CheckCircleRoundedIcon style={{color: '#1976d2'}} className='mr-2'/>
                        {'Portaria nº: ' + course.mec_authorization}
                      </span>
                      :
                      <span>
                        <ErrorRoundedIcon style={{color: '#e57373'}} className='mr-2'/>
                        Aguardando autorização
                      </span>
                    }
                  </td>
                  <td className='text-center'>
                    <DeleteModal handleDelete={() => handleDelete(course.id_course)}
                      dialogBody='Deseja realmente excluir o curso selecionado?'
                    />
                    <EditModal link={`/course/edit/${course.id_course}`} />
                  </td>
                </tr>
              ))}
            </tbody>
          </TableReact>
      </div>
    </div>
  )
}

