import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTask } from '../../components/store/actions/taskActions'

class AddTaskForm extends Component {
    state = {
        taskname: "",
        isCompleted: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state);
        console.log(this.state);
        this.setState({
            taskname: ""
        })
    }

    render() { 
        const { addSuccess } = this.props;
        return (
            <form action="" className="add-task-form" onSubmit={this.handleSubmit}>
                <div className="input-field add-task-input-field">
                    <input type="text" className="validate" value={this.state.taskname}
                        id="taskname" placeholder="Task Name" onChange={this.handleChange}/>
                </div>
                <button className="btn blue accent-2 waves-effect waves-light" 
                    type="submit" name="action">
                    <i className="tiny material-icons">add</i>
                    &nbsp;New Task
                </button>
                <div className="green-text center">
                    {/* { addSuccess ? <span>{addSuccess}</span> : null} */}
                </div>
            </form>
        )
    }
}
 

const mapStateToProps = (state) => {
    return {
        addSuccess: state.task.addSuccess
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (task) => dispatch(addTask(task))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskForm)