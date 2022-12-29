import React from 'react'
import './register.css'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register = () => {

    // const handlSubmit = (e) => {
    //     e.preventDefault()
    //     const displayName = e.target[0].value
    //     const email = e.target[1].value
    //     const password = e.target[2].value
    //     const file = e.target[3].value

    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             // Signed in 
    //             const user = userCredential.user;
    //             console.log(user);
    //             // ...
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             // ..
    //         });
    // }
    return (
        <>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form >
                <h3>SIGN UP</h3>
                <input type="text" placeholder="Enter your name" />
                <input type="email" placeholder="Enter your email" />
                <input type="password" placeholder="Password" />
                <input type="file" id="file" />
                <button className='signup'>Sign Up</button>
                <p>You do have an account? Login</p>
            </form>
        </>
    )
}

export default Register