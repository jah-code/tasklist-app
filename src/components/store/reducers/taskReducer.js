const initialState = {
    // hardcoded --- disregard
    tasks: [
        {id: '1', taskname: 'Clean the room'},
        {id: '2', taskname: 'Read a book'},
        {id: '3', taskname: 'Study React'}
    ]
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK' :
            return {
                ...state,
                addSuccess: 'Successfully Added'
            }
        case 'ADD_TASK_ERROR' :
            console.log(action.error)
            return state;
        case 'DELETE_TASK' :
            console.log('Delete Task');
            return state;
        case 'UPDATE_TASK' :
            console.log('Update Task');
            return state;
        case 'COMPLETED_TASK' :
            console.log('Task Completed');
            return state
        default :
            return state;
    }
}

export default taskReducer