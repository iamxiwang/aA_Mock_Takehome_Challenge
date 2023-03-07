import {useDispatch, useSelector} from 'react-redux'
import { useState,useEffect } from 'react'
import PostItem from './PostItem'
import {getPosts, fetchPosts} from '../../store/post.js'
import './post.css'
const PostIndex= () => {
    const [order, setOrder] = useState('asc')
    const dispatch = useDispatch()
    const posts = useSelector(getPosts)

    useEffect( () => {
        dispatch(fetchPosts(order))
    })

    
    return (
        <div className='post-section'>
            <div className='post-title'>
                <h1>Posts</h1>

                <select id="select">
                    <option value="asc" 
                    onChange={() => setOrder('asc')}>asc
                    </option>

                    <option value="desc"
                    onChange={() => setOrder('desc')}>desc</option>
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