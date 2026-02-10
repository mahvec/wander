import { createBrowserRouter, Navigate } from "react-router";

import HomePage from "@/domain/home";
import Layout from "@/domain";



const routes = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/home" />,
    },
    {
        path: "/home",
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
        ]
    }
])

export default routes;