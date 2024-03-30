import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type snackbarType = "success" | "error"

interface appSnackbarSlice{
    type:snackbarType,
    open:boolean,
    message:string
}

const initialState :appSnackbarSlice={
    type:"success",
    open:false,
    message:""
}
export const appSnackbarSlice = createSlice({
    name:"snackbar",
    initialState,
    reducers:{
        showSnackBar:(state,action:PayloadAction<{type:snackbarType; message:string}>)=>{
            const {type,message} = action.payload;
            state.open = true;
            state.type = type;
            state.message = message;
        },
        hideSnackBar:(state)=>{
            state.open = false;
            state.type = "success";
            state.message = "";
        },
    }
})

export const {showSnackBar,hideSnackBar} = appSnackbarSlice.actions
export default appSnackbarSlice.reducer;