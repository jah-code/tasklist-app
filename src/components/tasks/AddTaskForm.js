import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTask } from '../../components/store/actions/taskActions'

class AddTaskForm extends Component {
    state = {
        taskname: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state);
    }

    render() { 
        return (
            <form action="" className="add-task-form" onSubmit={this.handleSubmit}>
                <div className="input-field add-task-input-field">
                    <input type="text" className="validate" 
                        id="taskname" placeholder="Task Name" onChange={this.handleChange}/>
                </div>
                <button className="btn blue accent-2 waves-effect waves-light" 
                    type="submit" name="action">
                    <i className="tiny material-icons">add</i>
                    &nbsp;New Task
                </button>
            </form>
        )
    }
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (task) => dispatch(addTask(task))
    }
}

export default connect(null, mapDispatchToProps)(AddTaskForm)