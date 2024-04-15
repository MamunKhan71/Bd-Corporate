import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import ContactUs from "../pages/ContactUs";
import PropertyList from "../pages/PropertyList";
import About from "../pages/About";
import Profile from "../pages/Profile";
import PropertyDetails from "../pages/PropertyDetails";
import ProtectedRoutes from "./ProtectedRoutes";
import Bookmarks from "../pages/Bookmarks";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/contact',
                element: <ContactUs/>
            },
            {
                path: '/properties',
                element: <PropertyList/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/profile',
                element: <ProtectedRoutes><Profile/></ProtectedRoutes>
            },
            {
                path: '/properties/:id',
                element: <ProtectedRoutes><PropertyDetails/></ProtectedRoutes>,
            },
            {
                path: '/bookmarks',
                element: <ProtectedRoutes><Bookmarks/></ProtectedRoutes>,

            }
        ]
    },
]);

export default router;