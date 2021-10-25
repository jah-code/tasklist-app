import './style.css'
import React from 'react'

function TaskCounter() {
    return (
        <div className="card white z-depth-2">
            <div className="card-content">
                <span className="card-title">Tasks Completed</span>
                <span className="count blue-text text-accent-2">5</span><span>/20</span>
            </div>
        </div>
    )
}

export default TaskCounter
