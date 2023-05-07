import React from 'react'
import folderIcon from './images/folder.png'
import shareIcon from './images/share.png'
import searchIcon from './images/search.png'
import SecurityIcon from "./images/security.png"
import  phoneIcon from "./images/mobile.png"
import MainImg from './images/LockedDoc.png'
import './Css/Home.css'
const Home = () => {
  return (
    <div style={{margin:'40px 40px auto 40px ',}}>
    <div style={{width:'calc(100vw - 80px )',display:"flex"}}><img src={MainImg} style={{width:'256px',margin:'auto'}}/></div>
    
    
      <h1>Welcome to Safe Docs App</h1>
      <h3 style={{textAlign:'justify',margin:'20px 0'}}>Safe Docs is a secure document storage and sharing application designed to provide users with a reliable platform for managing their sensitive documents.</h3>
      
      <div className="align_container">
        <img src={folderIcon} alt="Folder Icon" className='imgProperty left_align_img'/>
        <h2>Efficient Document Management</h2>
        <p style={{textAlign:'justify'}}>With Safe Docs, you can efficiently manage your diverse documents in one location, allowing for streamlined organization and easy access. You can create custom folders and organize your documents in categories according to your preferences.</p>
      </div>

      <div className="align_container">
        <img src={shareIcon} alt="Sharing Icon" className='imgProperty right_align_img'/>
        <h2>Secure Document Sharing</h2>
        <p style={{textAlign:'justify'}}>Safe Docs employs a password-protected sharing feature that enables only trusted contacts who have knowledge of the password to access the shared documents, even in cases where the document may have fallen into the wrong hands.</p>
      </div>

      <div className="align_container">
        <img src={searchIcon} alt="Search Icon" className='imgProperty left_align_img'/>
        <h2>Advanced Document Search</h2>
        <p style={{textAlign:'justify'}}>Safe Docs offers advanced features such as document search, document tagging, and document labeling that further assist users in finding the documents they need in a timely manner.</p>
      </div>

      <div className="align_container">
        <img src={SecurityIcon} alt="Security Icon" className='imgProperty right_align_img' />
        <h2>Robust Security Measures</h2>
        <p style={{textAlign:'justify'}}> The Safe Docs App ensures the protection of user documents from unauthorized access through state-of-the-art security measures, including encryption and two-factor authentication.</p>
      </div>

      <div className="align_container">
        <img src={phoneIcon} alt="Mobile Icon" className='imgProperty left_align_img' />
        <h2>Mobile Accessibility</h2>
        <p style={{textAlign:'justify'}}>Safe Docs has a mobile app that allows users to access and edit files on-the-go, as well as upload files from their mobile devices.</p>
      </div>
    </div>
  )
}

export default Home