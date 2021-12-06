import './Button.css'
import { Link } from 'react-router-dom'
import React from 'react'

function Button (){
    return(
        
        <Link to = 'sign-up'>
            <button className = 'btn'>
                Sign-up
            </button>
        </Link>
        
    );
}
export default Button;