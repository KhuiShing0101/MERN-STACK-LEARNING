import { BrowserRouter,Routes,Route } from "react-router-dom"
import Register from "./Register"
import Login from "./Login"
import App from "../App"

const AppRouter = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}></Route>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;