import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  Container, 
  FormControl, 
  InputLabel, 
  Input, 
  Typography ,
  InputAdornment,
  IconButton
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { initialize } from '../store/slices/AuthTokenSlice';
import { set } from '../store/slices/NavbarItemsSlice';
import { set as setAlert } from '../store/slices/AlertSlice';
import { useNavigate } from 'react-router-dom';
import {setUSerInfo} from '../store/slices/UserInfoSlice'
import axios from 'axios';
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  const [email, setemail] = useState('')
  const [pwd, setpwd] = useState('')

  const handleLogin =async (e)=>{
    e.preventDefault();
    
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/auth/login`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        
       
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body:JSON.stringify({"email":email.toLowerCase(),"password":pwd})
      });


     

      if(response.status === 200)
      {const json = await response.json();
        localStorage.setItem('AUTH_TOKEN',json.AUTH_TOKEN);
        dispatch(initialize(json.AUTH_TOKEN))
    console.log("response",json.AUTH_TOKEN)
   
    navigate('/dashboard')
    //change the items listed in navbar by replacing login & signup to logout and settings
    dispatch(set(['Home','Dashboard','Logout','Settings']))
    
    dispatch(setAlert({'show':true,'severity':'success','msg':'Logged in sucessfully'}));
  }

  else{ 
   const msg = response.errors;
   if(typeof(msg)==='string')
   dispatch(setAlert({'show':true,'severity':'error','msg':msg}));
   else if(msg === undefined){
    dispatch(setAlert({'show':true,'severity':'error','msg':"Please provide right credentials or signup"}));
   }
   else {
   
    dispatch(setAlert({'show':true,'severity':'error','msg':msg.statusText}));
    // dispatch(setUSerInfo())
  }
  }
  

  }
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};
const validCredentials = ()=>!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,]).{8,}$/.test(pwd)  && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
  return (
    <div style={{width:'100vw',marginTop:"20px"}}>
    <Container >
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:'column' }}>
        <Box sx={{ width: '100%', maxWidth: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }} mb={4}>
          <Typography variant="h4" align="center" gutterBottom>
            Log in 
          </Typography>
          <form >
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="email" > email </InputLabel>
              <Input id="email" type="text" onChange={(e)=>{setemail(e.target.value);}}/>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="password" >Password</InputLabel>
              <Input id="password"  onChange={(e)=>{setpwd(e.target.value)}} type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }/>
            </FormControl>
            <Button variant="contained" fullWidth size="large" sx={{ mt: 2 }} onClick={handleLogin} disabled={validCredentials()}>
              Log in
            </Button>
          </form>
        </Box>
        <><Typography variant="caption" display="block" gutterBottom>Don 't have an account <Link to='/signup'> signup</Link></Typography>
        
 </>
      </Box>
    </Container></div>
       
  );
}

export default Login;
