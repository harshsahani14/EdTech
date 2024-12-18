import { createSlice } from "@reduxjs/toolkit";
import { getItemWithExpiry } from "../apis/localStorage";

const initialState = {

    // Issue while reloading page cannot fetch user object
    user : getItemWithExpiry("user"),
    showLogOutModal:false,
    loading:false,
}

const profileSlice = createSlice({
    name:"profile",
    initialState:initialState,
    reducers:{
        setUser(state,value){
            state.user=value.payload
        },
        setshowLogOutModal(state,value){
            state.showLogOutModal=value.payload
        },
        setLoading(state,value){
            state.loading=value.payload
        }
        
    }
})

export const {setUser,setshowLogOutModal,setLoading} = profileSlice.actions;
export default profileSlice.reducer;

