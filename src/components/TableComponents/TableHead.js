import React from 'react';

export default (props) => {
  return(
    <thead>
      <tr>
        <th>{props.theader1}</th>
        <th>{props.theader2}</th>
        <th>{props.theader3}</th>
        <th>{props.theader4}</th>
      </tr>
    </thead>      
  )
}