import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useHistory } from "react-router-dom";

function NotFound() {

    const history = useHistory()

    function handleClick() {
        history.push("/")
      }
    

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
                 <button onClick={handleClick}>history</button>
                <img width="85" height="85" src="https://img.icons8.com/glyph-neue/64/1f699d/goal--v1.png" alt="goal--v1"/>
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
