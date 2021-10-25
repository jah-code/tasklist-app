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