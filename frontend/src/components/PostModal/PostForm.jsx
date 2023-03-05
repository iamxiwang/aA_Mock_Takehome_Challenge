import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


const PostForm = () => {
    const dispatch = useDispatch();
    const [title,setTitle] = useState('')
    const [coffeeId, setCoffeeId] = useState('')
    const [text, setText] = useState('')
    const [rating, setRating] = useState(0)
    const [errors, setErrors] =useState([])
    // useEffect =() => {
        
    // ,[]}

    const handleSubmit = async(e) => {
        e.preventDefault();
        setErrors([]);
        const post = {
            title: title,
            coffee_id: coffeeId,
            text: text,
            rating: rating
        }

        await dispatch(createPost(post))
            .catch(async (res) => {
                let data;
                try {
                    data = await  res.clone.json();
                }
                catch{
                    data = await res.text()
                }
            })
            if(data?.errors) {
                setErrors(data.errors);
        
            }else if(data) {
                setErrors([data])    
            }else {
                setErrors([res.statusText])
            }

        setTitle('')
        setCoffeeId('')
        setsetText('')
        setRating(0)
    }

    use
    return (
        <form >
        {errors.map(error => 
            <li key={error}>{error}</li>)}
        <label className="firstinput" >
            <input placeholder="title" />
        </label>
        <div className="secondinput">
            <label >
                <input placeholder="coffee id" />
            </label>

            <label >
                <input placeholder="rating" />
            </label>
        
        </div>
        
        </form>
    )
}