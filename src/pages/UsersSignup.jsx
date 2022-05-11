import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import AuthError from '../components/AuthError';
import UsersHeader from '../components/UsersHeader';
import Footer from '../components/Footer';
import { useAuth } from '../contexts/authContext';


const UsersSignup = () => {

  const { loading, error, signUp, logout, signInWithGoogle } = useAuth();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(email, password, firstName, lastName);
    await logout();
    navigate('/users/login');
  }

  const handleGoogle = async (e) => {
    e.preventDefault();
    await signInWithGoogle();
    navigate(from, { replace: true });
  }

  return (
    <React.Fragment>
      <UsersHeader />
      <form onSubmit={handleSubmit} className='users_signup'>

        {error && <AuthError component={error}/>}

        <h1>Sign Up</h1>

        <h3>Already have an account? <span><Link to='/users/login'>Sign In</Link></span></h3>

        <button className='users_signup-google' onClick={handleGoogle}> <FcGoogle size={22} style={{marginRight: '10px'}}/> Continue with Google</button>
            
            <div className="horizontal-line">
              <p>or continue with email</p>

            </div>
            
            <div className="name">
              <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" required/>
              <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" required/>
            </div>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required/>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required/>

            <button type="submit" className='users_signup-submit'>{loading ? 'Loading...' : 'Sign Up'}</button>

            <h5>By clicking Sign up, you agree to our Terms and Conditions and Privacy Statement</h5>

      </form>
      <Footer />
    </React.Fragment>
  )
}

export default UsersSignup