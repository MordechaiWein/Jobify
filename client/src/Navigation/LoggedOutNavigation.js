import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoImage from '../Images/logo.png'
import CloseIcon from '@mui/icons-material/Close';

// interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
//   window?: () => Window;
// }

// const drawerWidth = '100%';
// const logo = LogoImage

function LoggedOutNavigation(props: Props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = useState(false);

//   function handleDrawerToggle() {
//     setMobileOpen(!mobileOpen)
//   }

//   const drawer = (
//     <Box sx={{minHeight: '100vh', color: '#1F699D'}}>
//       <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
//       <Typography variant="h6" sx={{ my: 2, ml: 2, fontWeight: 'bold', fontSize: '2rem'}}>
//         JOBIFY
//       </Typography>
//       <CloseIcon onClick={handleDrawerToggle}  fontSize='large' sx={{marginRight: '1.5rem', backgroundColor: '#1F699D', color: '#F5F5F5'}}/>
//       </div>
     
//       <Divider />
 
//     <Typography variant='h5' sx={{ml: 2, my: 2}}>LOG IN</Typography>
//     <Typography variant='h5' sx={{ml: 2}}>SIGN UP</Typography> 
//     </Box>
//   )

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    // <Box sx={{ display: 'flex' }}>
    //   <CssBaseline />
    //   <AppBar component="nav" sx={{backgroundColor: 'white', boxShadow: 'none', color: '#1F699D'}}>
   
    //     <Toolbar>
    //       <IconButton
    //         color="inherit"
    //         aria-label="open drawer"
    //         edge="start"
    //         onClick={handleDrawerToggle}
    //         sx={{ mr: 2, display: { sm: 'none' } }}
    //         disableRipple  
    //       >
    //         <MenuIcon 
    //         sx={{
    //           marginTop: '0.6rem', 
    //           fontSize:'4rem',
    //           }}
    //         />
    //       </IconButton>
    //       <Typography
    //         variant="h6"
    //         component="div"
    //         sx={{ flexGrow: 1, 
    //           display: { xs: 'none', sm: 'block' },
    //           display: 'flex' ,
    //           alignItems: "center",

    //         }}
    //       >
    //        <img style={{width: '4rem'}} src={logo}/> 
    //        <Typography variant="h4" sx={{fontWeight: 'bold', paddingTop: '0.7rem'}}>JOBIFY</Typography>
    //       </Typography>
    //       <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            
    //           <Button  
    //             sx={{ 
    //               color: '#F5F5F5',  
    //               fontSize: '1.2rem', 
    //               backgroundColor: '#1F699D', 
    //               marginRight: '1rem',
    //               marginTop: '0.7rem',
    //               '&:hover': {
    //                 backgroundColor: '#1F699D', 
    //               },
    //             }}
    //           >
    //             LOG IN
    //           </Button>
                
    //           <Button  
    //             sx={{ 
    //               color: '#F5F5F5',  
    //               fontSize: '1.2rem', 
    //               backgroundColor: '#1F699D', 
    //               marginRight: '1rem',
    //               marginTop: '0.7rem',
    //               '&:hover': {
    //                 backgroundColor: '#1F699D', 
    //               },
    //               }}
    //             >
    //             SIGN UP
    //           </Button>
           
           
    //       </Box>
      
    //     </Toolbar>
       
    //   </AppBar>
   
    //   <nav>
    //     <Drawer
    //       container={container}
    //       variant="temporary"
    //       open={mobileOpen}
    //       onClose={handleDrawerToggle}
    //       ModalProps={{
    //         keepMounted: true, // Better open performance on mobile.
    //       }}
    //       sx={{
    //         display: { xs: 'block', sm: 'none' },
    //         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
    //       }}
    //     >
    //       {drawer}
    //     </Drawer>
    //   </nav>
    // </Box>
    <h1>hel==l</h1>
  )
}
export default LoggedOutNavigation
