import { createBrowserRouter } from "react-router-dom"
import Root from "../Root/Root"
import Home from "../Pages/Home/Home"
import About from "../Pages/About/About"
import Career from "../Pages/Career/Career"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import NewsDetails from "../Pages/NewsDetails/NewsDetails"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/news.json')
            },
            {
                path: '/newsDetails/:id',
                element: <PrivateRoute>
                    <NewsDetails />,
                </PrivateRoute>,
                loader: () => fetch('/news.json')
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/career',
                element: <Career />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    }
])

export default Router