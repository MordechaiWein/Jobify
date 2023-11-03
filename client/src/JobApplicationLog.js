import React, { useState } from 'react'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useMediaQuery } from '@mui/material';

function JobApplicationLog() {

    const isMobile = useMediaQuery('(max-width: 1100px)');
    const [status, setStatus] = useState(false)
    const [error, setError] = useState('')
    const [data, setData] = useState({
        firstJob: '',
        secondJob: '',
        thirdJob: '',
        fourthJob: '',
        fifthJob: ''
    })

    function handleClick() {
        const isEmpty = Object.values(data)
        const filterIsEmpty = isEmpty.filter(item => item.length < 1)
        if (filterIsEmpty.length === 0) {
            setStatus(true)
            setError('')
        } else {
            setError('sorry, but you have not applied for five jobs today yet.')
            setStatus(false)
        }
    }

    function handleChange(event) {
        setData({...data,[event.target.name]: event.target.value})
    }

    return (

        <main style={{paddingBottom: '5rem'}}>
            <Typography
                component="h1"
                variant="h3"
                color="text.primary"
                gutterBottom
                sx={{fontFamily: 'Merriweather Sans', paddingTop: '5rem'}}
            >
                Application Log
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{fontFamily: 'Merriweather Sans',}} paragraph>
                As a new graduate, you should strive to apply to at least five companies per day.
            </Typography>
            <Divider/>
            <section style={{display: isMobile ? '' : 'flex', alignItems: 'center'}}>
                <section style={{display: 'flex', flexDirection: "column"}}>
                    <TextField
                        id="standard-basic" 
                        variant="standard"    
                        placeholder='First Company'
                        value={data.firstJob}
                        name='firstJob'
                        onChange={handleChange}
                        sx={{ width: '45ch', mt: 5}}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">1.</InputAdornment>,  
                        }}
                    />  
                    <TextField
                        id="standard-basic" 
                        variant="standard" 
                        placeholder='Second Company'
                        value={data.secondJob}
                        name='secondJob'
                        onChange={handleChange}
                        sx={{ width: '45ch', mt: 5}}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">2.</InputAdornment>, 
                        }}
                    />  
                    <TextField
                        id="standard-basic" 
                        variant="standard" 
                        placeholder='Third Company'
                        value={data.thirdJob}
                        name='thirdJob'
                        onChange={handleChange}
                        sx={{ width: '45ch', mt: 5}}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">3.</InputAdornment>,  
                        }}
                    />  
                    <TextField
                        id="standard-basic" 
                        variant="standard" 
                        placeholder='Fourth Company'
                        value={data.fourthJob}
                        name='fourthJob'
                        onChange={handleChange}
                        sx={{ width: '45ch', mt: 5}}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">4.</InputAdornment>,  
                        }}
                    />  
                    <TextField
                        id="standard-basic" 
                        variant="standard" 
                        placeholder='Fifth Company'
                        name='fifthJob'
                        value={data.fifthJob}
                        sx={{ width: '45ch', mt: 5}}
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">5.</InputAdornment>  
                        }}
                    />  
                    <Button
                        onClick={handleClick}
                        type="submit"
                        variant="contained"
                        sx={{ 
                        mt: 3, 
                        backgroundColor: '#1F699D', 
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        width: '45ch'
                        }}
                    >
                        Complete
                    </Button>
                    <div style={{display: 'flex', marginTop: '2rem'}}>
                        { error ? <ErrorOutlineIcon sx={{color: 'red', marginRight: '0.5rem'}}/> : ''}
                        <p style={{color: 'red'}}>{error}</p>
                    </div>
                </section>
                <section style={{marginLeft: isMobile ? '' : '35ch'}}>
                    <div style={{display: 'flex', alignItems: 'baseline'}}>
                        <h1>Status:</h1>
                        <Typography  
                            color={status ? 'black' :  "text.secondary"}
                            sx={{fontFamily: 'Merriweather Sans', ml: 1, fontSize: '1.7rem'}}
                        >
                            {status ? "YAY COMPLETE!" : "Incomplete!"}
                        </Typography>
                        <h1 style={{marginLeft: '1rem'}}>{status ? '😄  🎉🎉🎉' : ''}</h1>
                    </div>  
                </section>
            </section>
        </main>
    )
}

export default JobApplicationLog