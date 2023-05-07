import React, { useState,useEffect } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import {set as setAlert} from '../store/slices/AlertSlice'
import {useParams} from "react-router-dom";
import {useNavigate} from 'react-router-dom'
const UploadForm = () => {const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem('AUTH_TOKEN'))
    navigate('/login')
    
  }, [])
  const { folderid } = useParams();
  console.log(' folder id ',folderid)
  const [name, setName] = useState("");
  const [File, setFile] = useState([]);
  const [uploaded, setUploaded] = useState(null);

  const hadleSubmit = (e) => {
    e.preventDefault();

    let formdata = new FormData();

      formdata.append("file", File);
    

    formdata.append("name", name);

    axios
      .post(`${import.meta.env.VITE_BACKEND_URI}/api/file/addfile`, formdata, {headers:
        {'auth-token':localStorage.getItem('AUTH_TOKEN')
        ,    'folder':folderid,}}
      )
      .then((success) => {
       
        dispatch(setAlert({'show':true,'severity':'success','msg':'Sucessfully uploaded file'}));
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAlert({'show':true,'severity':'error','msg':'Error happened while file uploading'}));
      });
  };

  return (
    <>
      <form onSubmit={hadleSubmit} style={{
          display: "flex",
          flexDirection: "column",
          height: "calc( 100vh - 200px)",
          width:"100vw",
          alignContent: "center",
          padding:'0 20px',
          marginTop:'70px'
        }}>
        <div className="form-group"  style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px 2px"
          }}>
          <label htmlFor="name"  style={{ fontSize: "20px" }}>Name of file</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            style={{ fontSize: "20px", width: "40vw", minWidth: "120px" }}
          />
        </div>


       
        <div className="form-group" style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0px 2px 20px 2px"
          }}>
          <label htmlFor="file" style={{ fontSize: "20px" }}>Upload file</label>
          <input
            type="file"
            name="file"
            id="file"
            className="form-control"
            accept="*"
            onChange={(e) => {console.log("files",e.target.files[0])
              setFile(e.target.files[0]);
            }}
            style={{
              fontSize: "20px",
              width: "40vw",
              minWidth: "120px",
              border: "2px solid #D0D0D7",
              padding: "5px",
              borderRadius: "5px"
            }}
          />
        </div>

       

        <button type="submit" className="btn btn-primary mt-2" style={{ padding: "10px 0", fontSize: "20px",backgroundColor:'#1976D2',color:'white' }}>
          Submit
        </button>
      </form>
    </>
  );
};

export default UploadForm;