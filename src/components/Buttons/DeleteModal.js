import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
import Delete from '@material-ui/icons/Delete';

export default function DeleteModal(props) {
  const { dialogBody, handleDelete } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        data-toggle="modal"
        className="mr-4"
        variant="danger"
        style={{ color: '#fff' }}
        size="sm"
        onClick={handleShow}
      >
        <Delete fontSize="small" />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>{dialogBody}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button data-dismiss="modal" variant="danger" onClick={handleDelete}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

DeleteModal.propTypes = {
  dialogBody: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
