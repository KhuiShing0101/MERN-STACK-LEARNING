import { Box, TextField } from "@mui/material"
import { useEffect, useState } from "react";

interface NewMenu{
    name:string;
    price:number;
}

interface props{
    newMenu: NewMenu;
    setNewMenu:React.Dispatch<React.SetStateAction<NewMenu>>
}

const NewMenu = ({newMenu,setNewMenu}:props) => {
    return(
        <Box>
            <TextField placeholder="name" sx={{width:"100%", mb:2}} 
                onChange={(evt)=>setNewMenu({...newMenu,name:evt.target.value})}
            />
            <TextField placeholder="price"
                type="number"
                sx={{width:"100%"}}
                onChange={(evt)=>setNewMenu({...newMenu,price:Number(evt.target.value)})}
            />
        </Box>
    )
}

export default NewMenu;