import React,{useEffect} from 'react'
import './Css/Table.css'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FolderIcon from '@mui/icons-material/Folder';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { set as setAlert } from '../store/slices/AlertSlice';
import {setFolder} from '../store/slices/FolderSlice'
import { setUSerInfo } from '../store/slices/UserInfoSlice';

import axios from 'axios';
const Dashboard = () => {
  let Folders = useSelector(state=>state.folder)
  const dispatch = useDispatch()
  const FetchUserInfo = (token)=>{
    if(token)
            { axios.post(`${import.meta.env.VITE_BACKEND_URI}/api/auth/getuser`,{},
                        {
                          headers: {'auth-token':token }
                        }
                     
              ).then((res)=>{dispatch(setUSerInfo(res.data))}).catch((err)=>{console.log("error in userinfo slice ",err)})
             
  
  
            }
  }

  const navigate =   useNavigate ();
  

  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const UserInfo = useSelector((state)=>state.userInfo) 
  function fetchCat(){
    if(localStorage.getItem('AUTH_TOKEN'))
    {try{
      axios.get(`${import.meta.env.VITE_BACKEND_URI}/api/folder/fetchallfolders`,
                {
                  headers: {'auth-token':localStorage.getItem('AUTH_TOKEN') }
                }
             
      ).then((res)=>{dispatch(setFolder(res.data));
      
        dispatch(setAlert({'show':true,'severity':'success','msg':'Sucessfully fetched folders'}));
      
      }).catch((err)=>{console.log(err,' error in fetch cat')
        dispatch(setAlert({'show':true,'severity':'error','msg':'Failed to fetched folders'}));
        dispatch(setFolder([]))
      })}
      catch(err){ 
        dispatch(setFolder([]))
         }
  
         
  
  
    }
    dispatch(setFolder([]))
   
   
  }
  const CreateNewCategory = async ()=>{console.log('printed')
   const categoryName = prompt('enter the name of category')
      if(categoryName )
      {try{let resp = await axios.post(`${import.meta.env.VITE_BACKEND_URI}/api/folder/addfolder`,{name:categoryName},
      {
        headers: {'auth-token':localStorage.getItem('AUTH_TOKEN') }
      }
   
)
dispatch(setAlert({'show':true,'severity':'success','msg':'Sucessfully added a category'}));
fetchCat()
}catch( err){console.log(err,' error in fetchcat')
  dispatch(setAlert({'show':true,'severity':'error','msg':'Failed to added a category'}));
}
        

      
      }
     }
    
    const handleListItemClick = (event, index) => {
      
      setSelectedIndex(index);
     
    };
    const  ShowAllFiles =async (token)=>{
     
      navigate(`/category/${"all"}`,{state:{
        Category:"All"
      }})
      }
      React.useEffect(()=>{if(localStorage.getItem('AUTH_TOKEN'))FetchUserInfo(localStorage.getItem('AUTH_TOKEN'))
    else navigate('/login')},[])
    React.useEffect(()=>{
     switch(selectedIndex){
       case 0:// open Shared Files category 
       
         break;
       case 1://Show all category list
        navigate('/categories')
         break;
       case 2:// create new category 
         
         break;
         case 3://Show All files
         ShowAllFiles(localStorage.getItem('AUTH_TOKEN'))
         break;
       default:
         // alert('error');
         break;
     }
     
        
      
    },[selectedIndex])


    useEffect(() => {
      if(!localStorage.getItem('AUTH_TOKEN'))
      navigate('/login')
      if(!Folders.length)
      fetchCat()
    }, [])
    
  return (
  
    
    <Box sx={{ display: "flex", flexWrap: {sm:'nowrap',xs:"wrap-reverse" },minHeight:{xs:'calc( 100vh - 56px )'}}}>


<Box sx={{paddingTop:{sm:'40px',xs:'0'}, width:{sm:'250px',xs:'100vw' }, bgcolor: '#EBECED', marginTop: { sm: '0', xs: '20px' } }}>



<Box sx={{ width: '100%',}}>


        
          <List component="nav" aria-label="main mailbox folders">
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => {handleListItemClick(event, 0)
                let folders = Folders
       folders = folders.filter(el=>el.name==='share')
       if(folders.length){
         navigate(`/category/${folders[0]._id}`,{state:{
          Category:folders[0].name
        }})
       }else
         alert('Share folder is empty');
              console.log(Folders,' this is folders')
              
              }}
            >
              <ListItemIcon>
                <ShareRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Shared Files" />
            </ListItemButton>

            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Categories" />
            </ListItemButton>


            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => {handleListItemClick(event, 2); CreateNewCategory();}}
            >
              <ListItemIcon>
                <CreateNewFolderIcon />
              </ListItemIcon>
              <ListItemText primary="Create New Category" />
            </ListItemButton>
            
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon>
                <InsertDriveFileIcon />
              </ListItemIcon>
              <ListItemText primary="All files" />
            </ListItemButton>
          </List>


</Box>
      </Box>

      <Box sx={{ width: { sm: 'calc( 100% - 250px )', xs: "100%" },paddingTop:'40px', display: "flex", flexDirection: "column", alignItems: "center" ,justifyContent:{sm:'start',xs:'space-evenly'}}} >
        < AccountCircleIcon sx={{ fontSize: "200px", }} />

        <table >

          <tbody>
            <tr>
              <td>username </td>
              <td>{UserInfo.name} </td>
            </tr>
            <tr>
              <td>&nbsp;email</td>
              <td>{UserInfo.email}  </td>
            </tr>
            <tr>
              <td>&nbsp;disk-space-consumed</td>
              <td>{Math.round(UserInfo.total_server_file_storage/(1024*1024))+'MB'}</td>
            </tr>
            <tr>
              <td>&nbsp;No of files</td>
              <td>{UserInfo.no_of_files}</td>
            </tr>
            <tr>
              <td>&nbsp;No of folders</td>
              {/* needs improvement */}
              <td>{UserInfo.no_of_folders}</td>
            </tr>
            
          </tbody>
        </table>


      </Box>
    </Box>
  )
}

export default Dashboard