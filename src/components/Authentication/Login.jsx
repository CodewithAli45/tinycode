import React from 'react';
import './Auth.css';

export const Login = () => {
    return (
        <div>
            <form action="" className='form-container'>
                <h1>Welcome to Tiny Code</h1>
                <div className="email">
                    <label htmlFor="email">Email: </label>
                    <input type="email" className='inputes'/>
                </div>
                <div className="password">
                    <label htmlFor="password">Password: </label>
                    <input type="password"className='inputes' />
                </div>
                <div className="btns">
                    <button type='submit' className='btn'>Register</button>
                </div>
                <div className="registered">
                    <p>New to Tiny, Click to Register</p>
                </div>
            </form>
        </div>
    );
}

 