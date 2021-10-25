import './style.css'
import React from 'react'

function NewTasks() {
    return (
        <div className="card white z-depth-2">
            <div className="card-content">
                <span className="card-title">Latest Created Tasks</span>
                <ul>
                    <li>Clean the room</li>
                    <li>Buy some vegetables</li>
                    <li>Reinstall windows on PC</li>
                </ul>
            </div>
        </div>
    )
}

export default NewTasks
