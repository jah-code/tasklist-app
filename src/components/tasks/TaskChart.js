import './style.css'
import React, { useEffect, useState } from 'react'
import { Pie, defaults } from 'react-chartjs-2'

defaults.plugins.legend.display = false

function TaskChart(props) {
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
                <Pie
                data={{
                    labels: [
                        'Completed Task',
                        'Not Completed Task'
                      ],
                      datasets: [{
                        label: 'Task Chart',
                        data: [completedCounter, tasks.length - completedCounter ],
                        backgroundColor: [
                          '#448AFF',
                          '#efefef'
                        ],
                        hoverOffset: completedCounter
                    }]
                }}
                height={400}
                width={600}
                />
            </div>
        </div>
    )
}

export default TaskChart
