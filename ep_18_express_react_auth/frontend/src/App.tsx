import { Box, Typography,Button } from "@mui/material";
import { useState } from "react";
import MenuCard from "./components/MenuCard";
import Layout from "./components/Layout";
import { Navigate, useNavigate } from "react-router-dom";

const App =()=>{
  const isLoginUser = localStorage.getItem("token")
  const navigate = useNavigate();
  if(!isLoginUser) return <Navigate to={'/login'}/>
  return (
    <Layout>
      <h1>Home Page</h1>
      <Button variant="contained" 
        onClick={()=>{
          localStorage.removeItem("token")
          navigate("/")
        }}
        >
          logout
      </Button>
    </Layout>
  );
}

export default App;