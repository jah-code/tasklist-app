import React from 'react'
import Modal from 'react-modal'
import AddTaskForm from './AddTaskForm'

Modal.setAppElement('#root');
function AddTaskModal({modalIsOpen, setModalIsOpen}) {
    return (
        <div>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <div className="modal-title valign-wrapper">
                    <i className="tiny material-icons left">add</i> 
                    New Task
                </div>
                <AddTaskForm/>
            </Modal>
        </div>
    )
}

export default AddTaskModal
