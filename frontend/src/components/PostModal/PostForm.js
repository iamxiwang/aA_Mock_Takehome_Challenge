import React, { useState } from "react";
import { useDispatch } from "react-redux";


const PostForm => {

    return (
       <form >
       {errors.map(error => 
        <li key={error}>{error}</li>)}
       </form>
    )
}