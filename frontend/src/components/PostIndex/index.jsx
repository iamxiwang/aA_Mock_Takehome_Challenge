import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import PostItem from './PostItem'
import {getPosts, fetchPosts} from '../../store/post.js'

const PostIndex= () => {

    const dispatch = useDispatch()
    const posts = useSelector(getPosts)

    useEffect( () => {
        dispatch(fetchPosts())
    })

    return (
        <div>
            <div className='post-title'>
                <h1>Posts</h1>

                <select name="" id="">
                    <option value="">asc

                    </option>

                    <option value="
                    ">desc</option>
                </select>
            </div>

        <div className='feed'>
            {posts.map ( (post, i) => {
                <PostItem kye={i} post ={post} />
            })}
        </div>
        </div>
    )
}

export default PostIndex