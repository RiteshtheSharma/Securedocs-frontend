import { configureStore } from "@reduxjs/toolkit";
import {authTokenSlice}  from './slices/AuthTokenSlice'
import { alertSlice } from "./slices/AlertSlice";
import { navbarItemsSlice } from "./slices/NavbarItemsSlice";
import { searchTermSlice } from "./slices/SearchTermSlice";
import { userInfoSlice } from "./slices/UserInfoSlice";
import { folderSlice } from "./slices/FolderSlice";
import { fileSlice } from "./slices/FileSlice";
const store = configureStore({

    reducer:{
        AUTH_TOKEN:authTokenSlice.reducer,
        navbarItems:navbarItemsSlice.reducer,
        alert:alertSlice.reducer,
        searchTerm:searchTermSlice.reducer,
        userInfo:userInfoSlice.reducer,
        folder:folderSlice.reducer,
        file:fileSlice.reducer
    },
    
},) 
export default store;