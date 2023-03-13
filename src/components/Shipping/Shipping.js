import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../fireBase.init';

const Shipping = () => {
    const [user] = useAuthState(auth);

    const [name , setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    
    const handleName = event =>{
        setName(event.target.value);
    }
    const handleEmail = event =>{
        setEmail(event.target.value);
    }

    const handlePhone = event =>{
        setPhone(event.target.value);
    }
    
    const handleAddress = event =>{
        setAddress(event.target.value);
    }

    const handleCreateUser = event =>{
        event.preventDefault();  
    }

    return (
        <div>
             <div className='form-container'>
                <div>
                    <h2 className='form-title'>Shipping Info</h2>
                
                    <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Name</label>
                        <input onBlur={handleName} type="text" name="name" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhone} type="text" name="phone" id="" required/>
                    </div>
                   
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddress} type="text" name="address" id="" required/>
                    </div>
                    <input className='submit-form' type="submit" value="Add to Shipping" />
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Shipping;