import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes(){
    const accessToken = localStorage.getItem('token');
    return accessToken ? <Outlet/> : <Navigate to="login"/>
}   