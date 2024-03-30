import { Alert, Box, Button, CircularProgress, Dialog, DialogContent, DialogTitle, Snackbar, TextField } from "@mui/material"
import { NewMenu } from "../types/menu";
import { createMenu } from "../store/slices/menuSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { useState } from "react";
import { showSnackBar } from "../store/slices/appSnackbarSlice";


interface props{
    open: boolean,
    newMenu: NewMenu;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    setNewMenu:React.Dispatch<React.SetStateAction<NewMenu>>
}

export const NewMenuDialog=({open,newMenu,setOpen,setNewMenu}:props)=>{
    const dispatch = useAppDispatch();
    const {isLoading} = useAppSelector(state=>state.menu);

    const handleCreateMenu = async ()=>{
        const isAvaild = newMenu.name
        if(!isAvaild) return;
        dispatch(createMenu({
            ...newMenu,
            onSuccess:()=>{
                dispatch(showSnackBar({
                    type:"success",
                    message:"menu created successfully"
                }));
                setOpen(false);
            },
            onError:()=>{
                dispatch(showSnackBar({
                    type:"error",
                    message:"error occured"
                }))
            }
    }))
    }
    return (
        <Dialog open={open} onClose={()=>setOpen(false)}>
            <DialogTitle> New Menu</DialogTitle>
            <DialogContent sx={{width:300}}>
                <Box>
                    <TextField 
                        placeholder="name" 
                        sx={{width:"100%", mb:2}} 
                        onChange={(evt)=>setNewMenu({...newMenu,name:evt.target.value})}
                    />
                    <TextField placeholder="price"
                        type="number"
                        sx={{width:"100%"}}
                        onChange={(evt)=>setNewMenu({...newMenu,price:Number(evt.target.value)})}
                    />
                </Box>
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
    )
}