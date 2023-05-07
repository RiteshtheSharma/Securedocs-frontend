import {createSlice} from '@reduxjs/toolkit';


const searchTermSlice = createSlice({name:"searchTerm",
initialState:{term:''},
reducers :{
set(state,action){
state.term=action.payload

},


}
,
    

}) 
console.log(searchTermSlice.actions);
export {searchTermSlice};
// export default userSlice.reducer /* to avoid writting .reducer in store  
export const {set} = searchTermSlice.actions;


