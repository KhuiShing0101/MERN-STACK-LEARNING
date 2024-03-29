import Box from "@mui/material/Box";
import { ReactNode } from "react";
import TopBar from "./TopBar";
import { SideBar } from "./SideBar";


interface props{
    children ?: ReactNode
}

const Layout = ({children}:props)=>{
    return(<Box>
      <TopBar/>
      <Box sx={{display:'flex'}}>
        <SideBar/>
          <Box sx={{width:'100%'}}>
            {children}
          </Box>
      </Box>
    </Box>)
}

export default Layout;