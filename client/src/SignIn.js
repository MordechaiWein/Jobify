import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoggedOutNavigation from './Navigation/LoggedOutNavigation';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        JOBIFY
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();


function SignIn() {
    
    const [showPassword, setShowPassword] = useState(false)
    
    function handleClickShowPassword() {
        setShowPassword(!showPassword)
    } 

    function handleMouseDownPassword(event) {
        event.preventDefault()
    }


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
        <LoggedOutNavigation/>
       
      <Container component="main" maxWidth="xs" sx={{paddingTop: '10rem'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <img width="64" height="64" 
                src="https://img.icons8.com/glyph-neue/64/1f699d/goal--v1.png" alt="goal--v1"
                style={{marginBottom: '2rem'}}
            />
          <Typography component="h1" variant="h4" 
            sx={{fontWeight: 'bold', 
            color: "#1F699D",
            fontFamily: 'Merriweather Sans',
            fontSize: '2.5rem'
            }}>
            Log in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              placeholder='Username*'
              autoComplete="email"
                InputProps={{
                    style: {
                        borderRadius: "16px",
                    }
                }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder='Password*'
              name="email"
              autoComplete="email"
              type={showPassword ? 'text' : 'password'}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                    style: {
                        borderRadius: "16px",
                    }
                }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ 
                mt: 3, mb: 2 ,
                borderRadius: "16px", 
                height: '3.3rem',
                backgroundImage: 'linear-gradient(to right, #ba68c8, #1F699D)',
                fontWeight: 'bold',
                fontSize:'1.2rem'
            }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default SignIn