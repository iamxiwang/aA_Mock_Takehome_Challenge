export const RECEIVE_POSTS = 'posts/RECEIVE_POSTS';
export const RECEIVE_POST = 'posts/RECEIVE_POST';
export const REMOVE_POST = 'posts/REMOVE_POST'

//action creator 

const receivePosts = (posts) => ({
    typeof: RECEIVE_POSTS,
    payload: posts
})

const receivePost = (post) => ({
    typeof: RECEIVE_POST,
    payload: post
})

const removePost = (postId) =>({
    typeof: REMOVE_POST,
    payload: postId
})

// store selector

export const getPosts =(state) => {
    if(state && state.posts){
        return Object.values(state.posts)
    }
    return []
}


export const getPost =(postId) => (state) => {
    if(state && state.posts){
        return state.posts[postId]
    }else{
        return null
    }
}