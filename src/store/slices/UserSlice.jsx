import {createSlice} from '@reduxjs/toolkit';
import fakeUserData from '../../api/Index';
import { deleteAdmin } from './AdminSlice';
import  removeUser  from '../actions/index'
const userSlice = createSlice({name:"alert",
initialState:{show:false},
reducers :{
addUser(state,action){
state.push(action.payload)
},

deleteUsers(state,action){
//state.splice(0,state.length)  
return []
}
},extraReducers(builder){
    builder.addCase(deleteAdmin,()=>{
        return []

    })
    builder.addCase(removeUser,(state,action)=>{
        state.splice(action.payload,1)
    }


    )
}


}) 
console.log(userSlice.actions);
export {userSlice};
// export default userSlice.reducer /* to avoid writting .reducer in store  
export const {addUser} = userSlice.actions;
export const {deleteUsers} = userSlice.actions;

