import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>LogIn</h2>
                <form action="">
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" />
                </div>
                <input className='submit-form' type="submit" value="LogIn" />
                </form>
                <p className='form-para'>
                    New Member? <Link className='form-link' to='/signup'>Create New Account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;