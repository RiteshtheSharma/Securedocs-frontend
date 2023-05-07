import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {set as setAlert} from '../store/slices/AlertSlice'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {useNavigate} from 'react-router-dom'
import {setFile} from '../store/slices/FileSlice'
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import {setFolder} from '../store/slices/FolderSlice'
const columnsFolder = [
  {
    id: 'name',
    label: 'Name',
    // width: 170
  },
  {
    id: 'no_of_file',
    label: 'No of files',
    // width: 80
  },
  {
    id: 'date',
    label: 'Date',
    // width: 130
  },
  {
    id: 'server_file_storage',
    label: 'Total Storage Occupied',


    // width: 90,
  },
  
];
const columnsFile = [
  {
    id: 'name',
    label: 'Name',
    // width: 170
  },
  {
    id: 'type',
    label: 'Type',
    // width: 80
  },
  {
    id: 'date',
    label: 'Date',
    // width: 130
  },
  {
    id: 'size',
    label: 'Size',


    // width: 90,
  },
  
];
/* file
const rows = [

  { id: 1, name: 'Snow', type: 'Jon', date: 35, category: 'random' },
  { id: 2, name: 'Lannister', type: 'Cersei', date: 42, category: 'random' },
  { id: 3, name: 'Lannister', type: 'Jaime', date: 45, category: 'random' },
  { id: 4, name: 'Stark', type: 'Arya', date: 16, category: 'random' },
  {
    id: 5,
    name: 'Targaryen',
    type: 'Daenerys',
    date: null,
    category: 'random',
  },
  { id: 6, name: 'Melisandre', type: null, date: 150, category: 'random' },
  { id: 7, name: 'Clifford', type: 'Ferrara', date: 44, category: 'random' },
  { id: 8, name: 'Frances', type: 'Rossini', date: 36, category: 'random' },
  { id: 9, name: 'Roxie', type: 'Harvey', date: 65, category: 'random' },
  { id: 10, name: 'Snow', type: 'Jon', date: 35, category: 'random' },
  { id: 11, name: 'Lannister', type: 'Cersei', date: 42, category: 'random' },
  { id: 12, name: 'Lannister', type: 'Jaime', date: 45, category: 'random' },
  { id: 13, name: 'Stark', type: 'Arya', date: 16, category: 'random' },
  {
    id: 14,
    name: 'Targaryen',
    type: 'Daenerys',
    date: null,
    category: 'random',
  },
  { id: 15, name: 'Melisandre', type: null, date: 150, category: 'random' },
  { id: 16, name: 'Clifford', type: 'Ferrara', date: 44, category: 'random' },
  { id: 17, name: 'Frances', type: 'Rossini', date: 36, category: 'random' },
  { id: 18, name: 'Roxie', type: 'Harvey', date: 65, category: 'random' },
];

*/


/*
const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  ,
  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
  },
  {
    id: 'nooffiles',
    label: 'No of files',
    minWidth: 170,
  },
];

function createData(name, date, nooffiles, id) {
  return { name, date, nooffiles, id };
}

const rows = [
  createData('India', '2023-04-26T12:01:17.677+00:00', 1324171354, 0),
  createData('China', '2023-04-26T12:01:42.283+00:00', 1403500365, 1),
  createData('Italy', '2023-04-29T11:01:59.345+00:00', 60483973, 2),
  createData('United States', '2023-04-29T11:01:59.345+00:00', 327167434, 3),
  createData('Canada', '2023-04-26T12:01:42.283+00:00', 37602103, 4),
  createData('Australia', '2023-04-26T12:01:42.283+00:00', 25475400, 5),
  createData('Germany', '2023-04-26T12:01:42.283+00:00', 83019200, 6),
  createData('Ireland', 'IE', 4857000, 7),
  createData('Mexico', 'MX', 126577691, 8),
  createData('Japan', 'JP', 126317000, 9),
  createData('France', 'FR', 67022000, 10),
  createData('United Kingdom', 'GB', 67545757, 11),
  createData('Russia', 'RU', 146793744, 12),
  createData('Nigeria', 'NG', 200962417, 13),
  createData('Brazil', 'BR', 210147125, 14),
];
*/


export default function Tables({category}) {
  const dispatch = useDispatch()
  const  ShowAllFiles =(token)=>{
    try{
      axios.get(`${import.meta.env.VITE_BACKEND_URI}/api/file/fetchallfiles`,
    {
      headers: {'auth-token':token }
    } ).then((res)=>{dispatch(setFile(res.data))}).catch((err)=>{console.log('dashboard show all files',err)})
   
     
    
      dispatch(setAlert({'show':true,'severity':'success','msg':'Sucessfully fetched all files'}));
    }
    catch(error){console.log(' cunt error',error)
      dispatch(setAlert({'show':true,'severity':'error','msg':'Error while fetching file '}));
    }
    
    }

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
    const  ShowFiles =(token,id)=>{console.log(' show files ',id)
      try{
        axios.get(`${import.meta.env.VITE_BACKEND_URI}/api/file/fetchfiles`,
      {
        headers: {'auth-token':token ,folder: id}
      } ).then((res)=>{dispatch(setFile(res.data)),console.log(res.data,' data ')}).catch((err)=>{console.log(`dashboard show ${id} files`,err)})
     
       
      
        dispatch(setAlert({'show':true,'severity':'success','msg':'Sucessfully fetched  files'}));
      }
      catch(error){console.log(' cunt error',error)
        dispatch(setAlert({'show':true,'severity':'error','msg':'Error while fetching files '}));
      }
      
      }

  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem('AUTH_TOKEN'))
    navigate('/login')
    else if(category==='all'){console.log(' hello ')
      ShowAllFiles(localStorage.getItem('AUTH_TOKEN'))
    }else if(category===null){
      fetchCat()

    }else if(typeof(category)==='string'){
      ShowFiles(localStorage.getItem('AUTH_TOKEN'),category)
    }
  }, [])
  const columns=(category===null)?columnsFolder:columnsFile;
  const rows = [...((category===null)?useSelector(state=>state.folder):useSelector(state=>state.file))];
   console.log(rows,' in tables')
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const ShareFile = async (category,id)=>{
    // need to add functionality
    let Email = prompt('Enter email id to share');
    if(!Email)return
    const folder = rows.filter(f=>f._id===id)[0].folder
    
    try{if(Email && /\S+@\S+\.\S+/.test(Email) ){ 
      let Pwd = prompt('Enter password if you want to send on email else click cancel')
      await axios.post(`${import.meta.env.VITE_BACKEND_URI}/api/file/sharefile`,{fileid:id,
        email:Email,
        pwd:(Pwd ===null)?'false':Pwd ,},
{
  headers: {'auth-token':localStorage.getItem('AUTH_TOKEN'),'folder':folder }
  
}

)


dispatch(setAlert({'show':true,'severity':'success','msg':'Sucessfully sent'}));
}else{
  dispatch(setAlert({'show':true,'severity':'error','msg':'Please enter valid email id'}));
}
  }
  catch(err){dispatch(setAlert({'show':true,'severity':'error','msg':'Error occured while sending '})); }
 




  }
  const RenameFile =async (category,id)=>{
    let newName = prompt('New name ?');
    try{if(newName){  await axios.put(`${import.meta.env.VITE_BACKEND_URI}/api/file/updatefilename/${id}`,{name:newName,},
{
  headers: {'auth-token':localStorage.getItem('AUTH_TOKEN'),'folder':category }
  
}

)

ShowFiles(localStorage.getItem('AUTH_TOKEN'),category)
dispatch(setAlert({'show':true,'severity':'success','msg':'Sucessfully renamed'}));
}
  }
  catch(err){dispatch(setAlert({'show':true,'severity':'error','msg':'Error occured while renaming'})); console.log(err,' error while renaming')}
   
  }


 const deleteFile = async (category,id)=>{
  try{ await axios.delete(`${import.meta.env.VITE_BACKEND_URI}/api/file/deletefolder/${id}`,
  {
    headers: {'auth-token':localStorage.getItem('AUTH_TOKEN'),'folder':category }
    
  }
  
  )
  let i=0;
  for(;i<rows.length;i++){
    if(rows[i]._id === id){break;}}
   rows.splice(i, 1);
  dispatch(setAlert({'show':true,'severity':'success','msg':'Sucessfully deleted'}));}
catch(err){
  dispatch(setAlert({'show':true,'severity':'error','msg':'Error while deleting'}));
}


 } 
 

  const RenameFolder =async (id)=>{
    let newName = prompt('New name ?');
    try{if(newName){  await axios.put(`${import.meta.env.VITE_BACKEND_URI}/api/folder/updatefoldername/${id}`,{name:newName,},
{
  headers: {'auth-token':localStorage.getItem('AUTH_TOKEN') }
  
}

)
fetchCat()
dispatch(setAlert({'show':true,'severity':'success','msg':'Folder sucessfully renamed'}));
}
  }
  catch(err){dispatch(setAlert({'show':true,'severity':'error','msg':'Error occured while renaming folder'})); console.log(err,' error exposed')}
   
  }


 const deleteFolder =  (id)=>{console.log(' delete folder ')
  try{  axios.delete(`${import.meta.env.VITE_BACKEND_URI}/api/folder/deletefolder/${id}`,
  {
    headers: {'auth-token':localStorage.getItem('AUTH_TOKEN') }
    
  }
  
  ).then((res)=>{
    console.log(' response on del', res.data)
    fetchCat()
  })
  .catch((err)=>{console.log(err,' error in delete folder')
    dispatch(setAlert({'show':true,'severity':'error','msg':'Error while deleting folder'}));
  })


  dispatch(setAlert({'show':true,'severity':'success','msg':'Sucessfully deleted folder'}));}
catch(err){console.log(err,' error in delete folder')
  dispatch(setAlert({'show':true,'severity':'error','msg':'Error while deleting folder'}));
}


 } 
const openFolder =async (id,CategoryName )=>{console.log('categoryName',CategoryName)
try{let arr = axios.get(`${import.meta.env.VITE_BACKEND_URI}/api/file/fetchfiles`,{
headers: {'auth-token':localStorage.getItem('AUTH_TOKEN'),folder: id}

}


)

  dispatch(setFile(arr.data))

  dispatch(setAlert({'show':true,'severity':'success','msg':'Sucessfully fetched files for the category'}));
}
catch(error){
  dispatch(setAlert({'show':true,'severity':'error','msg':'Error while fetching file for the category'}));
}
const folders = rows.filter(el=>el._id===id)
ShowFiles(localStorage.getItem('AUTH_TOKEN'),id)
navigate(`/category/${id}`,{state:{
  Category:folders[0].name
}})
}
//  const shareFile = async (id,category)=>{
//   try{ await axios.post(`${import.meta.env.VITE_BACKEND_URI}/api/file/sharefile`,
//   {fileid:id,email:
//     headers: {'auth-token':localStorage.getItem('AUTH_TOKEN'),'folder':category }
    
//   }
  
//   )
//   let i=0;
//   for(;i<rows.length;i++){
//     if(rows[i]._id === id){break;}}
//    rows.splice(i, 1);
//   dispatch(setAlert({'show':true,'severity':'success','msg':'Sucessfully deleted'}));}
// catch(err){
//   dispatch(setAlert({'show':true,'severity':'success','msg':'Error while deleting'}));
// }


//  } 
  const SelectElement = ({category,id,CategoryName=null})=>{
   
    return (category!==null) ?<Select
          id= {`file${id}`}
         >
          
          <MenuItem  onClick={()=>{ShareFile(category , id)}}>Share</MenuItem>
          <MenuItem onClick={ ()=>{RenameFile(category,id)}} >Updatename</MenuItem>
          <MenuItem onClick={()=>{deleteFile(category,id)}} >Delete</MenuItem>
          <MenuItem > <Link to={`/file/${id}`} state={{ uri:CategoryName  }}>
  Open File
</Link></MenuItem>
        </Select>:<Select
           id= {`folder${id}`}
        >
          
          <MenuItem  ><Link to={`/uploadFile/${id}`} >Addfile</Link></MenuItem>
          <MenuItem onClick={()=> {RenameFolder(id)}}>Updatename</MenuItem>
          <MenuItem onClick={()=>deleteFolder(id)}>Delete</MenuItem>
          <MenuItem onClick={()=>{openFolder(id,category)}}> 
  Open Folder
</MenuItem>
        </Select>} 



  return (
    <Paper sx={{ width: '100%', overflow: 'hidden',margin:'70px 0' }}>
      <TableContainer sx={{width:'100vw'}}>
        <Table stickyHeader aria-label="sticky table" sx={{margin:'auto'}}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
         
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row._id}
                  
                    onClick={() => {
                     // your code 
                    }}
                  >
                    {columns.map((column) => {
                      const value = (column.id === 'size')? Math.round(row[column.id]/1024)+'KB':((column.id === 'server_file_storage')?  Math.round(row[column.id]/(1024*1024))+"MB":row[column.id]);
                      return (
                        <TableCell key={column.id} align={column.align}>
                          { value}
                        </TableCell>
                      );
                    })}
                    <SelectElement category={category} id={row._id} CategoryName={(row.path)?row.path:null }/>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
