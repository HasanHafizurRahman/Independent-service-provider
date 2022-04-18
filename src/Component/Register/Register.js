import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
const Register = () => {
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault()
    }

    const navigateLogin = () =>{
        navigate('/login')
    }
    return (
        <div className='register-form'>
            <h2 className='text-primary'>Please Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="" id="" placeholder='Your Name' />
                <input type="email" name="" id="" placeholder='Your Email' required />
                <input type="password" name="" id="" placeholder='Your Password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className='pe-auto text-primary' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;