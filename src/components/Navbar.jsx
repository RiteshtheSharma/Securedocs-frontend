import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { set } from '../store/slices/SearchTermSlice';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';
import { useCallback,useEffect } from 'react';
<<<<<<< HEAD
import SettingsIcon from '@mui/icons-material/Settings';
=======
>>>>>>> 8d8f002425bb935a33992430a196a95dff2ff488
//Navlink style object for navigation links when screen 's width is large 
const LNavLinkStyles = ({ isActive }) => {
  return {
    fontWeight: isActive ? "boldest" : "bold",
    textDecoration:'none',
    color:isActive?'white':"rgb(185, 204, 234)",
  };
};

//Navlink style object for navigation links when screen 's width is small
const SNavLinkStyles = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    textDecoration:'none',
    color:'black'
  };
}
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const drawerWidth = 240;

function DrawerAppBar(props) {
  const dispatch =useDispatch()

  const navigate =  useCallback(() => {
    useNavigate ();
  }, [props]);





  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
 
const Items = useSelector((state)=>state.navbarItems) 
const setSearchTerm = (term)=>{
  dispatch(set(term))
} 
const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
 
  

  const container = window !== undefined ? () => window().document.body : undefined;
  console.log(" navbar rerendered ",Items[0])
  return (
    
<<<<<<< HEAD
    <Box sx={{ display: 'flex' ,marginBottom: { xs: '56px', sm: `${64}px` },backgroundColor:'#1976D2'}}>
      <CssBaseline />
      <AppBar component="nav" sx={{minHeight:'56px !important'}}>
        <Toolbar >
=======
    <Box sx={{ display: 'flex' ,marginBottom: { xs: '56px', sm: `${64}px` }}}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
>>>>>>> 8d8f002425bb935a33992430a196a95dff2ff488
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}
       >
          <Typography
            variant="h6"
            component="div"
            color={'rgb(185, 204, 234)'}
<<<<<<< HEAD
            mr={2} 
            sx={{marginTop:'2px'}}>
            SecureDocs
          </Typography>
          
            {Items.map((item) => {
=======
            mr={2} >
            INotebook
          </Typography>
          
            {Items.map((item) => {console.log("item ",item,Items)
>>>>>>> 8d8f002425bb935a33992430a196a95dff2ff488
              
              return(

            <Typography key={item} mr={2} sx={{ color: '#fff' ,textAlign:'right',flexGrow:((item ==='Logout'|| item ==='Login'  )?'1':'none')}} my={'auto'} >
<<<<<<< HEAD
               <NavLink to={(item==="Home")?'':item.toLowerCase()} style={LNavLinkStyles} >
               {(item==='Settings')?<SettingsIcon sx={{marginTop:'8px'}} />:item}
               </NavLink>
=======
               <NavLink to={(item==="Home")?'':item.toLowerCase()} style={LNavLinkStyles} >{item}</NavLink>
>>>>>>> 8d8f002425bb935a33992430a196a95dff2ff488
                
              </Typography>
              
            )})}
        
          </Box>

          {(Items.indexOf('Login')===-1) &&
          
          
           <Box sx={{width:{xs: '100%', sm: `initial`}}}>
          <Search onClick={()=>{ navigate('search')}}>
            <SearchIconWrapper>
              <SearchIcon  />
            </SearchIconWrapper>
            <StyledInputBase
<<<<<<< HEAD
              placeholder="Search"
=======
              placeholder="Search…"
>>>>>>> 8d8f002425bb935a33992430a196a95dff2ff488
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e)=>setSearchTerm(e.target.value)}
            />
          </Search>
          </Box>
          
          }
          
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {(
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        SecureDocs
      </Typography>
      <Divider />
      <List>
        {Items.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} style={SNavLinkStyles} component={NavLink} to={(item==="Home")?'':item.toLowerCase()}>
            
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
     
      </List>
    </Box>
  )}
        </Drawer>
      </Box>
     
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default memo(DrawerAppBar);