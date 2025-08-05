import { createBrowserRouter, RouterProvider } from "react-router";
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
import ResourceList from "../pages/ResourceList";
import ResourceAdd from "../pages/ResourceAdd";
import EditResource from "../pages/EditResource";
import MyReviews from "../pages/MyReviews";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/profile",
        Component: () => (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile/edit",
        Component: (
          <PrivateRoute>
            <ProfileEdit></ProfileEdit>
          </PrivateRoute>
        ),
      },
      {
        path: "/appdetails",
        Component: () => (
          <PrivateRoute>
            <AppDetails></AppDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/gardening-tips",
        Component: GardeningTips,
      },
      {
        path: "/resources",
        Component: Resources,
      },
      {
        path: "resource",
        Component: ResourceList,
      },
      {
        path: "resources/add",
        Component: ResourceAdd,
      },
      {
        path: "/edit/:id",
        Component: () => (
          <PrivateRoute>
            <EditResource></EditResource>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-reviews",
        Component: () => (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
