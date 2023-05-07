import {createSlice} from '@reduxjs/toolkit';
import { fetchFromLocalStorage } from './AuthTokenSlice';
import { remove } from './AuthTokenSlice';

const navbarItemsSlice = createSlice({name:"navbarItems",
initialState:['Home','EncryptDecrypt','Login','Signup'],
reducers :{
set(state,action){
state.splice(0, state.length);
state.splice(0,0,...action.payload)
},


}
,
extraReducers(builder){
    builder.addCase(fetchFromLocalStorage,()=>{
        if(localStorage.getItem('AUTH_TOKEN'))
          return ['Home','Dashboard','Logout','Settings']

    })
    builder.addCase(remove ,()=>{
        
          return ['Home','EncryptDecrypt','Login','Signup']

    })
    
}  

}) 
console.log(navbarItemsSlice.actions);
export {navbarItemsSlice};
// export default userSlice.reducer /* to avoid writting .reducer in store  
export const {set} = navbarItemsSlice.actions;


