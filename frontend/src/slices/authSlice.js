import { createSlice } from "@reduxjs/toolkit";
import { getItemWithExpiry } from "../apis/localStorage";

const initialState = {
    token : getItemWithExpiry("token"),
    loading:false,
    signUpDetails:null
}

const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        setToken(state,value){
            state.token=value.payload
        },
        setLoading(state,value){
            state.loading=value.payload
        },
        setsignUpDetails(state,value){
            state.signUpDetails=value.payload
        },
    }
})

export const {setToken,setLoading,setsignUpDetails} = authSlice.actions;
export default authSlice.reducer;

