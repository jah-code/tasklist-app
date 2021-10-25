import React, { useState } from 'react'
import AddTaskModal from './AddTaskModal';
import TaskListRow from './TaskListRow'
import TaskListRowEdit from './TaskListRowEdit';

function TaskList(props) {
    const {tasks} = props;
    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    const [ taskRow, setTaskRow ] = useState(true);

    // const showRow = taskRow ? <TaskListRow/> : <TaskListRowEdit/>;

    function handleClickEdit(id) {
        // setTaskRow(false);
        {tasks.map((task) => {task.id === id ? setTaskRow(false) : setTaskRow(true)} )}
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
                <form action="">
                    <table>
                        <tbody>
                            {tasks && tasks.map((task) => {
                                return (<tr key={task.id}>
                                { taskRow ?
                                    <TaskListRow task={task} handleClickEdit={handleClickEdit}/> :
                                    <TaskListRowEdit setTaskRow={setTaskRow}/>
                                }    
                                </tr>)      
                            })}
                        </tbody>
                    </table>
                </form>
            </div>

            <AddTaskModal modalIsOpen={modalIsOpen}/>
        </div>          
    )
}

export default TaskList
