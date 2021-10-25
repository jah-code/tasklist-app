import './style.css'
import React from 'react'
import { Pie, defaults } from 'react-chartjs-2'

defaults.plugins.legend.display = false

function TaskChart() {
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
                        data: [5, 15],
                        backgroundColor: [
                          '#448AFF',
                          '#efefef'
                        ],
                        hoverOffset: 4
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
