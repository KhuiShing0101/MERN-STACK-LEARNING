import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface NewUser {
    email:string;
    password:string;
}
const Register = ()=>{
    const [newUser,setNewUser] = useState<NewUser>({email:"",password:""})
    const navigate = useNavigate();
    const registerUser = async() =>{
        try{
            await fetch("http://localhost:5000/register",{
            headers:{
                "content-type":"application/json"
            },
            method:"POST",
            body:JSON.stringify(newUser)
        })
        navigate("/login")

        }catch(error){
            console.log(error);
        }
    };
    return (
        <Box sx={{mt:10, display:"flex", justifyContent:"center"}}>
            <Box sx={{mb:2,display:"flex", flexDirection:"column"}}>
                <TextField placeholder="email" sx={{mb:2}} 
                    onChange={(evt)=>setNewUser({...newUser,email:evt.target.value})}>
                </TextField>
                <TextField type="password" placeholder="password" sx={{mb:2}} 
                    onChange={(evt)=>setNewUser({...newUser,password:evt.target.value})}>
                </TextField>
                <Box sx={{mt:5,justifyContent:"center",display:"flex"}}>
                    <Button variant="contained" onClick={registerUser}>Register</Button>
                </Box>
            </Box>
        </Box>
    );
};
export default Register;