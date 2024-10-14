import { createBrowserRouter } from "react-router-dom"
import Root from "../Root/Root"
import Home from "../Pages/Home/Home"
import About from "../Pages/About/About"
import Career from "../Pages/Career/Career"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"

const Router =createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
            {
                path:'/',
                element: <Home/> 
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/career',
                element:<Career/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
        ]
    }
])

export default Router