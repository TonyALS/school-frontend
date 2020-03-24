import React from 'react';
import FormContent from './FormContent';

export default () => {
  return(
    <div className="content-wrapper">
      <section className="content">
        <div className="card card-default">
            <div className="row justify-content-md-center">
              <div className="col-md-8">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title mt-6">Cadastrar novo curso</h3>
                  </div>
                  <FormContent />
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}
