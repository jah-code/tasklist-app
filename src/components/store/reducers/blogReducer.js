const initialState = {
    blogs: [
        {id: '1', title: 'Title 1', content: 'Content 1'},
        {id: '2', title: 'Title 2', content: 'Content 2'},
        {id: '3', title: 'Title 3', content: 'Content 3'}
    ]
}

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_BLOG':
        console.log(action.blog)
    }
    return state
}

export default blogReducer