import { useState,useEffect } from 'react'
import {  Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import AlertDisplay from './components/AlertDisplay';
import Home from './components/Home';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { fetchFromLocalStorage } from './store/slices/AuthTokenSlice';
import { useSelector } from 'react-redux'
import { set } from './store/slices/NavbarItemsSlice';
import Dashboard from './components/Dashboard'
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import Settings from './components/Settings';
import { Navigate } from "react-router-dom";
import EncryptDecrypt from './components/EncryptDecrypt';
import Tables from './components/Tables'
import FileList from './components/FileList';
import FileDisplay from './components/FileDisplay';
import UploadForm from './components/UploadForm';
function App() {
  const dispatch = useDispatch()
  
useEffect(() => {
dispatch(fetchFromLocalStorage())
  
}, [])


 
  return (
   <>
   
     <Navbar  />
     
   <AlertDisplay / >



   
 <Routes>

<Route
      exact path='/'
      element={
    <Home />    }
    />
      <Route
      exact path='/dashboard'
      element={
       <Dashboard/>    }
    />

<Route
      exact path='/encryptdecrypt'
      element={
       <EncryptDecrypt/>    }
    />
      <Route
      exact path='/login'
      element={
       <Login/>    }
    />
    <Route
      exact path='/signup'
      element={
      <Signup/>    }
    />
   <Route
      exact path='/logout'
      element={
       <Logout/>   }
    />
   
     <Route
      exact path='/settings'
      element={
       <Settings/>    }
    />

<Route
      exact path='/categories'
      element={
       <Tables category={null}/>    }
    />
    <Route
      exact path='/category/:id'
      element={
       <FileList />    }
    />
     <Route
      exact path='/file/:id'
      element={
       < FileDisplay />    }
    />
    <Route
      exact path='/uploadFile/:folderid'
      element={
       < UploadForm />    }
    />
      {/*<Route
      exact path='/search'
      element={
       <Search />    }
    /> */}
    <Route
           path="*"
           element={
             <div style={{ margin: "12px" }}>
               <Error />
             </div>
           }
         />
      
    </Routes>
   
     
    </>
  )
}

export default App
