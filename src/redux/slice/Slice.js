import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isLoadding: false,
    email : null,
    userName: null,
    userID: null
};

const authSlise = createSlice({
    name:"auth",
    initialState,
    reducers:{
        SET_ACTIVE_USER : (state, action) => {
            const {email, userID, userName} = action.payload;
            state.isLoadding= true;
            state.email = email;
            state.userID = userID;
            state.userName = userName;
        },
        REMOVE_ACTIVE_USER(state,action){
            state.isLoadding= false;
            state.email = null;
            state.userID = null;
            state.userName = null;
            

        }
    }
});
export const {SET_ACTIVE_USER ,REMOVE_ACTIVE_USER} = authSlise.actions;

 export const selectIsLoadding = (state) => state.auth.isLoadding;
 export const selectUserName = (state)  => state.auth.userName;
 export const selectUserID = (state) => state.auth.userID;
 export const selectEmail = (state) => state.auth.email;

export default authSlise.reducer;