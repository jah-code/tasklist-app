import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { completedTask } from '../store/actions/taskActions'

function TaskListRow(props) {
    const { task, handleClickEdit, handleClickDelete} = props;
    const [ itemChecked, setItemChecked ] = useState({});
    const [ isCompleted, setIsCompleted ] = useState({
        id: '898788',
        isCompleted: false
    })

    function handleCheckRow(task, e) {
        itemChecked[task.id] = e.target.checked;
        setItemChecked(itemChecked);

        const changedCheck = itemChecked[task.id];
        
        setIsCompleted({
            id: task.id,
            isCompleted: changedCheck
        })
    }

    useEffect(() => {
        props.completedTask(isCompleted)
    }, [isCompleted])

    return (
        <tr>
            <td style={{'width': '5%'}} className="row-checkbox">
                <label>
                    <input type="checkbox" className="filled-in" 
                    checked={task.isCompleted}
                    onChange={(e) => handleCheckRow(task, e)}/>
                    <span></span>
                </label>
            </td>
            <td style={{'width': '85%'}}>
                <span className={`col-task-name ${task.isCompleted === true ? 'task-completed' : 'task-todo'}`}>
                    {task.taskname}
                </span>
            </td>
            <td className="col s1">
                <div className="btn-action" onClick={() => handleClickEdit(task)}>
                    <i className="material-icons">edit</i>
                </div>
            </td>
            <td style={{'width': '5%'}}>
                <div className="btn-action" onClick={(e) => handleClickDelete(e, task)}>
                    <i className="material-icons">delete</i>
                </div>
            </td>
        </tr>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        completedTask: (isCompleted) => dispatch(completedTask(isCompleted))
    }
} 

export default connect(null, mapDispatchToProps)(TaskListRow)