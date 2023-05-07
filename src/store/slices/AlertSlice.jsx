import {createSlice} from '@reduxjs/toolkit';

const alertSlice = createSlice({name:"alert",
initialState:{show:false},
reducers :{
set(state,action){
if(action.payload.show ===true){state.show = action.payload.show
    state.severity = action.payload.severity
    state.msg = action.payload.msg}
    else{state.show =false
        // delete  state.severity
        // delete  state.msg 

    }

},

}


}) 
console.log(alertSlice.actions);
export {alertSlice};
// export default userSlice.reducer /* to avoid writting .reducer in store  
export const {set} = alertSlice.actions;
