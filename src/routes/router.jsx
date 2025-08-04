import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import AppDetails from "../pages/AppDetails";
import PrivateRoute from "./PrivateRoute";
import GardeningTips from "../pages/GardeningTips";
import Resources from "../pages/Resources";
import ProfileEdit from "../pages/ProfileEdit";
const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
        {
            path:"/",
            Component:Home,
        },
        {
            path:"/login",
            Component:Login,
        },
        {
            path:"/register",
            Component:Register,
        },
        {
            path:"/profile",
            Component:() => (
                <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            ),
        },
        {
            path:"/profile/edit",
            Component:<PrivateRoute>
                <ProfileEdit></ProfileEdit>
            </PrivateRoute>,
        },
        {
            path:"/appdetails",
            Component:() => (
                <PrivateRoute>
                    <AppDetails></AppDetails>
                </PrivateRoute>
            ),
        },
        {
            path:"/gardening-tips",
            Component:GardeningTips,
        },
        {
            path:"/resources",
            Component:Resources,
        }
    ]
  },
]);
export default router;