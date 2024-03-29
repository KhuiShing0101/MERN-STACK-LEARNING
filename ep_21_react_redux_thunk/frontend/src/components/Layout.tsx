import Box from "@mui/material/Box";
import { ReactNode } from "react";
import TopBar from "./TopBar";
import { SideBar } from "./SideBar";


interface props{
    children ?: ReactNode
}
const accessToken = localStorage.getItem("token")
  const Layout = ({children}:props)=>{
  return(
    <Box>
      <TopBar/>
      <Box sx={{display:'flex',height:"100vh"}}>
        {accessToken && (<SideBar/>)}
          <Box sx={{width:'100%',p:2}}>
            {children}
          </Box>
      </Box>
    </Box>
  )
}

export default Layout;