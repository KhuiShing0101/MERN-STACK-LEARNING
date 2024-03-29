import { Box, Button, CircularProgress, Dialog, DialogContent, DialogTitle, TextField, Typography } from "@mui/material";
import Layout from "./Layout";
import { useState } from "react";
import NewMenu from "./NewMenu";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { createMenu } from "../store/slices/menuSlice";

const MenuPage = ()=>{
    const [open,setOpen] = useState(false);
    const [newMenu,setNewMenu] = useState<NewMenu>({name:"",price:0})
    const dispatch = useAppDispatch();
    const {isLoading} = useAppSelector(state=>state.menu);
    const handleCreateMenu = ()=>{
        const isAvaild = newMenu.name
        if(!isAvaild) return;
        dispatch(createMenu(newMenu))

    }
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
            </Box>
            <Dialog open={open} onClose={()=>setOpen(false)}>
                <DialogTitle> New Menu</DialogTitle>
                <DialogContent sx={{width:300}}>
                    <NewMenu newMenu={newMenu} setNewMenu={setNewMenu}/>
                </DialogContent>
                <DialogContent>
                    <Button onClick={()=>setOpen(false)} sx={{color :'#FE83C6'}}>cancel</Button>
                    <Button 
                        variant="contained"
                        sx={{width:'200',height:'38',bgcolor :'#FA4EAB',"&:hover":{bgcolor:"#FE83C6"}}}
                        onClick={handleCreateMenu}
                        >
                        { isLoading ? <CircularProgress size={20} /> : "Create" }
                    </Button>
                </DialogContent>
            </Dialog>
        </Layout>
    )
}

export default MenuPage;