import React, {Component} from 'react'

class TaskListRowEdit extends Component {
    render() {
        const { task, handleClickCancel, handleEditChange, editTaskRow } = this.props;

        return (
            <tr>
                <td style={{'width': '5%'}}>
                </td>
                <td style={{'width': '85%'}}>
                    <div className="input-field edit-task-input-field">
                        <input type="text" className="validate" value={editTaskRow.taskname}
                            id="taskname" placeholder={task.taskname} onChange={handleEditChange}/>
                    </div>
                </td>
                <td className="col s1" style={{'width': '5%'}}>
                    <button className="btn-action" type="submit">
                        <i className="material-icons">check</i>
                    </button>
                </td>
                <td style={{'width': '5%'}}>
                    <div className="btn-action" onClick={() => handleClickCancel(task.id)}>
                        <i className="material-icons">close</i>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TaskListRowEdit
