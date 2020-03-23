import React from 'react';

export default (props) => {
  return(
    <div className="card-body">
          <table id="example2" className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>Nome do curso</th>
                  <th>Portaria de autorização do MEC</th>
                  <th>Departamento</th>
                  <th>Opções</th>
                </tr>
              </thead>
                    <tbody>
                      <tr>
                        <td class="project-actions text-center">
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
                      </tr>
                    </tbody>
                  </table>
                </div>
  )
}