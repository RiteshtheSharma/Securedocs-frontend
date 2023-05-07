import { useContext,useEffect } from 'react'
// import { alertContext } from '../context/AlertContext'
// import { navBarItemsContext } from '../context/NavBarItemsContext'
// import { authContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import {Typography,Box,Button } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
// import noteContext from '../context/NoteContext';
import { useDispatch, useSelector } from 'react-redux';
import { set } from '../store/slices/AlertSlice';
import { remove } from '../store/slices/AuthTokenSlice';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import {delUSerInfo} from '../store/slices/UserInfoSlice'
import { delFile } from '../store/slices/FileSlice';
import { delFolder } from '../store/slices/FolderSlice';
let theme = createTheme({
  typography: {
    fontFamily: [
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
},})
theme = responsiveFontSizes(theme);

const Logout = () => {  const AUTH_TOKEN = useSelector((state)=>state.AUTH_TOKEN).AUTH_TOKEN || localStorage.getItem('AUTH_TOKEN')

  const dispatch = useDispatch()
  const setAlert = (obj)=>{
dispatch(set(obj))
  }
const removeAuth_Token =()=>{ dispatch(remove())}
//   const {CleanNotesFromClient} = useContext(noteContext)
  const navigate = useNavigate();
  const RemovePresentUserData = ()=>{
    localStorage.removeItem('AUTH_TOKEN');
    removeAuth_Token();

   dispatch(delUSerInfo())
   dispatch(delFile())
   dispatch( delFolder())
    // CleanNotesFromClient([])
    setAlert({'show':true,'severity':'success','msg':"Logout sucessfully"});
    navigate('/login');
    }
   useEffect(() => {
    if(AUTH_TOKEN === null)
     navigate('/login')
   
     return () => {
       
     }
   }, [])
   
  return (<ThemeProvider theme={theme}>
    <Box  sx={{width:'100vw',minHeight:'100vh',backgroundColor:'#007FFF',display: 'flex',alignItems:'center',justifyContent:'center'}}>
    <Box sx={{ display: 'flex',textAlign:'center',flexDirection:'column' , padding: '40px', border: '1px solid #ccc', borderRadius: '8px',backgroundColor:'white'}}><Box>
    <LogoutIcon sx={{fontSize:'100px'}} />
    
    <Typography sx={{}}>You are going to logout</Typography>
    <Typography sx={{}}> Are you sure?</Typography></Box>
    <Button onClick={RemovePresentUserData}>Yes</Button>
    <Button onClick={()=>{navigate(-1)}}>No</Button>
   
    </Box></Box> </ThemeProvider>
 
  )
}


export default Logout;
