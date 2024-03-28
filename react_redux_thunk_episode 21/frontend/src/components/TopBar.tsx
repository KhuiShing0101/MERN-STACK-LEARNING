import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

export default function TopBar() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("token")
  return (
    <AppBar position="static">
      <Toolbar sx={{bgcolor:'#323232'}}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Foodie POS
        </Typography>
        {accessToken && (<Button color="inherit" onClick={()=>{
          localStorage.removeItem("token")
          navigate("/login");
        }}>Logout
        </Button>
        )
        }
      </Toolbar>
    </AppBar>
  );
}