import React from "react";
import LoggedInNavigation from "./Navigation/LoggedInNavigation";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function JobPortal() {

    const cards = [1];
    const defaultTheme = createTheme();
    
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
                                Your Jobs
                            </Typography>
                            <Typography variant="h5" color="text.secondary" paragraph>
                                Refer here to keep an eye on your saved jobs.
                            </Typography>
                        </Container>
                    </Box>
                    <Container sx={{ py: 3 }} maxWidth="lg">
                        <Grid container spacing={4}>
                            {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ 
                                        height: '20rem', 
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        color: 'white',
                                        backgroundColor: '#ba68c8'
                                    }}
                                >
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2" sx={{fontWeight: 'bold', paddingTop: '3rem'}}>
                                            Software Engineer
                                        </Typography>
                                        <Typography>
                                            Apartment List
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            ))}
                        </Grid>
                    </Container>
                </main>
            </ThemeProvider>
        </main>
    )
}
export default JobPortal

