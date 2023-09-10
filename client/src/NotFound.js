import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function NotFound() {

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
                <Typography variant="h2" sx={{color: '#1F699D', fontFamily: 'Merriweather Sans', paddingTop: '1.5rem'}}>JOBIFY</Typography>
                <Typography variant="h7" sx={{color: '#1F699D', fontFamily: 'Merriweather Sans'}}>Unlock Your Career Potential</Typography>
                <Typography variant="h3" sx={{color: '#1F699D', paddingTop: '1rem', fontFamily: 'Merriweather Sans'}}>Sorry, we couldn't find the page you are looking for.</Typography>
                <Typography variant="h4" sx={{color: '#1F699D', paddingTop: '1rem', textAlign: 'center', fontFamily: 'Merriweather Sans'}}>
                    Please navigate back to the previous page.
                </Typography>
            </Container>
        </main>
       
    )

}
export default NotFound
