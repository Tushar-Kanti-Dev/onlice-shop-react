
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../fireBase.init';
import './SignUp.css'
import { useState } from 'react';



const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate();



    const [createUserWithEmailAndPassword,
         user, 
         loading
        ] = useCreateUserWithEmailAndPassword(auth);

    
      if(user){
        navigate('/')
      }

    const handleEmail = event =>{
        setEmail(event.target.value);
    }

    const handlePassword = event =>{
        setPassword(event.target.value);
    }
    
    const handleConfirmPassword = event =>{
        setConfirmPassword(event.target.value);
    }
    if(user){
        navigate('/shop')
    }

    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError("Password Not match")
            return;
        }
          if(password.length <6){
            setError('Your Password Is too Short');
            return;
          }
        createUserWithEmailAndPassword( email, password);     
    }
    return (
        <div>
             <div className='form-container'>
            <div>
                <h2 className='form-title'>SignUp</h2>
              
                <form onSubmit={handleCreateUser}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmail} type="email" name="email" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePassword} type="password" name="password" id="" required/>
                </div>
                <p style={{color:'red'}}>{error}</p>
                <div className="input-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input onBlur={handleConfirmPassword} type="password" name="confirm-password" id="" required/>
                </div>
                <input className='submit-form' type="submit" value="Signup" />
                </form>
                <p className='form-para'>
                    Already have a Account? <Link className='form-link' to='/login'>LogIn</Link>
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
        </div>
    );
};

export default SignUp;