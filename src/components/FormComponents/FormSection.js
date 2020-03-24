import React from 'react';

export default (props) => {
  return(
    <section className="content">
        <div className="card card-default">
          <div className="row justify-content-md-center">
            <div className="col-md-8">
              <div className="card card-primary">
                {props.formTitle}
                {props.formContent}
               </div>
             </div>
          </div>
        </div>
    </section>
  );
}