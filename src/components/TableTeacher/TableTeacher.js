import React, { useState, useEffect } from 'react';
import { Table as TableReact } from 'react-bootstrap';
import DeleteModal from '../Buttons/DeleteModal';
import EditModal from '../Buttons/EditModal';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';

import api from '../../services/api';
import { toast } from 'react-toastify';

export default function TableTeacher(props) {

  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    async function connectApi() {
      const response = await api.get('/teachers');
      setTeachers(response.data);
    }
    connectApi(); 
  }, [])

  async function handleDelete(id) {
    try {
      const response = await api.delete(`/teachers/${id}`);
      let newTeachers = [];
      teachers.map(teacher => {
        if (teacher.id_teacher !== id) {
          return newTeachers = [...newTeachers, teacher]
        } else {
          return null;
        }
      });
      setTeachers(newTeachers);
      toast.success(response.data.success, { autoClose: 2000});
    } catch (err) {
      return toast.error(err.response.data.error, { autoClose: 2000});
    }
  }

  return(
    <div className="content-wrapper">
      <div className="card-body">
          <TableReact striped bordered hover>
            <thead className='thead-dark'>
              <tr>
                <th className='text-center'>Status do contrato</th>
                <th className='text-center'>Nome do professor</th>
                <th className='text-center'>Departamento vinculado</th>
                <th className='text-center'>Opções</th>
              </tr>
            </thead>
            <tbody>
              { teachers.map(teacher => (
                <tr key={teacher.id_teacher} >
                  <td className='text-center'>
                    { teacher.status
                      ?
                      <span>
                        <AssignmentTurnedInIcon style={{color: '#1976d2'}} className='mr-2'/>
                        Ativo
                      </span>
                      :
                      <span>
                        <AssignmentLateIcon style={{color: '#e57373'}} className='mr-2'/>
                        Inat.
                      </span>
                    }
                  </td>
                  <td className='text-center'>{teacher.first_name + ' ' + teacher.last_name}</td>
                  <td className='text-center'>{teacher.department.department_name}</td>
                  <td className='text-center'>
                    <DeleteModal handleDelete={() => handleDelete(teacher.id_teacher)}
                      dialogBody='Deseja realmente excluir o professor selecionado?'
                    />
                    <EditModal link={`/course/edit/${teacher.id_teacher}`} />
                  </td>
                </tr>
              ))}
            </tbody>
          </TableReact>
      </div>
    </div>
  );
}