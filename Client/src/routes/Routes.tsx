import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components";
import Homescreen from "../pages/Landingpage/Homescreen";

export const Elements = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Homescreen />
            }
        ]
    }
])