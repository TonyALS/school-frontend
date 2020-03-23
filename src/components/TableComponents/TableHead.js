import React from 'react';

export default (props) => {
  return(
    <thead className='thead-dark'>
      <tr>
        <th className='text-center'>{props.theader1}</th>
        <th className='text-center'>{props.theader2}</th>
        <th className='text-center'>{props.theader3}</th>
        <th className='text-center'>{props.theader4}</th>
      </tr>
    </thead>      
  )
}