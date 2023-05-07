import {createSlice} from '@reduxjs/toolkit';
import { fetchFromLocalStorage } from './AuthTokenSlice';
import { remove } from './AuthTokenSlice';
import axios from 'axios';
const userInfoSlice = createSlice({name:'userInfo',
    initialState:{},
reducers:{
setUSerInfo(state,action){
 return action.payload
},
delUSerInfo(state,action){
    return {}
}
}
,
extraReducers(builder){
  
    builder.addCase(remove ,()=>{
        
          return {}
    })
    
}  
})
export {userInfoSlice};
export const {setUSerInfo} = userInfoSlice.actions;
export const {delUSerInfo}= userInfoSlice.actions;