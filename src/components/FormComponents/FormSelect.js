import React from 'react';

export default (props) => {
  return(
    <option key={props.key}>{props.optionSelect}</option>
  );
}