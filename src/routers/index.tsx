import React from 'react';
import { createBrowserRouter } from "react-router-dom";

//latest
import { Layout2024 } from "@/layouts/2024/Frame";
const Home2024 = React.lazy(() => import('@/pages/2024/Home'));
const Form2024 = React.lazy(() => import('@/pages/2024/Form'));

import { routes2023 } from "./2023";
import { routes2022 } from "./2022";
import { routes2021 } from "./2021";
import { routes2020 } from "./2020";
import { routes2019 } from "./2019";
import { routes2018 } from "./2018";
import { routes2017 } from "./2017";

export const router = createBrowserRouter([
    {
        path: "form",
        Component: Form2024
    },
    {
        path: "/",
        Component: Layout2024,
        children: [
            {
                index: true,
                Component: Home2024
            },
            {
                path: "zh/",
                Component: Home2024
            },

        ]
    },
    {
        path: "2024",
        Component: Layout2024,
        children: [
            {
                index: true,
                Component: Home2024
            },
            {
                path: "zh/",
                Component: Home2024
            },
        ]
    },
    ...routes2023,
    ...routes2022,
    ...routes2021,
    ...routes2020,
    ...routes2019,
    ...routes2018,
    ...routes2017
])
