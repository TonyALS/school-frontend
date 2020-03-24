import React from 'react';

export default (props) => {
  return(
    <div className="form-group col-md-6">
        <label>{props.label}</label>
        <input type="text" className="form-control" 
        placeholder={props.label}
        onChange={props.change}
      />
    </div>
  );
}