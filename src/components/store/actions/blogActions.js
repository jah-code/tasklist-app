export const createBlog = (blog) => {
    return (dispatch, getState) => {
        dispatch({ type: 'CREATE_BLOG', blog });
    }
};