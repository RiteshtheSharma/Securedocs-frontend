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
import { set  } from '../store/slices/AlertSlice';
import { useNavigate } from 'react-router-dom';
const Signup = () => {const dispatch = useDispatch()
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [pwd, setpwd] = useState('')
  const navigate = useNavigate()
  const [confirmPwd, setconfirmPwd] = useState('')
  const handleLogin = async (e)=>{
    
    e.preventDefault();
  
   const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/auth/createuser`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    
   
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body:JSON.stringify({"name":username,"email":email.toLowerCase(),"password":pwd})
  });
  if(response.status === 200)
  {const json = await response.json();
//     localStorage.setItem('AUTH_TOKEN',json.AUTH_TOKEN)
// console.log("response",json.AUTH_TOKEN)

dispatch(set({'show':true,'severity':'success','msg':'Signed up sucessfully now login with same credentials'}));
navigate('/login')
}
else{console.log(response,"  ,  some login error");
const msg = response.errors;
console.log("sign in error",msg,response)
if(typeof(msg)==='string')
dispatch(set({'show':true,'severity':'error','msg':msg}));
else {
    dispatch(set({'show':true,'severity':'error','msg':"Same email has already been used"}));}
}

  }
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};
const handleMouseDownConfirmPassword = (event) => {
  event.preventDefault();
};
const validCredentials = ()=>!(username.length >= 3 &&  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,]).{8,}$/.test(pwd) && pwd === confirmPwd && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
  return (
    <div style={{width:'100vw',marginTop:"20px"}}>
    <Container sx={{margin:'auto'}}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:'column' }}>
        <Box sx={{ width: '100%', maxWidth: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }} mb={4}>
          <Typography variant="h4" align="center" gutterBottom>
            Signup
          </Typography>
          <form >
          <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="username" > User name </InputLabel>
              <Input id="username" type="text" onChange={(e)=>{setusername(e.target.value);}}/>
            </FormControl>
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

            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="Confirm password" >Confirm password</InputLabel>
              <Input id="Confirm password"  onChange={(e)=>{setconfirmPwd(e.target.value)}} type={showConfirmPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle Confirm password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownConfirmPassword}
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }/>
            
            </FormControl>
            <Button variant="contained" fullWidth size="large" sx={{ mt: 2 }} onClick={handleLogin} disabled={validCredentials()}>
              Signup
            </Button>
          </form>
        </Box>
        <Typography variant="caption" display="block" gutterBottom>Already have an account <Link to='/login'> login</Link></Typography>

      </Box>
    </Container>
    </div>
  );
}

export default Signup;
