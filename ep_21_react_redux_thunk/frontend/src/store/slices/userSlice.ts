import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginUserParams, RegisterUserParams, User, UserSlice } from "../../types/user";
import { log } from "console";

const initialState: UserSlice ={
    user:null,
    isLoading:false,
    error:null,
}

export const registerUser = createAsyncThunk("user/registerUser",
    async (registerParams:RegisterUserParams,thunkApi)=>{
        const {email,password} = registerParams;
        const response = await fetch("http://localhost:5000/register",{
            headers:{
                "content-type":"application/json",
            },
            method:"POST",
            body:JSON.stringify({email,password}),
        });
    registerParams.onSuccess && registerParams.onSuccess();
});

export const loginUser = createAsyncThunk("user/loginUser",
        async(loginParams:LoginUserParams,thunkApi)=>{
            const {email,password} = loginParams
            const response = await fetch("http://localhost:5000/login",{
                headers:{
                    "content-type":"application/json",
                },
                method:"POST",
                body:JSON.stringify({email,password}),
            });
            const dataFromServer = await response.json();
            const {token} = dataFromServer.token;
            localStorage.setItem("token",token);
            loginParams.onSuccess && loginParams.onSuccess();
});

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser:(state,action:PayloadAction<User>)=>{
            state.user = action.payload;
        }
    }
});

const {setUser} = userSlice.actions;

export default userSlice.reducer; 