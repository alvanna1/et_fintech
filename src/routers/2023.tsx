import React from 'react';

//latest
import { Layout2023 } from "@/layouts/2023/Frame";
const Home2023 = React.lazy(() => import('@/pages/2023/Home'));

export const routes2023 = [
    {
        path: "/2023",
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
        ],
    },
];
