import { Alert, Snackbar } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../store/hook";
import { hideSnackBar, showSnackBar } from "../store/slices/appSnackbarSlice";
import { useEffect } from "react";

const AppSnackbar = ()=>{
    const{type,open,message} = useAppSelector(state=>state.snackbar);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        setTimeout(()=>{
            dispatch(hideSnackBar())
        },2000);
        },[message]);

    return(
    <Snackbar
        anchorOrigin={{ vertical:"top", horizontal:"right" }}
        open={open}
        onClose={()=>{}}
        message="I love"
    >
        <Alert
            onClose={()=>dispatch(hideSnackBar())}
            severity={type}
            variant="filled"
            sx={{ width: '100%',bgcolor: type=== "error" ? "#78001C" : '#FA4EAB'}}
        >
            {message}
        </Alert>
    </Snackbar>
    )
    
}
export default AppSnackbar;