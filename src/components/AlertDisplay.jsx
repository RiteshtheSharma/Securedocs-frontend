import React, { useEffect,useCallback } from 'react'
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux'
import { set } from '../store/slices/AlertSlice';
import { useSelector } from 'react-redux'
import Collapse from '@mui/material/Collapse';
const AlertDisplay = () => {
  const dispatch = useDispatch()
  const alert = useSelector((state)=>state.alert) 
  const setAlert= (obj)=>{
    dispatch(set(obj))
  }
useEffect(() => {let Timeout;
  if(alert.show===true)
  {Timeout = setTimeout(() => {
    console.log('changed in alert display')
   setAlert({'show':false})
    
  }, 5000)}
  return ()=>{clearTimeout(Timeout)
    
  }
},[alert])


  return (
    <>
    
     <Collapse in={alert?.show}>
     <Alert sx={{position:'fixed',width:'100%',zIndex:'100',top:{ xs: '56px', sm: `${64}px` }}} action={
      <IconButton
        aria-label="close"
        color="inherit"
        size="small"
        onClick={() => {
          setAlert({...alert,'show':false})
        }}
      >
        <CloseIcon fontSize="inherit" />
      </IconButton>
    } severity={alert?.severity}>
        
        {alert?.msg}
      </Alert></Collapse>

    
      </>
    
  )
}

export default AlertDisplay