import { Box } from "@mui/material"
import { ReactNode } from "react"

interface Props{
    children:ReactNode
}
const Layout = ({children}:Props)=>{
    return(
        <Box>
            {children}
        </Box>
    )
}
export default Layout;