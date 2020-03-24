import React, { Component } from 'react';
import FormInput from '../FormComponents/FormInput';

import api from '../../services/api';

class FormContent extends Component {
  constructor() {
    super();
    this.state = {
      departments: [],
      course_name: '',
      mec_authorization: '',
      department_id: '',
      department_name: false
    }
  }

  async componentDidMount() {
    const response = await api.get('/departments')
    this.setState({ departments: response.data.rows })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.course_name, this.state.mec_authorization)
  }

  handleChange = (e) => {
    this.setState({ department_id: e.target.value, department_name: true })
  }

  changeCourse = (e) => {
    this.setState({ course_name: e.target.value })
  }

  changeMec= (e) => {
    this.setState({ mec_authorization: e.target.value })
  }

  render() {
    const departments = this.state.departments;
    let OptionMenu;
    if (!this.state.department_name) {
      OptionMenu = <option>Selecione</option>
    }

    return(
      <form className="text-center border border-light p-5 mb-6" onSubmit={this.handleSubmit}>
        <div className="card-body">
            <div className="form-row">
              <FormInput 
                label='Digite o nome do curso'
                change={this.changeCourse}
              />
              <FormInput 
                label='Digite a portaria de autorização MEC'
                change={this.changeMec}
              />
              <div className="form-group col-md-6">
              <label>Selecione o departamento</label>
              <select className="form-control" onChange={this.handleChange}
                value={this.state.value}
              > {OptionMenu}
                {departments.map(department => (
                  <option key={department.id_department} value={department.id_department}
                  >{department.department_name}</option>
                ))}
              </select>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block my-4">Cadastrar</button>
            <button type="submit" className="btn btn-info btn-block my-4">Voltar</button>
        </div>
      </form>
    );
  }
}

export default FormContent;
