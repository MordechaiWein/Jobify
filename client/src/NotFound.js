import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useHistory } from "react-router-dom";
import LogoImage from './Images/logo.png'

function NotFound() {

    const history = useHistory()
    const logo = LogoImage

    useEffect(() => {
        setTimeout(() => history.push("/"), 4000)
    }, [])

    return (
        <main style={{ minHeight: '100vh', display: 'flex'}}>
            <Container maxWidth="xl" 
                sx={{
                    marginTop: 25,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <img style={{width: '8rem'}} src={logo}/> 
                <Typography variant="h2" sx={{color: '#1F699D', fontFamily: 'Merriweather Sans', paddingTop: '1.5rem'}}>JOBIFY</Typography>
                <Typography variant="h7" sx={{color: '#1F699D', fontFamily: 'Merriweather Sans'}}>Unlock Your Career Potential</Typography>
                <Typography variant="h3" sx={{color: '#1F699D', paddingTop: '1rem', fontFamily: 'Merriweather Sans'}}>Sorry, we couldn't find the page you are looking for.</Typography>
                <Typography variant="h4" sx={{color: '#1F699D', paddingTop: '1rem', textAlign: 'center', fontFamily: 'Merriweather Sans'}}>
                    You will be redirected automatically to the Main Page
                </Typography>
            </Container>
        </main>
    )

}

export default NotFound
