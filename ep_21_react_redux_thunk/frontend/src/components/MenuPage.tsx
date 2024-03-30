import { Box, Button, CircularProgress, Dialog, DialogContent, DialogTitle, TextField, Typography } from "@mui/material";
import Layout from "./Layout";
import { useState } from "react";
import { NewMenu } from "../types/menu";
import { NewMenuDialog } from "./NewMenuDialog";

const MenuPage = ()=>{
    const [open,setOpen] = useState(false);
    const [newMenu,setNewMenu] = useState<NewMenu>({name:"",price:0})
    return( 
        <Layout>
            <Box>
                <Box sx={{ display:"flex", justifyContent:"end",my:5,mr:5}}>
                    <Button variant="contained" sx={{bgcolor :'#FA4EAB',"&:hover":{bgcolor:"#FE83C6"}}}
                        onClick={()=>setOpen(true)}
                    >
                        New Menu
                    </Button>
                </Box>
                <NewMenuDialog open={open} newMenu={newMenu} setOpen={setOpen} setNewMenu={setNewMenu}/>
            </Box>
        </Layout>
    )
}

export default MenuPage;