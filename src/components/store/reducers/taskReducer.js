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
            console.log(action.task);
            return state;
        case 'ADD_TASK_ERROR' :
            console.log(action.error)
            return state;
        case 'DELETE_TASK' :
            console.log('Delete Task');
            return state;
        default :
            return state;
    }
}

export default taskReducer