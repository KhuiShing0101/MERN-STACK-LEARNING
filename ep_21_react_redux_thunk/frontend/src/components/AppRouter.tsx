import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App"
import MenuPage from "./MenuPage"
import MenuCategoryPage from "./MenuCategoryPage"
import SettingPage from "./SettingPage"
import Login from "./Login"
import Register from "./Register"
import PrivateRoutes from "./PrivateRoute"

const AppRouter =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoutes/>}>
                    <Route path="/" element={<App/>}/>
                    <Route path="/menu" element={<MenuPage/>}/>
                    <Route path="/menu-category" element={<MenuCategoryPage/>}/>
                    <Route path="/setting" element={<SettingPage/>}/>
                </Route>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;