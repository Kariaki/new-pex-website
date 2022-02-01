import React, { useState } from 'react';
import AuthError from '../components/AuthError';
import { useAuth } from '../contexts/authContext';

import {Avatar, Button, CssBaseline, TextField, Typography, Container, Box} from '@mui/material';

const ResetPassword = () => {

  const {resetPassword, error, loading} = useAuth();

  const [email, setEmail] = useState('');

   //Error states
  const [emailError, setEmailError] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault()
    setEmailError(false)

    if(email === ''){
      setEmailError(true)
    }
    await resetPassword(email)
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
            Reset Password
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              { loading ? 'resetting pasword...' : 'Reset Password' }
            </Button>
          </Box>
        </Box>
      </Container>
  );
};

export default ResetPassword;
