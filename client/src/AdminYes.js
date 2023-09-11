import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MyContext } from "./MyContext";

const defaultTheme = createTheme();

function AdminYes() {

    const {user} = useContext(MyContext)
    
    function handleSubmit(e) {
        e.preventDefault()
    }

    return (

        <main>
        <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 15,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
          <Typography variant="h4"
            sx={{
                fontWeight: 'bold', 
                fontFamily: 'Merriweather Sans',
                textAlign: 'center',
                marginBottom: '4rem'
            }}
          >
            Welcome Admin {user.username}
            </Typography>
          <Typography component="h1" variant="h4" sx={{fontWeight: 'bold', fontFamily: 'Merriweather Sans'}}>
            Add a job here
          </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                name="company_name"
                placeholder='Company name*'
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="title"
                placeholder='Title*'
                id="password"
                autoComplete="current-password"
              />
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                multiline
                rows={4}
                name="job_description"
                placeholder='Job Description*'
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="job_type"
                placeholder='Job Type*'
                id="password"
                autoComplete="current-password"
              />
              
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                name="industry"
                placeholder='Industry*'
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="remote"
                placeholder='Remote*'
                id="password"
                autoComplete="current-password"
              />
              
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                placeholder='Salary*'
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="location"
                placeholder='Location*'
                id="password"
                autoComplete="current-password"
              />
              
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                name="longitude"
                placeholder='longitude*'
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                placeholder='latitude*'
                id="password"
                autoComplete="current-password"
              />
              
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ 
                    mt: 3, 
                    mb: 2, 
                    height: '3.5rem', 
                    backgroundColor: '#1F699D', 
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.5rem'
                }}
              >
                Submit Job
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      </main>
    )
}
export default AdminYes








   
