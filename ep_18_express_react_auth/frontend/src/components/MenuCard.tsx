import { Typography,Button, responsiveFontSizes } from "@mui/material"
import { useEffect, useState } from "react";

interface Menu {
    name : string,
    price : number
}

const MenuCard = ()=>{
    const [menu,setMenu] = useState<Menu>()

    useEffect(()=>{
        console.log("use effect is running")
        getData()
    },[])

    const whenClick=(menu:string)=>{
        // setMenu(menu);
    }

    const getData = async ()=>{
        const response = await fetch("http://localhost:5000/get-data");
        const menu_from_server = await response.json();
        setMenu(menu_from_server);
    }

    console.log(menu,"ini rendering")
    if(!menu) return null;
    console.log(menu);
    return(
        <>
            <Typography variant="h1">
                {}
            </Typography>
            <Button variant="contained" onClick={() => whenClick("updated menu name")}>
                click child
            </Button>
        </>
    )
}

export default MenuCard;