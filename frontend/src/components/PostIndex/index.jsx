import {useDidpatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import PostItem from './PostItem'

const PostIndex= () => {

    const dispatch = useDidpatch()
    const posts = useSelector(getPosts)

    useEffect( () => {
        dispatch(fetchListings())
    })

    return (
        <div>
        <div className='post-title'>
        </div>

        <div className='feed'>
            {posts.map ( (post, i) => {
                <PostItem kye={i} post ={post} />
            })}
        </div>
        </div>
    )
}