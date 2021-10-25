import React from 'react'
import { connect } from 'react-redux'
import { deleteTask } from '../store/actions/taskActions'

function TaskListRow(props) {
    const { task, handleClickEdit } = props;

    function handleClickDelete() {
        props.deleteTask(props.task.id);
    }

    return (
        <tr>
            <td style={{'width': '5%'}}>
            </td>
            <td style={{'width': '85%'}}>
                <span className="col-task-name blue-text text-accent-2">
                    {task.taskname}
                </span>
            </td>
            <td className="col s1">
                <div className="btn-action" onClick={() => handleClickEdit(task)}>
                    <i className="material-icons">edit</i>
                </div>
            </td>
            <td style={{'width': '5%'}}>
                <div className="btn-action" onClick={handleClickDelete}>
                    <i className="material-icons">delete</i>
                </div>
            </td>
        </tr>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (id) => dispatch(deleteTask(id))
    }
}

export default connect(null,mapDispatchToProps)(TaskListRow)
