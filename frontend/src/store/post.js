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
// thunk action

export const fetchPosts =(order) => async(dispatch) => {
    const res = await fetch(`/posts?query=${order}`)
    if (res.ok){
        const data = await res.json()
        dispatch(receivePosts(data))
    }
}

export const fetchPost = (postId) => async(dispatch) => {
    const res = await fetch(`/post/${postId}`)

    if(res.ok){
        const data = await res.json();
        dispatch(receivePost(data))
    }
}

export const createPost = (post) => async(dispatch) =>{
    const res = await fetch('/post/create',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(post)
    })

    if(res.ok){
        const data = await res.json()
        dispatch(receivePost(data))
    }
}

export const deletePost = (postId) => async(dispatch) => {
    const res = await fetch(`/post/${postId}`, {
        method: 'DELETE'
    })
    if(res.ok){
        dispatch(removePost(postId))
    }
}