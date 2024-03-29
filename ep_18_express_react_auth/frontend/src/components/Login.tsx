import { Box, Button, TextField, Typography } from "@mui/material"
import {NewUser} from "./Register"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginUser extends NewUser {}

const Login = ()=>{
    const navigate = useNavigate();
    const[loginUser,setLoginUser] = useState<LoginUser>({email:"",password:""})
    const loginUserFunc = async()=>{
        const response = await fetch("http://localhost:5000/login",{
            headers:{"content-type" : "application/json",},
            method:"POST",
            body: JSON.stringify(loginUser)
        });
        const dataFromServer = await response.json();
        const {token} = dataFromServer;
        localStorage.setItem("token",token);
        navigate("/")
    }
    return (
        <Box sx={{mt:10, display:"flex", justifyContent:"center"}}>
            <Box sx={{mb:2,display:"flex", flexDirection:"column"}}>
                <TextField placeholder="email" sx={{mb:2}}
                    onChange={(evt)=>setLoginUser({...loginUser,email:evt.target.value})}
                >
                </TextField>
                <TextField type="password" placeholder="password" sx={{mb:2}} 
                    onChange={(evt)=>setLoginUser({...loginUser,password:evt.target.value})}
                >
                </TextField>
                <Box sx={{mt:5,justifyContent:"center",display:"flex"}}>
                    <Button variant="contained" onClick={loginUserFunc}>Login</Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Login;