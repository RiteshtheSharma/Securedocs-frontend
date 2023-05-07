import {createSlice} from '@reduxjs/toolkit';
import { fetchFromLocalStorage } from './AuthTokenSlice';
import { remove } from './AuthTokenSlice';
import axios from 'axios';
const folderSlice = createSlice({name:"folder",
    initialState:[],
reducers:{
setFolder(state,action){
 return action.payload
},
delFolder(state,action){
    return []
},

}
,
extraReducers(builder){
    
    builder.addCase(remove ,()=>{
        
          return []
    })
    
}  
})
export {folderSlice};
export const {setFolder} = folderSlice.actions;
export const {delFolder}= folderSlice.actions;
export const {fetchCat}= folderSlice.actions;