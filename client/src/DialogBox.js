import React, { useState, useContext } from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import { useHistory, useParams } from "react-router-dom";
import { MyContext } from "./MyContext";
import Divider from '@mui/material/Divider';
import { useMediaQuery } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
      // overflow: 'hidden',
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
    '& .MuiPaper-root': {
      // maxHeight: '100%', 
      // marginTop: '10rem'
    },
  }));
  

function DialogBox({ setEditFLag }) {
  
  const isMobile = useMediaQuery('(max-width: 600px)');
  const [open, setOpen] = useState(true);
  const history = useHistory()
  const params = useParams()
  const {jobs, setJobs,  user} = useContext(MyContext)

  let selectedJob = ''

  if (jobs && jobs.length > 0) {
    selectedJob = jobs.find(job => job.id === parseInt(params.id)) 
  }

  function handleEditClick() {
    setEditFLag(true)
  }
  
  
  function handleClose() {
    setOpen(false)
    history.push('/jobportal')
  }

  function handleClick() {
    fetch(`/jobs/${selectedJob.id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      setJobs(jobs.filter(job => job.id !== data.id))
      alert('🚨 Job deleted successfully.')
      history.push('/jobportal')
    })
  }
  
  return (
    <main>
      <BootstrapDialog 
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{backgroundColor: 'rgba(70, 0, 220, 0.6)'}}
        PaperProps={{
          sx: {
            borderRadius: '10px'  
          },
        }}
      >
        <DialogTitle
          sx={{m: 0, pl: 6, pb:  1.5, pt: 7, alignItems: 'center', display: 'flex' }} 
          id="customized-dialog-title"
        >
          <img width="30" height="30" src="https://img.icons8.com/color/48/qgenda.png" alt="qgenda"/>
          &nbsp;
          <p style={{marginTop: "0.3rem", fontFamily: 'Merriweather Sans', color: '#302a79'}}>
            {selectedJob.company_name} 
          </p>
        </DialogTitle>
        <DialogTitle 
          sx={{m: 0, pl: 6, pt: 0,fontSize: '2.7rem',fontFamily: 'Merriweather Sans',color: '#440044'}} 
          id="customized-dialog-title"
        >
          {selectedJob.title}
        </DialogTitle>
        <Button
          variant="contained"
          disableRipple 
          sx={{
            width: '6rem',
            backgroundColor: 'white',
            color: 'black',
            boxShadow: 'none',
            textTransform: 'none',
            border: 'solid 0.1px darkgrey',
            fontFamily: 'Merriweather Sans',
            ml: 6,
            mb: 5,
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: 'white', 
              boxShadow: 'none'
            },
          }}
        >
          Save
        </Button>
        <Divider/>
        <DialogContent>
          <main style={{display: 'flex', justifyContent: 'space-between'  }}>
            <section style={{textAlign: 'center', paddingLeft: isMobile ? '0rem' : '3rem'}}>
              <div style={{fontSize: isMobile ? '' : '1.3rem',fontFamily: 'Merriweather Sans', color: '#440044' }}>
                {selectedJob.job_type}
              </div>
              <div style={{color: '#302a79', fontSize: '1.2rem'}}> 
                job type
              </div>
            </section>
            <section style={{textAlign: 'center'}}>
              <div style={{fontSize: isMobile ? '' : '1.3rem',fontFamily: 'Merriweather Sans', color: '#440044' }}>
                {selectedJob.created_at}
              </div>
              <div style={{color: '#302a79', fontSize: '1.2rem'}}>
                posted on
              </div>
            </section>
            <section style={{textAlign: 'center', paddingRight: isMobile ? '0rem' : '5rem'}} >
              <div style={{fontSize: isMobile ? '' : '1.3rem',fontFamily: 'Merriweather Sans', color: '#440044' }}>
                $ {selectedJob.salary}
              </div>
              <div style={{color: '#302a79', fontSize: '1.2rem'}}>
                salary
              </div>
            </section>
          </main>
          <Divider sx={{paddingTop: '2rem', marginBottom: '4rem'}}/>
          <DialogTitle 
            sx={{m: 0, pl: 4, pt: 0,fontSize: '1.5rem', fontFamily: 'Merriweather Sans', color: '#440044'}} 
            id="customized-dialog-title"
          >
            Job Tags
          </DialogTitle>
          <Divider sx={{paddingTop: '0rem', marginBottom: '1.5rem'}}/>
          <Button
            variant="contained"
            disableRipple 
            sx={{ 
              mb: 2 ,
              color: 'white',
              height: '2rem',
              backgroundColor: '#40E0D0',
              fontWeight: 'bold',
              boxShadow: 'none',
              textTransform: 'none',
              marginLeft: '2rem',
              fontFamily: 'Merriweather Sans',
              border: 'solid 0.1px darkgrey',
              width: '9rem',
              '&:hover': {
                backgroundColor: '#40E0D0', 
                boxShadow: 'none'
              },
            }}
          >
            {selectedJob.industry}
          </Button>
          <Button
            variant="contained"
            disableRipple 
            sx={{ 
              mb: 2 ,
              color: 'white',
              height: '2rem',
              backgroundColor: 'red',
              fontWeight: 'bold',
              boxShadow: 'none',
              marginLeft: '1rem',
              textTransform: 'none',
              border: 'solid 0.1px darkgrey',
              width: '9rem',
              '&:hover': {
                backgroundColor: 'red', 
                boxShadow: 'none'
              },
            }}
          >
            {selectedJob.remote === true ? 'Remote' : 'Not Remote'}
          </Button>
          <DialogTitle 
            sx={{m: 0, pl: 4, pt: 4,fontSize: '1.3rem', fontFamily: 'Merriweather Sans', color: '#440044'}} 
            id="customized-dialog-title"
          >
            Job Description
          </DialogTitle>
          <Divider sx={{paddingTop: '0rem', marginBottom: '1.5rem'}}/>
          <p 
            style={{
              marginTop: "0.3rem", 
              fontFamily: 'Merriweather Sans', 
              color: '#440044',
              marginLeft: '2rem',
              fontSize: '1.2rem'
            }}
          >
            Summary
          </p>
          <Typography 
            gutterBottom
            color='text.primary'
            sx={{
              marginLeft: '2rem',
              fontSize: '1.32rem',
              fontFamily: 'Merriweather Sans', 
            }}
          >
            {selectedJob.job_description}
          </Typography>
          <DialogTitle 
            sx={{m: 0, pl: 4, pt: 4,fontSize: '1.3rem',fontFamily: 'Merriweather Sans',color: '#440044'}} 
            id="customized-dialog-title"
          >
            Location
          </DialogTitle>
          <Divider sx={{ marginBottom: '1.5rem'}}/>
          <p 
            style={{
              marginTop: "0.3rem", 
              fontFamily: 'Merriweather Sans', 
              color: '#440044',
              marginLeft: '2rem',
              fontSize: '1.2rem',
              fontWeight: 'bold'
            }}
          >
            {selectedJob.company_name}
          </p>
          <small
            style={{
              fontFamily: 'Merriweather Sans', 
              color: '#302a79',
              marginLeft: '2rem',
              fontSize: '1rem',
            }}
          >
            {selectedJob.location}
          </small>
        </DialogContent>
        {user.admin === true ? 
          <section style={{paddingLeft: '1rem'}}>
            <DialogTitle 
              sx={{pt: 4, fontSize: '1.1rem', fontFamily: 'Merriweather Sans', color: '#440044'}} 
              id="customized-dialog-title"
            >
              Admin Actions
            </DialogTitle>
            <Divider sx={{ marginBottom: '1.5rem'}}/>
            <Button
              variant="contained"
              disableRipple 
              onClick={handleClick}
              sx={{ 
                mb: 2 ,
                color: 'white',
                height: '2rem',
                backgroundColor: 'red',
                fontWeight: 'bold',
                boxShadow: 'none',
                textTransform: 'none',
                marginLeft: '1.3rem',
                fontFamily: 'Merriweather Sans',
                border: 'solid 0.1px darkgrey',
                width: '9rem',
                '&:hover': {
                  backgroundColor: '#c62828', 
                  boxShadow: 'none'
                },
              }}
            >
              <DeleteOutlineIcon/>
            </Button>
            <Button
              variant="contained"
              disableRipple
              onClick={handleEditClick} 
              sx={{ 
                mb: 2 ,
                color: 'white',
                height: '2rem',
                backgroundColor: '#ff9800',
                fontWeight: 'bold',
                boxShadow: 'none',
                marginLeft: '1rem',
                textTransform: 'none',
                width: '9rem',
                '&:hover': {
                  backgroundColor: '#e65100', 
                  boxShadow: 'none'
                },
              }}
            >
              <EditOutlinedIcon/>
            </Button>
          </section>
          :
          ""
        }
      </BootstrapDialog>
    </main>
  )
}
export default DialogBox












    

  
