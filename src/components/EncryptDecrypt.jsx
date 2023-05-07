import React, { useState } from "react";
import axios from "axios";
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
  import { Link } from 'react-router-dom';
const EncryptDecrypt = ({ getAllMedias }) => {
  const [Ename, setEName] = useState("");
  const [EFile, setEFile] = useState([]);
  const [Dname, setDName] = useState("");
  const [DFile, setDFile] = useState([]);

//   const FileDownload = require('js-file-download');
  const hadleDSubmit = (e) => {
    e.preventDefault();

    let formdata = new FormData();

      formdata.append("file", DFile);
    

    formdata.append("password", Dname);
     console.log(DFile," File")
    axios
      .post(`${import.meta.env.VITE_BACKEND_URI}/api/lockUnlockFile/decrypt`, formdata, 
      )
      .then((response) => {
        if(confirm("Do you want to download file ?")){
     
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', DFile.name);
        document.body.appendChild(link);
        link.click();
        alert("Submitted successfully");
  }})
      .catch((error) => {
        console.log(error);
        alert("Error happened!");
      });
  };

  const hadleESubmit = (e) => {
    e.preventDefault();

    let formdata = new FormData();

      formdata.append("file", EFile);
    

    formdata.append("password", Ename);
console.log(EFile.name,'bc ')
    axios
      .post(`${import.meta.env.VITE_BACKEND_URI}/api/lockUnlockFile/encrypt`, formdata, 
      )
      .then((response) => {
        if(confirm("Do you want to download file ?")){
       
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', EFile.name);
        document.body.appendChild(link);
        link.click();
        alert("Submitted successfully");
   } })
      .catch((error) => {
        console.log(error);
        alert("Error happened!");
      });
  };

  return (
    <Box sx={{width:'100vw',marginTop:'70px', display:"flex",flexDirection:{sm:"row",xs:"column"}}}>
    <Container sx={{marginTop:"20px"}} >
      <Box sx={{ display: 'flex', justifyContent:"flex-start", alignItems: 'center',flexDirection:'column' }}>
        <Box sx={{ width: '100%', maxWidth: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }} mb={4}>
          <Typography variant="h4" align="center" gutterBottom>
            Decrypt file
          </Typography>
      <form onSubmit={hadleDSubmit}>
        <div className="form-group">
          <label htmlFor="name">Password</label>
          <input
            type="text"
            name="name"
            id="name"
            style={{width:'100%',marginBottom:'20px',padding:'5px 2px'}}
            onChange={(e) => setDName(e.target.value)}
          />
        </div>


       
        <div className="form-group">
          <label htmlFor="file">File</label>
          <input
            type="file"
            name="file"
            id="file"
            style={{width:'100%',padding:'5px',border:"1px solid #CCCCCC"}}
            accept="*"
            onChange={(e) => {console.log("files",e.target.files[0])
              setDFile(e.target.files[0]);
            }}
          />
        </div>

       

        <button type="submit" style={{width:'100%',margin:'20px 0',backgroundColor:'#1976D2',color:'white'}}>
          Submit
        </button>
       
      </form>
      </Box>
       
      </Box>
    </Container>
    
    <Container sx={{marginTop:"20px"}} >
      <Box sx={{ display: 'flex', justifyContent:"flex-start", alignItems: 'center',flexDirection:'column' }}>
        <Box sx={{ width: '100%', maxWidth: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }} mb={4}>
          <Typography variant="h4" align="center" gutterBottom>
            Encrypt file
          </Typography>
      <form onSubmit={hadleESubmit}>
        <div className="form-group">
          <label htmlFor="name">Password</label>
          <input
            type="text"
            name="name"
            id="name"
            style={{width:'100%',marginBottom:'20px',padding:'5px 2px'}}
            onChange={(e) => setEName(e.target.value)}
          />
        </div>


       
        <div className="form-group">
          <label htmlFor="file">File</label>
          <input
            type="file"
            name="file"
            id="file"
            style={{width:'100%',padding:'5px',border:"1px solid #CCCCCC"}}
            accept="*"
            onChange={(e) => {console.log("files",e.target.files[0])
              setEFile(e.target.files[0]);
            }}
          />
        </div>

       

        <button type="submit" style={{width:'100%',margin:'20px 0',backgroundColor:'#1976D2',color:'white'}}>
          Submit
        </button>
       
      </form>
      </Box>
       
      </Box>
    </Container>
    </Box>
  );
};

export default EncryptDecrypt;