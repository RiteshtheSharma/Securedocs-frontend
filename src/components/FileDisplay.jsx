import React,{useState,useEffect} from 'react'
import PdfDisplayer from './PdfDisplayer'
import OtherDisplayer from './OtherDisplayer'
import { useLocation } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
 const FileDisplay = () => {  
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem('AUTH_TOKEN'))
    navigate('/login')
    
  }, [])
  const location = useLocation()
    const { uri } = location.state
const [Extension, setExtension] = useState(uri.slice(uri.indexOf('.')+1))
useEffect(() => {
  
setExtension(uri.slice(uri.indexOf('.')+1))
  
}, [uri])

const IFRAME_ID = 'my-iframe';
const IFRAME_CONTAINER_ID = 'my-iframe-container'
  return (
    
    <div style={{minWidth:'50vw',minHeight:'90vh',width:'100vw'}}>
    <pre style={{textAlign:'center'}}>file type : {Extension}</pre>
    {('gif|png|svg|html|css|js|ts|tsx|jsx|jpeg|jpg|html|mp3|wav|ogg|mp4|webm|xml|txt|json'.split('|').indexOf(Extension)>-1 )?
      
      <iframe id ={IFRAME_ID} name={IFRAME_ID}   src={`${import.meta.env.VITE_BACKEND_URI}/${uri}`} allowFullScreen style={{minWidth:'100vw',minHeight:'100vh'}} sandbox ='' />:
      
      (  Extension==="pdf" ? <PdfDisplayer uri={`${import.meta.env.VITE_BACKEND_URI}/${uri}`}  />:<OtherDisplayer uri={`${import.meta.env.VITE_BACKEND_URI}/${uri}`}/>)}

  </div>
    
  )
}

export default FileDisplay


