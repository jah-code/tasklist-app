import React, { useState, Fragment } from 'react'
import AddTaskModal from './AddTaskModal';
import TaskListRow from './TaskListRow'
import TaskListRowEdit from './TaskListRowEdit';
import { connect } from 'react-redux'
import { updateTask } from '../store/actions/taskActions'

function TaskList(props) {
    const {tasks} = props;
    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    const [ editTaskId, setEditTaskId ] = useState(null);
    const [ editTaskRow, setEditTaskRow ] = useState({
        taskname: "",
        id: ""
    })
    
    
    function handleClickEdit(task) {
        setEditTaskId(task.id);

        const rowFormValues = {
            taskname: task.taskname,
            id: task.id
        }

        setEditTaskRow(rowFormValues)
    }

    function handleClickCancel(id) {
        setEditTaskId(null);
    }

    function handleEditChange(e) {
        const fieldName = e.target.getAttribute('id');
        const fieldValue = e.target.value;

        const newRowData = { ...editTaskRow };
        newRowData[fieldName] = fieldValue;

        setEditTaskRow(newRowData)
        // console.log(newRowData);
    }

    function handleRowSubmit(e) {
        e.preventDefault();
        console.log(editTaskRow);
    }

    return (
        <div className="task-list">
            <div className="row">
                <div className="col s12 m3 table-title">Tasks</div>
                <div className="col s12 m3 offset-m4">
                    <div className="input-field search-input-field col s12">
                        <i className="material-icons prefix tiny">search</i>
                        <input id="icon_prefix" type="text" className="validate" placeholder="Search by task name"/>
                    </div>
                </div>
                <div className="col s12 m2 right-align no-padding-right">
                    <button className="btn blue accent-2 waves-effect waves-light col s12" type="submit" name="action"
                    onClick={() => setModalIsOpen(true)}>
                        New Task
                        <i className="tiny material-icons left">add</i>
                    </button>
                </div>
            </div>

            <div className="task-table z-depth-2">
                <form action="" onSubmit={handleRowSubmit}>
                    <table>
                        <tbody>
                            {tasks && tasks.map((task) => (
                                <Fragment key={task.id}>
                                    { editTaskId === task.id ? (
                                    <TaskListRowEdit task={task} handleClickCancel={handleClickCancel} editTaskRow={editTaskRow} handleEditChange={handleEditChange}/>
                                     ) : ( 
                                     <TaskListRow task={task} handleClickEdit={handleClickEdit}/> 
                                     )}
                                </Fragment>
                            ))}
                        </tbody>
                    </table>
                </form>
            </div>

            <AddTaskModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
        </div>          
    )
}
    
const mapDispatchToProps = (dispatch) => {
    return {
        updateTask: (id) => dispatch(updateTask(id))
    }
}

export default connect(null, mapDispatchToProps)(TaskList)
