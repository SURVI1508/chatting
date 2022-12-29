import React from 'react'

const Login = () => {
    return (
        <>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form>
                <h3>LOG IN</h3>
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Enter your email" id="username" />

                <label htmlFor="">Password</label>

                <input type="password" placeholder="Password" id="password" />


                <button className='signup'>Log In</button>
                <p>You don't have an account? Sign Up</p>

            </form>
        </>
    )
}

export default Login