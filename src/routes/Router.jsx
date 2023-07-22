import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

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
            }
        ],
    },
    {
        path: '*',
        element: <h4> Not Found Broh </h4>
    }
])

export default router;