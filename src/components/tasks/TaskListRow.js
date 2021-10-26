import React, { useState } from 'react'

function TaskListRow(props) {
    const { task, handleClickEdit, handleClickDelete} = props;
    const [ itemChecked, setItemChecked ] = useState({});
    const [ checkRow, setCheckRow ] = useState(false);

    function handleCheckRow(task, e) {
        itemChecked[task.id] = e.target.checked;
        setItemChecked(itemChecked);

        const changedCheck = itemChecked[task.id];
        setCheckRow(changedCheck);

    }

    return (
        <tr>
            <td style={{'width': '5%'}} className="row-checkbox">
                <label>
                    <input type="checkbox" className="filled-in" 
                    checked={checkRow}
                    onChange={(e) => handleCheckRow(task, e)}/>
                    <span></span>
                </label>
            </td>
            <td style={{'width': '85%'}}>
                <span className={`col-task-name ${checkRow === true ? 'task-completed' : 'task-todo'}`}>
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

export default TaskListRow
