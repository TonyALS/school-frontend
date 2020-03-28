import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Delete from '@material-ui/icons/Delete';

export default function DeleteModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button data-toggle="modal" className="mr-4" variant="danger" style={{ color: '#fff'}} size="sm" onClick={handleShow}>
        <Delete fontSize="small" />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.dialogBody}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button data-dismiss="modal" variant="danger" onClick={props.handleDelete}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}