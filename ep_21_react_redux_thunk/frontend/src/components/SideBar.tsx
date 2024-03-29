import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import { Link } from "react-router-dom";
import { LocalDining, MenuBook } from "@mui/icons-material";
import SettingsIcon from '@mui/icons-material/Settings';

const sidebarItems =[
    {id:1, name: "Menu", to:"/menu",icon: <LocalDining/>},
    {id:2, name:"Menu Category", to:"/menu-category",icon:<MenuBook/>}
]
export function SideBar(){
    return(
        <Box sx={{height:"100vh",bgcolor:"#FA4EAB"}}> 
            <Box sx={{ width: 250 }} role="presentation">
                <List>
                    {sidebarItems.map((item,index) => (
                    <Link to={item.to} style={{textDecoration:"none"}} key={item.id}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon sx={{color:"#FFF2F9"}}>
                                {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.name} sx={{color:"#FFF2F9"}}/>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    ))}
                </List>
                <Divider />
                <List>
                    <Link to={"/setting"} style={{textDecoration:"none"}}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon sx={{ color:"#FFF2F9"}}>
                                    <SettingsIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"Settings"} sx={{color:"#FFF2F9"}}></ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
            </Box>
        </Box>
    )
}