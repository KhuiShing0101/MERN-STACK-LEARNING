import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App"
import MenuPage from "./MenuPage"
import MenuCategoryPage from "./MenuCategoryPage"
import SettingPage from "./SettingPage"

const AppRouter =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/menu" element={<MenuPage/>}/>
                <Route path="/menu-category" element={<MenuCategoryPage/>}/>
                <Route path="/setting" element={<SettingPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;