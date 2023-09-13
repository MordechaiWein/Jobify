import React, { useContext } from 'react'
import LoggedInNavigation from "./Navigation/LoggedInNavigation";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { MyContext } from "./MyContext";
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import PopUp from './PopUp';

function JobPortal() {
    
    const defaultTheme = createTheme();
    const {jobs} = useContext(MyContext)

    return (

        <main>
            <LoggedInNavigation/>
            <ThemeProvider theme={defaultTheme}>
                <CssBaseline />
                <main>
                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            pt: 15,
                            pb: 6,
                        }}
                    >
                        <Container maxWidth="lg">
                            <Typography
                                component="h1"
                                variant="h2"
                                color="text.primary"
                                gutterBottom
                            >
                                Jobify Job Portal
                            </Typography>
                            <Typography variant="h5" color="text.secondary" paragraph>
                                Continue your job search.
                            </Typography>
                            <TextField
                                required
                                fullWidth
                                name="animal-search"
                                placeholder='Search a job title...'
                                type="text"
                                id="password"
                                autoComplete="current-password"
                                style={{
                                    marginBottom: '2rem', 
                                    marginTop: '4rem',
                                    width: '100%'
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Container>
                    </Box>
                    <Container sx={{ py: 3 }} maxWidth="lg">
                            <Grid container spacing={4}>
                                {jobs.map((job) => (
                                <Grid item key={job.id} xs={12} sm={6} md={4}>
                                <Link to={`jobportal/${job.id}`}>
                                    <Card
                                        sx={{ 
                                            height: '20rem', 
                                            display: 'flex', 
                                            flexDirection: 'column', 
                                        
                                        }}
                                    >
                                        <CardContent sx={{ flexGrow: 1 ,ml: 2}}>
                                            <img width="48" height="48" src="https://img.icons8.com/color/48/qgenda.png" alt="qgenda"/>
                                            <Typography gutterBottom variant="h6" component="h2" 
                                                sx={{fontWeight: 'bold', color: '#49447f', marginLeft: '0.2rem'}}>
                                                {job.title}
                                            </Typography>
                                            <Typography sx={{textDecoration: 'underline'}}>
                                                {job.company_name}
                                            </Typography>
                                            <Typography sx={{paddingTop: "0.5rem"}}>
                                                {job.location}
                                            </Typography>
                                            <Button
                                                variant="contained"
                                                disableRipple 
                                                sx={{ 
                                                    mt: 3, mb: 2 ,
                                                    color: 'red',
                                                    height: '2rem',
                                                    backgroundColor: 'mistyrose',
                                                    fontWeight: 'bold',
                                                    boxShadow: 'none',
                                                    textTransform: 'none',
                                                    '&:hover': {
                                                        backgroundColor: 'mistyrose', 
                                                        boxShadow: 'none'
                                                    },
                                                }}
                                            >
                                                {job.remote === true ? '👨🏻‍💻 Remote' : 'Not Remote'}
                                            </Button>
                                            <Button
                                                variant="contained"
                                                disableRipple 
                                                sx={{ 
                                                    mt: 3, mb: 2 ,
                                                    color: '#DAA520',
                                                    height: '2rem',
                                                    backgroundColor: '#ffffe6',
                                                    fontWeight: 'bold',
                                                    boxShadow: 'none',
                                                    textTransform: 'none',
                                                    marginLeft: '4rem',
                                                    border: 'solid 0.1px',
                                                    '&:hover': {
                                                        backgroundColor: '#ffffe6', 
                                                        boxShadow: 'none'
                                                    },
                                                }}
                                            >
                                                {job.job_type}
                                            </Button>
                                        </CardContent>
                                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                            <Typography 
                                                sx={{padding: '0.5rem', color: '#ba68c8', fontWeight: 'bold'}}>
                                                {job.industry}
                                            </Typography>
                                            <Typography 
                                                sx={{marginRight: '1rem', color: '#302a79'}}>
                                                posted: {job.created_at}
                                            </Typography>
                                        </div>
                                    </Card>
                                </Link>
                                </Grid>
                                ))}
                            </Grid>
                    </Container>
                </main>
            </ThemeProvider>
            <Route path={'/jobportal/:id'}>
              <PopUp/>
            </Route>
        </main>             

    ) 
}
export default JobPortal


