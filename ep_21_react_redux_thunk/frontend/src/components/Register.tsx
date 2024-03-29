import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import { useAppDispatch } from "../store/hook";
import { registerUser } from "../store/slices/userSlice";

export interface NewUser {
    email:string;
    password:string;
}
const Register = ()=>{
    const [newUser,setNewUser] = useState<NewUser>({email:"",password:""})
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    
    return (
        <Layout>
            <Box sx={{mt:10, display:"flex", justifyContent:"center"}}>
                <Box sx={{mb:2,display:"flex", flexDirection:"column"}}>
                    <TextField placeholder="email" sx={{mb:2}} 
                        onChange={(evt)=>setNewUser({...newUser,email:evt.target.value})}>
                    </TextField>
                    <TextField type="password" placeholder="password" sx={{mb:2}} 
                        onChange={(evt)=>setNewUser({...newUser,password:evt.target.value})}>
                    </TextField>
                    <Box sx={{mt:5,justifyContent:"center",display:"flex"}}>
                        <Button
                            disabled={!newUser.email || !newUser.password}
                            variant="contained" 
                            sx={{width:"fit-content"}}
                            onClick={() => dispatch(
                                registerUser(
                                  {...newUser,
                                    onSuccess:()=>{
                                    navigate("/login");
                                    }
                                }))
                            }
                        >
                            Register
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Layout>
    );
};
export default Register;