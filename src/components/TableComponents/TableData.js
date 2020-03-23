import React from 'react';

export default (props) => {
  return(
      <>
        <td className='text-center'>{props.tdata1}</td>
        <td className='text-center'>{props.tdata2}</td>
        <td className={props.class}>{props.tdata3}</td>
        <td className="project-actions text-center">
          <a className="btn btn-info btn-sm mr-2" href="#">
          <i className="fas fa-pencil-alt">
          </i>
             Editar
          </a>
          <a className="btn btn-danger btn-sm" href="#">
          <i className="fas fa-trash">
          </i>
          Excluir
          </a>
        </td>
      </>
  );
}