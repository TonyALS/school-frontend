import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';

export default function DeleteModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" size="sm" onClick={handleShow}>
        <EditIcon fontSize="small" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deseja editar o registro?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Link to={props.link}>
            <Button variant="danger" onClick={handleClose}>
                Ir para página de edição 
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}