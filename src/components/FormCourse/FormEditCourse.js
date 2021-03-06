import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Field, withFormik, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import * as Yup from 'yup';
import api from '../../services/api';

const EditCourse = (props, { isSubmitting }) => {
  const [department, setDepartment] = useState([]);
  const [oldData, setOldData] = useState([]);
  const { match, initialValues } = props;

  useEffect(() => {
    async function connectApi() {
      const response = await api.get(`/course/${initialValues.id_course}`);
      setOldData(response.data);
    }
    connectApi();
  }, [initialValues.id_course]);

  useEffect(() => {
    async function connectApi() {
      const response = await api.get('/departments');
      setDepartment(response.data.rows);
    }
    connectApi();
  }, []);

  //  Iniciamos os valores com os parâmetros do useState ou com '' vazio para evitar
  //  o erro 'A component is changing an uncontrolled input of type text to be controlled'.
  initialValues.id_course = match.params.id_course || '';
  initialValues.course_name = oldData.course_name || '';
  initialValues.department_id = oldData.department_id || '';
  initialValues.mec_authorization = oldData.mec_authorization || '';

  return (
    <div className="content-wrapper">
      <section className="content">
        <div className="card card-default">
          <div className="row justify-content-md-center">
            <div className="col-md-8">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title mt-6">Editar curso</h3>
                </div>
                <Form
                  autoComplete="off"
                  className="text-center border border-light p-5 mb-6"
                >
                  <div className="card-body">
                    <div className="form-row">
                      <Field hidden name="id_course" />
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
                          className="btn btn-primary btn-block my-5"
                          disabled={isSubmitting}
                          type="submit"
                        >
                          Atualizar informações
                        </button>
                      </div>
                      <div className="form-group col-md-6">
                        <Link to="/courses">
                          <button
                            className="btn btn-secondary btn-block btn my-5"
                            disabled={isSubmitting}
                            type="submit"
                          >
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

const FormEdit = withFormik({
  //  Essa função mapeia todos os inputs pelo name passado:
  mapPropsToValues({
    course_name,
    department_id,
    mec_authorization,
    id_course,
  }) {
    return {
      //  email: email || 'Valor inicial' => campo onde podemos iniciar o input com algum valor
      //  ou deixar vazio.
      course_name,
      department_id,
      mec_authorization,
      id_course,
    };
  },

  //  Ativa a validação em tempo de digitação do onChange e desativa ao tirar o foco do input
  //  com onBlur:
  validateOnChange: true,
  validateOnBlur: false,

  // Validações com Yup schema:
  validationSchema: Yup.object().shape({
    course_name: Yup.string()
      .min(4, 'Nome do curso deve conter no mínimo 4 caracteres')
      .required('O nome do curso é obrigatório'),
    department_id: Yup.string().required('Selecione um departamento.'),
  }),

  async handleSubmit(values, { setSubmitting }) {
    const { department_id, course_name, mec_authorization, id_course } = values;

    try {
      const response = await api.put(`/course/edit/${id_course}`, {
        department_id,
        course_name,
        mec_authorization,
      });

      toast.info(response.data.success, { autoClose: 3000 });
    } catch (err) {
      toast.error(`Erro! ${err.response.data.error}`, { autoClose: 4000 });
    }

    setSubmitting(false);
  },
})(EditCourse);

export default FormEdit;

EditCourse.propTypes = {
  initialValues: PropTypes.shape({
    id_course: PropTypes.string,
    course_name: PropTypes.string,
    department_id: PropTypes.number,
    mec_authorization: PropTypes.string,
  }).isRequired,

  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};
