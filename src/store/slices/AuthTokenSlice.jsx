import {createSlice} from '@reduxjs/toolkit';


const authTokenSlice = createSlice({name:"AUTH_TOKEN",
initialState:{AUTH_TOKEN:null},
reducers :{
fetchFromLocalStorage(state,action){
state.AUTH_TOKEN = localStorage.getItem('AUTH_TOKEN');

},
initialize(state,action){
    localStorage.setItem('AUTH_TOKEN',action.payload);
    state.AUTH_TOKEN = action.payload;
},
remove(state,action){
    localStorage.removeItem('AUTH_TOKEN');
   state.AUTH_TOKEN = null

    //state.splice(0,state.length)  
   // return []
    }

}
,
    

}) 
console.log(authTokenSlice.actions);
export {authTokenSlice};
// export default userSlice.reducer /* to avoid writting .reducer in store  
export const {fetchFromLocalStorage} = authTokenSlice.actions;
export const {initialize} = authTokenSlice.actions;
export const {remove} = authTokenSlice.actions;

