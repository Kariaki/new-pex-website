import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import AuthError from '../components/AuthError';

//Material UI components
import {Avatar, Button, CssBaseline, TextField, Typography, Container, Box} from '@mui/material';

import { db } from "../firebase-config";
import { collection, query, onSnapshot } from "firebase/firestore";

const AdminLogin = () => {
  const { login, error, loading } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [admin, setAdmin] = useState([]);
  const [isError, setIsError] = useState('');

  const navigate = useNavigate();


   //Error states
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    const data = query(
      collection(db, "amins")
    );
    onSnapshot(data, (querySnapshot) => {
      setAdmin(
        querySnapshot.docs.map((doc) => (doc.data()))
      );
    });
  }, [])

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

    const mail = admin.filter(ad => ad.email === email)

    try {
      if(mail[0].email){
        await login(email, password)
        navigate('/admin/dashboard');
      }
    } catch (error) {
      setIsError('Sorry, but only admins are authorized to access this page')
    }
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
            {isError && <AuthError component={isError}/>}
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

              { loading ? 'Signing in...' : 'Sign In' }

            </Button>
          </Box>
        </Box>
      </Container>
  );
}

export default AdminLogin
