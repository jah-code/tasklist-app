import './style.css'
import React from 'react'
import { connect } from 'react-redux'
import NewTasks from '../tasks/NewTasks';
import TaskChart from '../tasks/TaskChart';
import TaskCounter from '../tasks/TaskCounter';
import TaskList from '../tasks/TaskList';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import NoTaskList from '../tasks/NoTaskList';
import { Redirect } from 'react-router-dom'
import Loader from '../helpers/Loader'

function Dashboard({tasks, auth}) {
    if (!auth.uid) return <Redirect to='/signin'/>
    return (
        <>
        { tasks ? 
            ( tasks.length > 0 ?
                <div className="dashboard container">
                    <div className="row">
                        <div className="col s12 m4"><TaskCounter tasks={tasks}/></div>
                        <div className="col s12 m4"><NewTasks tasks={tasks}/></div>
                        <div className="col s12 m4"><TaskChart tasks={tasks}/></div>
                    </div>

                    <TaskList tasks={tasks}/>
                </div> :

                <div className="no-content">
                    <NoTaskList/>
                </div> 
            ) 
            : <Loader/>         
        }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state.store.ordered.tasks,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'tasks', orderBy: ['createdAt', 'desc']}
    ])
)(Dashboard)