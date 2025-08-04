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
            Component:Profile,
        },
        {
            path:"/appdetails",
            Component:AppDetails,
        },
    ]
  },
]);
export default router;