import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Modal, Button } from 'react-daisyui';

export default function DeleteTeacherModal({
  showModal,
  setShowModal,
  deleteTeacher,
  teacher,
}) {
  return (
    <div>
      <Modal
        className='absolute w-1/2'
        open={showModal}
        onClose={() => setShowModal(false)}
      >
        <Modal.Header>Eliminar profesor</Modal.Header>
        <Modal.Body>
          <p>¿Estás seguro que deseas eliminar este profesor?</p>
        </Modal.Body>
        <Modal.Actions>
          <Button onClick={() => deleteTeacher(teacher.id)} variant='primary'>
            Sí, eliminar
          </Button>
          <Button onClick={() => setShowModal(false)} variant='primary'>
            Cancelar
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
