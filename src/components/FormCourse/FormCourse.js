import React from 'react';
import FormContentCourse from './FormContentCourse';
import FormTitle from '../FormComponents/FormTitle';
import FormSection from '../FormComponents/FormSection';

export default () => {
  return(
    <div className="content-wrapper">
      <FormSection
        formTitle={<FormTitle title='Cadastrar novo curso' />}
        formContent={<FormContentCourse />}
      />      
    </div>
  );
}
