import React from "react";

export const routes2022 = [
    {
        path: "2022/", // ✅ No leading slash
        Component: React.lazy(() => import("@/layouts/2022/Frame")),
        children: [
            {
                index: true,
                Component: React.lazy(() => import("@/pages/2022/Home")),
            },
            {
                path: "awards", // ✅ No leading slash
                Component: React.lazy(() => import("@/pages/2022/Awards")),
            },
            {
                path: "judges",
                Component: React.lazy(() => import("@/pages/2022/Judges")),
            },
            {
                path: "winners",
                Component: React.lazy(() => import("@/pages/2022/Winners")),
            },
            {
                path: "exposures",
                Component: React.lazy(() => import("@/pages/2022/Exposures")),
            },
            {
                path: "exposuresArticles",
                Component: React.lazy(() => import("@/pages/2022/ExposuresArticles")),
            },
            {
                path: "highlights",
                Component: React.lazy(() => import("@/pages/2022/Highlights")),
            },
            {
                path: "HighlightsVideo",
                Component: React.lazy(() => import("@/pages/2022/HighlightsVideo")),
            },
            {
                path: "archive",
                Component: React.lazy(() => import("@/pages/2022/Archive")),
            },
            {
                path: "contact",
                Component: React.lazy(() => import("@/pages/2022/Contact")),
            },
            {
                path: "zh", // ✅ No leading slash
                children: [
                    {
                        index: true,
                        Component: React.lazy(() => import("@/pages/2022/Home")),
                    },
                    {
                        path: "awards",
                        Component: React.lazy(() => import("@/pages/2022/Awards")),
                    },
                    {
                        path: "judges",
                        Component: React.lazy(() => import("@/pages/2022/Judges")),
                    },
                    {
                        path: "winners",
                        Component: React.lazy(() => import("@/pages/2022/Winners")),
                    },
                    {
                        path: "exposures",
                        Component: React.lazy(() => import("@/pages/2022/Exposures")),
                    },
                    {
                        path: "exposuresArticles",
                        Component: React.lazy(() => import("@/pages/2022/ExposuresArticles")),
                    },
                    {
                        path: "highlights",
                        Component: React.lazy(() => import("@/pages/2022/Highlights")),
                    },
                    {
                        path: "HighlightsVideo",
                        Component: React.lazy(() => import("@/pages/2022/HighlightsVideo")),
                    },
                    {
                        path: "archive",
                        Component: React.lazy(() => import("@/pages/2022/Archive")),
                    },
                    {
                        path: "contact",
                        Component: React.lazy(() => import("@/pages/2022/Contact")),
                    },
                ],
            },
        ],
    },
];