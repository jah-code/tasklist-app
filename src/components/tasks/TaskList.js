import React, { useState, Fragment, useEffect } from 'react'
import AddTaskModal from './AddTaskModal';
import TaskListRow from './TaskListRow'
import TaskListRowEdit from './TaskListRowEdit';
import { connect } from 'react-redux'
import { updateTask, deleteTask, completedTask } from '../store/actions/taskActions'

function TaskList(props) {
    const { tasks } = props;
    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    const [ editTaskId, setEditTaskId ] = useState(null);
    const [ editTaskRow, setEditTaskRow ] = useState({
        taskname: "",
        id: ""
    })

    const [ find, setFind ] = useState('');
    const [searchParam] = useState(["taskname"]);

    function search(items) {
        return items.filter((item) => {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        ?.toLowerCase()
                        .indexOf(find.toLowerCase()) > -1
                );
            });
        });
    }
    
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
    }

    function handleRowSubmit(e) {
        e.preventDefault();
        props.updateTask(editTaskRow);
        setEditTaskId(null);
    }

    function handleClickDelete(e, task) {
        e.preventDefault();
        props.deleteTask(task.id);
    }

    return (
        <div className="task-list">
            <div className="row valign-wrapper">
                <div className="col s12 m3 table-title">Tasks</div>
                <div className="col s12 m3 offset-m4">
                    <div className="input-field search-input-field col s12">
                        <i className="material-icons prefix tiny">search</i>
                        <input id="icon_prefix" type="text" className="validate" value={find}
                        placeholder="Search by task name" onChange={(e) => setFind(e.target.value)}/>
                    </div>
                </div>
                <div className="col s12 m2 right-align">
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
                            {tasks && search(tasks).map((task) => (
                                <Fragment key={task.id}>
                                    { editTaskId === task.id ? (
                                    <TaskListRowEdit task={task} 
                                        handleClickCancel={handleClickCancel} 
                                        editTaskRow={editTaskRow} 
                                        handleEditChange={handleEditChange}
                                    />
                                     ) : ( 
                                     <TaskListRow task={task} 
                                        handleClickEdit={handleClickEdit} 
                                        handleClickDelete={handleClickDelete}
                                    /> 
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
        updateTask: (newTaskRow) => dispatch(updateTask(newTaskRow)),
        deleteTask: (id) => dispatch(deleteTask(id)),
        completedTask: (checkRow) => dispatch(completedTask(checkRow))
    }
}

export default connect(null, mapDispatchToProps)(TaskList)



//////////////////////////////////////////////////////////////
//////// TO DO - isCompleted will save to Firestore //////////
//////////////////////////////////////////////////////////////
    // function handleCheckRow(e, task) {
    //     const checked = e.target.checked;
        
    //     {
    //         tasks.map((currentTask) => {
    //             if( currentTask.id === task.id ) {
    //                 setCheckRow({
    //                     isCompleted: checked
    //                 })
                    
    //             }
    //             else {
    //                 return currentTask
    //             }
    //         })
    //     }
    // }

    // useEffect(() => {
    //     props.completedTask(checkRow);
    // },[checkRow]);