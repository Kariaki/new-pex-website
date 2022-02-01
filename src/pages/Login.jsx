import { useState } from 'react';
import { useAuth } from '../contexts/authContext';
import { Link } from 'react-router-dom';
import AuthError from '../components/AuthError';

//Material UI components
import {Avatar, Button, CssBaseline, TextField, Typography, Container, Box} from '@mui/material';


const Login = () => {
  const { login, error, loading } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   //Error states
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault()
    setEmailError(false)
    setPasswordError(false)

    if(email === ''){
      setEmailError(true)
    }
    if(password === ''){
      setPasswordError(true)
    }
    await login(email, password)
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Admin Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            {error && <AuthError component={error}/>}
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              error={emailError}  
            />

            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              error={passwordError}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              { loading ? 'signing in...' : 'Sign In' }
            </Button>
              <Typography align='center'>
                <Link to="/password-reset" className='login_link'>
                  Forgot/Reset password?
                </Link>
              </Typography>
          </Box>
        </Box>
      </Container>
  );
}

export default Login
