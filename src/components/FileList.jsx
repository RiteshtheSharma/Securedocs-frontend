import React,{useEffect} from 'react'
import Tables from './Tables'
import {useParams} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { Typography } from '@mui/material';
const FileList = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem('AUTH_TOKEN'))
    navigate('/login')
    
  }, [])
    const folderList =useSelector(state=>state.folder)
    const { id } = useParams();
    const location = useLocation()
    const { Category } = location.state
  
  
   
  return (
    <>
  <Typography variant="h2" gutterBottom sx={{textAlign:'center',margin:'40px 0',fontWeight:'bold'}}>
        Category : { Category}
      </Typography>

<Tables category={id}/>
    </>
    
  )
}

export default FileList