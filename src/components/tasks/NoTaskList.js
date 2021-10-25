import React, { useState } from 'react'
import AddTaskModal from './AddTaskModal'

function NoTaskList() {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    return (
        <div className="no-task-box z-depth-2">
            <div className="no-task-title">
                You have no task.
            </div>
            <div className="col s12 m2">
                <button className="btn blue accent-2 waves-effect waves-light col s12" type="submit" name="action"
                onClick={() => setModalIsOpen(true)}>
                    New Task
                    <i className="tiny material-icons left">add</i>
                </button>
            </div>
            <AddTaskModal modalIsOpen={modalIsOpen}/>
        </div>
    )
}

export default NoTaskList
