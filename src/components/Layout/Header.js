import React,{useState} from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';  
import { Link } from 'react-router-dom';
import '../../styles/HeaderStyles.css'


const Header = () => {
  const [mobileOpen, setmobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setmobileOpen(!mobileOpen)

  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
      
      <Typography color={'goldenrod'} variant='h6' component={'div'} sx={{ flexGrow: 1 }}>
                <FastfoodIcon />
                My Restaurant
              </Typography>
              <Divider/>
 
                
                
                <ul className='mobile-navigation'>
                  <li ><Link to="/">Home</Link></li>                
                  <li ><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/menu">Menu</Link></li>
                
                  
                </ul>
            

    </Box>
  )

  return (
    <div>
      <>
        <Box>
          <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
            <Toolbar>
              <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              sx={{
                mr:2,
                display: { sm: 'none'}
              }}
              onClick={handleDrawerToggle}
              
              >
                <MenuIcon/>

              </IconButton>


              <Typography color={'goldenrod'} variant='h6' component={'div'} sx={{ flexGrow: 1 }}>
                <FastfoodIcon />
                My Restaurant
              </Typography>
 
              <Box sx={{display:{xs:'none', sm: 'block' }}}>
                
                
                <ul className='navigation-menu'>
                  <li ><Link to="/">Home</Link></li>                
                  <li ><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/menu">Menu</Link></li>
                
                  
                </ul>
              </Box>
            </Toolbar>
          </AppBar>
          <Box component="nav">
            <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{display:{xs:'block',sm:'none', width:'200px '}}} >
              {drawer}
              
            </Drawer>

          </Box>
          <Box />

        
          <Toolbar />
        </Box>
      </>
    </div>
  );
};

export default Header;
