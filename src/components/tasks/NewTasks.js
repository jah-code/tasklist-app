import './style.css'
import React from 'react'

function NewTasks(props) {
    const { tasks } = props;

    return (
        <div className="card white z-depth-2">
            <div className="card-content">
                <span className="card-title">Latest Created Tasks</span>
                <ul>
                    {tasks && tasks.slice( 0, 3 ).map((task) => <li key={task.id}>{task.taskname}</li>)}                   
                </ul>
            </div>
        </div>
    )
}

export default NewTasks