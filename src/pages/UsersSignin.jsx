import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import UsersHeader from '../components/UsersHeader';
import { useAuth } from '../contexts/authContext';
import AuthError from '../components/AuthError';
import Footer from '../components/Footer';

const UsersSignin = () => {

  const { loading, error, login, signInWithGoogle } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password)
    navigate(from, { replace: true });
  }

  const handleGoogle = async (e) => {
    e.preventDefault();
    await signInWithGoogle();
    navigate(from, { replace: true });
  }

  return (
    <React.Fragment>
      <UsersHeader />
        <form onSubmit={handleSubmit} className='users_signin'>
          {error && <AuthError component={error}/>}
          <h1>Sign In</h1>
        
          <h3>New to PEX? <span><Link to='/users/register'>Sign up</Link></span></h3>

          <button className='users_signin-google' onClick={handleGoogle}> <FcGoogle size={22} style={{marginRight: '10px'}}/> Continue with Google</button>

          <div className="horizontal-line">
            <p>or continue with email</p>
          </div>
          

          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>

          <Link to="/forgot-password">Forgot your Password?</Link>

          <button type="submit" className='users_signin-submit'>{loading ? 'Loading...' : 'Sign In'}</button>
          
        </form>
        <Footer />
    </React.Fragment>
  )
}

export default UsersSignin