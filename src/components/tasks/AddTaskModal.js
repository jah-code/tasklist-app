import React from 'react'
import Modal from 'react-modal'
import AddTaskForm from './AddTaskForm'

function AddTaskModal({modalIsOpen}) {
    return (
        <div>
            <Modal isOpen={modalIsOpen}>
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
