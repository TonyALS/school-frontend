import React from 'react';

import ButtonPencilEdit from '../Buttons/ButtonPencilEdit';
import ButtonTrashDelete from '../Buttons/ButtonTrashDelete';


export default (props) => {
  return(
      <>
        <td className='text-center'>{props.tdata1}</td>
        <td className='text-center'>{props.tdata2}</td>
        <td className={props.class}>{props.tdata3}</td>
        <td className="project-actions text-center">
          <ButtonPencilEdit />
          <ButtonTrashDelete />
        </td>
      </>
  );
}