import {createSlice} from '@reduxjs/toolkit';
import { fetchFromLocalStorage } from './AuthTokenSlice';
import { remove } from './AuthTokenSlice';
import axios from 'axios';
const fileSlice = createSlice({name:'file',
    initialState:[],
reducers:{
setFile(state,action){
 return action.payload
},
delFile(state,action){
    return []
}
}
,
extraReducers(builder){
 
    builder.addCase(remove ,()=>{
        
          return []
    })
    
}  
})
export {fileSlice};
export const {setFile} = fileSlice.actions;
export const {delFile}= fileSlice.actions;