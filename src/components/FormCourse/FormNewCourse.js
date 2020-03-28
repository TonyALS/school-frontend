import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Field, withFormik, ErrorMessage } from 'formik';
import SaveIcon from '@material-ui/icons/Save';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import * as Yup from 'yup';
import api from '../../services/api';

const NewCourse = ({ isSubmitting }) => {
  const [department, setDepartment] = useState([]);

  useEffect(() => {
    async function connectApi() {
      const response = await api.get('/departments');
      setDepartment(response.data.rows);
    }
    connectApi();
  }, []);

  return (
    <div className="content-wrapper">
      <section className="content">
        <div className="card card-default">
          <div className="row justify-content-md-center">
            <div className="col-md-8">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title mt-6">Cadatrar novo curso</h3>
                </div>
                <Form
                  autoComplete="off"
                  className="text-center border border-light p-5 mb-6"
                >
                  <div className="card-body">
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label>Digite o nome do curso</label>
                        <Field
                          type="text"
                          className="form-control"
                          placeholder="Nome do curso"
                          name="course_name"
                        />
                        <ErrorMessage
                          className="text-danger"
                          component="span"
                          name="course_name"
                        />
                      </div>

                      <div className="form-group col-md-6">
                        <label>Digite a portaria de autorização MEC</label>
                        <Field
                          className="form-control"
                          placeholder="Digite a portaria de autorização MEC"
                          name="mec_authorization"
                        />
                      </div>

                      <div className="form-group col-md-6">
                        <label>Selecione o departamento</label>
                        <Field
                          component="select"
                          className="form-control"
                          name="department_id"
                        >
                          <option>Selecione um departamento</option>
                          {department.map((d) => (
                            <option
                              key={d.id_department}
                              value={d.id_department}
                            >
                              {d.department_name}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage
                          className="text-danger"
                          component="span"
                          name="department_id"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <button
                          className="btn btn-primary btn-block btn my-5"
                          disabled={isSubmitting}
                          type="submit"
                          style={{ fontWeight: 'bold' }}
                        >
                          <SaveIcon className="mr-2" />
                          Salvar
                        </button>
                      </div>
                      <div className="form-group col-md-6">
                        <Link to="/courses">
                          <button
                            className="btn btn-secondary btn-block btn my-5"
                            disabled={isSubmitting}
                            type="submit"
                            style={{ fontWeight: 'bold' }}
                          >
                            <FormatListBulletedIcon className="mr-2" />
                            Ir para listagem
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FormNewCourse = withFormik({
  //  Essa função mapeia todos os inputs pelo name passado:
  mapPropsToValues({ course_name, department_id, mec_authorization }) {
    return {
      //  email: email || 'Valor inicial' => campo onde podemos iniciar o input com algum valor
      //  ou deixar vazio.
      course_name: course_name || '',
      department_id: department_id || '',
      mec_authorization: mec_authorization || '',
    };
  },

  //  Ativa a validação em tempo de digitação do onChange e desativa ao tirar o foco do input
  //  com onBlur:
  validateOnChange: true,
  validateOnBlur: false,

  //  Validações com Yup schema:
  validationSchema: Yup.object().shape({
    course_name: Yup.string()
      .min(4, 'Nome do curso deve conter no mínimo 4 caracteres')
      .required('O nome do curso é obrigatório'),
    department_id: Yup.string().required('Selecione um departamento.'),
  }),

  async handleSubmit(values, { resetForm, setSubmitting }) {
    const { department_id, course_name, mec_authorization } = values;

    try {
      const response = await api.post('/courses', {
        department_id,
        course_name,
        mec_authorization,
      });
      toast.info(response.data.success, { autoClose: 3000 });
      resetForm();
    } catch (err) {
      toast.error(err.response.data.error, { autoClose: 4000 });
    }
    setSubmitting(false);
  },
})(NewCourse);

export default FormNewCourse;

NewCourse.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
};
