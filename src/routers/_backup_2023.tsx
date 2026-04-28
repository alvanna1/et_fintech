import React from 'react';
import { createBrowserRouter } from "react-router-dom";

//latest
import { Layout2023 } from "@/layouts/2023/Frame";
const Home2023 = React.lazy(() => import('@/pages/2023/Home'));
const Form2024 = React.lazy(() => import('@/pages/2024/Form'));

import { routes2022 } from "./_backup_2022";
import { routes2017 } from "./2017";

export const router = createBrowserRouter([
    {
        path: "form",
        Component: Form2024
    },
    {
        path: "/",
        Component: Layout2023,
        children: [
            {
                index: true,
                Component: Home2023
            },
            {
                path: "zh/",
                Component: Home2023
            },

        ]
    },
    ...routes2022,
    ...routes2017
])
