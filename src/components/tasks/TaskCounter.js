import './style.css'
import React, { useEffect, useState } from 'react'

function TaskCounter( props ) {
    const { tasks } = props;
    const [ completedCounter, setCompletedCounter ] = useState('');

    useEffect(() => {
        {
            const total = tasks.reduce((a, b) => b.isCompleted ? ++a : a, 0);
            setCompletedCounter(total);
        }
    }, [tasks])

    return (
        <div className="card white z-depth-2">
            <div className="card-content">
                <span className="card-title">Tasks Completed</span>        
                <span className="count blue-text text-accent-2">{completedCounter}</span><span>/{tasks.length}</span> 
            </div>
        </div>
    )
}

export default TaskCounter
