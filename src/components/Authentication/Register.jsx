import React, { useState } from 'react';
import './Auth.css';

export const Register = () => {
    const [users, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const url = 'http://localhost:8080/api/v1/adduser';

    

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(users),
        }).then((res) => res.json()).then((data) => {
            console.log("data added", data.data);
        }).catch((err) => {
            console.log("error in adding data in db ", err);
        })

        setUser({
            name: '',
            email: '',
            password: ''
        })

    }
    return (
        <div>
            <form action="" className='form-container'>
                <h1>Register for Tiny Code</h1>
                <div className="names">
                    <label htmlFor="name">Name: </label>
                    <input 
                        type="text" 
                        className='inputes' 
                        value={users.name}
                        onChange={(e) => setUser({...users, name: e.target.value})}
                    />
                </div>
                <div className="email">
                    <label htmlFor="email">Email: </label>
                    <input 
                        type="email" 
                        className='inputes'
                       value={users.email}
                        onChange={(e) => setUser({...users, email: e.target.value})}
                    />
                </div>
                <div className="password">
                    <label htmlFor="password">Password: </label>
                    <input 
                        type="password"
                        className='inputes' 
                        value={users.password}
                        onChange={(e) => setUser({...users, password: e.target.value})}
                    />
                </div>
                <div className="btns">
                    <button type='submit' className='btn' onClick={handleSubmit}>Register</button>
                </div>
                <div className="registered">
                    <p>Alredy registed Click to Login</p>
                </div>
            </form>
        </div>
    );
}
