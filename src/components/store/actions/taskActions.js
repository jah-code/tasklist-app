export const addTask = (task) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('tasks').add({
            ...task,
            authorFirstName: 'Lijah',
            authorLastName: 'Garcia',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'ADD_TASK', task});
        }).catch((error) => {
            dispatch({type: 'ADD_TASK_ERROR', error});
        })
    }
}

export const deleteTask = (id) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('tasks').doc(id).delete()
        .then(() => {
            dispatch({type: 'DELETE_TASK', id})
        }).catch((error) => {
            dispatch({type: 'DELETE_TASK_ERROR', error})
        })
    }
}

export const updateTask = (newTaskRow) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('tasks').doc(newTaskRow.id).update({
            taskname: newTaskRow.taskname,
            id: newTaskRow.id
        }).then(() => {
            dispatch({type: 'UPDATE_TASK', newTaskRow})
        }).catch((error) => {
            dispatch({type: 'UPDATE_TASK_ERROR', error});
        })
       
    };
}

export const completedTask = (checkRow) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('tasks').doc(checkRow.id).update({
            isCompleted: !checkRow.isCompleted,
            id: checkRow.id
        }).then(() => {
            dispatch({type: 'COMPLETED_TASK', checkRow})
        }).catch((error) => {
            dispatch({type: 'COMPLETED_TASK_ERROR', error});
        })
       
    };
}