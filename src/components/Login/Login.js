import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../fireBase.init'
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const haldleEmailBlur= event =>{
        setEmail(event.target.value);
    }
    const handlePassword = event =>{
        setPassword(event.target.value);
    }
    if(user){
        navigate('/')
    }

    if (loading) {
        return <p>Loading...</p>;
      }

    const handleUserSignIn = event =>{
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>LogIn</h2>
                <form onSubmit={handleUserSignIn}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={haldleEmailBlur} type="email" name="email" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePassword} type="password" name="password" id="" required/>
                </div>
                <p style={{color:'red'}}>LogIn Error{error?.message}</p>
                {
                    loading && <p>Loading....</p>
                }
                <input className='submit-form' type="submit" value="LogIn" />
                </form>
                <p className='form-para'>
                    New Member? <Link className='form-link' to='/signup'>Create New Account</Link>
                </p>
                {/* uderlin div  */}
                <div className="under-line">
                    <div className="left-side">
                        
                        <br className='br-line'/>
                    </div>
                    <div className="middle-side">
                        Or
                    </div>
                    <div className="right-side">
                        <br />
                    </div>
                </div>
                {/* google signup button  */}
                <button className='google-sing-button'>
                <img src="google.png" alt="" />
                    Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;