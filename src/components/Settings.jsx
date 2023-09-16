import React ,{useState,useEffect} from 'react'
import { Typography,Box ,TextField ,Button,OutlinedInput,IconButton,InputAdornment} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { authContext } from '../context/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { navBarItemsContext } from '../context/NavBarItemsContext';
// import noteContext from '../context/NoteContext';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector } from 'react-redux'
import { remove } from '../store/slices/AuthTokenSlice';
import { useDispatch } from 'react-redux';
import { set } from '../store/slices/AlertSlice';
const Settings = () => {
  const [open, setOpen] = useState(false);
const dispatch = useDispatch()
const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};
  const navigate = useNavigate();
  const [email, setemail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [pwd, setpwd] = useState('');
//   const {AUTH_TOKEN,setAUTH_TOKEN,UpdateEmail,UpdatePassword,DeleteUserAccount} = useContext(authContext)
//   const {CleanNotesFromClient} = useContext(noteContext)
//   const {Items,setItems} = useContext(navBarItemsContext)
const AUTH_TOKEN = useSelector((state)=>state.AUTH_TOKEN).AUTH_TOKEN || localStorage.getItem('AUTH_TOKEN')
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  useEffect(() => {
    if(AUTH_TOKEN === null)
     navigate('/login')
   
     return () => {
       
     }
   }, [])
const handleMouseDownPassword = (event) => {
  event.preventDefault();
};
const RemovePresentUserData = ()=>{
    alert("You are going to logout")
    dispatch(remove())
  
//   CleanNotesFromClient([]);
  console.log("navigate to login (RemovePresentUserData)");
  navigate('/login');
  }

 const UpdateEmail= async ()=>{
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/auth/updateemail`, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    
   
    headers: {
      "Content-Type": "application/json",
      "auth-token":AUTH_TOKEN ,
      // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body:JSON.stringify({"email":email.toLowerCase()})
  });
  if(response.status === 200)
  {const json = await response.json();
   dispatch(set({'show':true,'severity':'success','msg':'Changed the email id sucessfully login with new email id'}));
}

else{ 
const msg = response.errors;
if(typeof(msg)==='string')
dispatch(set({'show':true,'severity':'error','msg':msg}));
else if(msg === undefined){
dispatch(set({'show':true,'severity':'error','msg':"Please provide right credentials or signup"}));
}
else {

dispatch(set({'show':true,'severity':'error','msg':msg.statusText})) ;}
}

RemovePresentUserData();
 }
 const UpdatePassword =async()=>{
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/auth/updatepassword`, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    
   
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
      "auth-token":AUTH_TOKEN ,
          },
          body:JSON.stringify({"password":pwd})
  });
  if(response.status === 200)
  {const json = await response.json();
   dispatch(set({'show':true,'severity':'success','msg':'Changed the password sucessfully login with new password'}));
}

else{ 
const msg = response.errors;
if(typeof(msg)==='string')
dispatch(setset({'show':true,'severity':'error','msg':msg}));
else if(msg === undefined){
dispatch(set({'show':true,'severity':'error','msg':"New password must have atleast 1 uppercase , 1 lowercase , 1 digit and 1 special character with no space having min 8 chars"}));
}
else {

dispatch(set({'show':true,'severity':'error','msg':msg.statusText}));}
}
RemovePresentUserData()
 }
  const OnDeleteButtonClick = async ()=>{
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/auth/deleteuseraccount`, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        
       
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
          "auth-token":AUTH_TOKEN ,
              },
             
      });
      if(response.status === 200)
      {const json = await response.json();
       dispatch(set({'show':true,'severity':'success','msg':'Your Account is deleted sucessfully'}));
       
  }
  
  else{ 
   const msg = response.errors;
   console.log(response)
   if(typeof(msg)==='string')
   dispatch(set({'show':true,'severity':'error','msg':msg}));
   else if(msg === undefined){
    dispatch(set({'show':true,'severity':'error','msg':"Some error occured while deleting your account"}));
   }
   else {
   
    dispatch(set({'show':true,'severity':'error','msg':msg.statusText}));}
  }
  
 
  console.log("deleted sucessfully .... ")
    RemovePresentUserData();
    handleClose();}
<<<<<<< HEAD
  return (<div style={{width: "100vw" ,marginTop:'50px'}}>
=======
  return (<div style={{width: "100vw" }}>
>>>>>>> 8d8f002425bb935a33992430a196a95dff2ff488
    <Typography variant='h3' my={3} sx={{textAlign:'center',fontWeight:'bold',fontSize:{sm:'3rem',xs:'1.5rem'}}}>Settings</Typography>
    <Box sx={{margin:'auto',border:'1px solid black',width:{sm:'50vw',xs:'80vw'},padding:'10px 20px'}}>   
    <Typography variant="overline" display="block" fontWeight='bold' gutterBottom>Email</Typography>
    <TextField id ='email'  placeholder='Enter the new email' fullWidth onChange={(e)=>{e.preventDefault();setemail(e.target.value)}} ></TextField>
   <Box mt={3} sx={{width:'100%'}} >< Button variant="contained" fullWidth onClick={ (e)=>{e.preventDefault();console.log(e,"event"); UpdateEmail()}} disabled={!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))} > Update email </Button></Box>
   <Typography variant="overline" display="block" fontWeight='bold' gutterBottom>Password</Typography>
   <OutlinedInput id="password"  placeholder='Enter the new password' fullWidth onChange={(e)=>{e.preventDefault();setpwd(e.target.value)}} type={showPassword ? 'text' : 'password'}
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
            <Box mt={3} sx={{width:'100%'}} >< Button variant="contained" fullWidth onClick={ (e)=>{e.preventDefault();
  UpdatePassword()  }}  disabled={!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,]).{8,}$/.test(pwd))}> Update Password </Button></Box>
 
              </Box>
              <Box mt={3} sx={{width:{sm:'50vw',xs:'80vw'},margin:{sm:'50px auto',xs:'15px auto'}}} > <Button variant="contained" color="error" fullWidth onClick={handleClickOpen}>Delete Account </Button>
              
              
              <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Want to delete your account?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Attention you are going to delete your account and all your notes will be deleted from our database 
           .You can still choose to delete your account or not to do so .
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Don 't Delete</Button>
          <Button onClick={ OnDeleteButtonClick} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
              
              
              </Box>

    </div>)
}

export default Settings