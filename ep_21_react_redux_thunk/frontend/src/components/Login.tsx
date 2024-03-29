import { Box, Button, TextField, Typography } from "@mui/material"
import {NewUser} from "./Register"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import { useAppDispatch } from "../store/hook";
import { loginUser } from "../store/slices/userSlice";

interface User extends NewUser {}

const Login = ()=>{
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const[user,setUser] = useState<User>({email:"",password:""})

    return (
        <Layout>
            <Box sx={{mt:10, display:"flex", justifyContent:"center"}}>
                <Box sx={{mb:2,display:"flex", flexDirection:"column"}}>
                    <TextField placeholder="email" sx={{mb:2}}
                        onChange={(evt)=>setUser({...user,email:evt.target.value})}
                    >
                    </TextField>
                    <TextField type="password" placeholder="password" sx={{mb:2}} 
                        onChange={(evt)=>setUser({...user,password:evt.target.value})}
                    >
                    </TextField>
                    <Box sx={{mt:5,justifyContent:"center",display:"flex"}}>
                        <Button 
                            disabled={!user.email || !user.password}
                            variant="contained"
                            sx={{bgcolor :'#FA4EAB',"&:hover":{bgcolor:"#FE83C6"}}}
                            onClick={()=>{
                                dispatch(
                                    loginUser({
                                        ...user,
                                        onSuccess: ()=>{
                                            navigate("/");
                                        }
                                    })
                                )
                            }}>
                            Login
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Layout>
    );
}

export default Login;