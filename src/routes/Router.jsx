import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Reel from "../pages/Reel";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/:username',
                element: <Profile />,
            },
            {
                path: "reels",
                element: <Reel />
            }
        ],
    },
    {
        path: '*',
        element: <h4> Not Found Broh </h4>
    }
])

export default router;