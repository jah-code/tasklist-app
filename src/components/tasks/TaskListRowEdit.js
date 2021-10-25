import React, {Component} from 'react'
import { connect } from 'react-redux'
import { deleteTask } from '../store/actions/taskActions'

class TaskListRowEdit extends Component {
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleClickCancel = () => {
        this.props.setTaskRow(true);
    }

    render() {

        return (
            <>
                <td style={{'width': '5%'}}>
                </td>
                <td style={{'width': '85%'}}>
                    <div className="input-field add-task-input-field">
                        <input type="text" className="validate" 
                            id="taskname" placeholder="Task Name" onChange={this.handleChange}/>
                    </div>
                </td>
                <td className="col s1" style={{'width': '5%'}}>
                    <div className="btn-action">
                        <i className="material-icons">check</i>
                    </div>
                </td>
                <td style={{'width': '5%'}}>
                    <div className="btn-action" onClick={this.handleClickCancel}>
                        <i className="material-icons">close</i>
                    </div>
                </td>
            </>
        );
    }
}
 

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (id) => dispatch(deleteTask(id))
    }
}

export default connect(null,mapDispatchToProps)(TaskListRowEdit)
