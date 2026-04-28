import React from "react";

export const routes2021 = [
    {
        path: "2021", // ✅ No leading slash
        Component: React.lazy(() => import("@/layouts/2021/Frame")),
        children: [
            {
                index: true,
                Component: React.lazy(() => import("@/pages/2021/Home")),
            },
            {
                path: "awards", // ✅ No leading slash
                Component: React.lazy(() => import("@/pages/2021/Awards")),
            },
            {
                path: "judges",
                Component: React.lazy(() => import("@/pages/2021/Judges")),
            },
            {
                path: "sponsors",
                Component: React.lazy(() => import("@/pages/2021/Sponsors")),
            },
            {
                path: "winners",
                Component: React.lazy(() => import("@/pages/2021/Winners")),
            },
            {
                path: "exposures",
                Component: React.lazy(() => import("@/pages/2021/Exposures")),
            },
            {
                path: "exposuresArticles",
                Component: React.lazy(() => import("@/pages/2021/ExposuresArticles")),
            },
            {
                path: "highlights",
                Component: React.lazy(() => import("@/pages/2021/HighlightsVideo")),
            },
            {
                path: "HighlightsVideo",
                Component: React.lazy(() => import("@/pages/2021/HighlightsVideo")),
            },
            {
                path: "archive",
                Component: React.lazy(() => import("@/pages/2021/Archive")),
            },
            {
                path: "contact",
                Component: React.lazy(() => import("@/pages/2021/Contact")),
            },
            {
                path: "zh", // ✅ No leading slash
                children: [
                    {
                        index: true,
                        Component: React.lazy(() => import("@/pages/2021/Home")),
                    },
                    {
                        path: "awards",
                        Component: React.lazy(() => import("@/pages/2021/Awards")),
                    },
                    {
                        path: "judges",
                        Component: React.lazy(() => import("@/pages/2021/Judges")),
                    },
                    {
                        path: "sponsors",
                        Component: React.lazy(() => import("@/pages/2021/Sponsors")),
                    },
                    {
                        path: "winners",
                        Component: React.lazy(() => import("@/pages/2021/Winners")),
                    },
                    {
                        path: "exposures",
                        Component: React.lazy(() => import("@/pages/2021/Exposures")),
                    },
                    {
                        path: "exposuresArticles",
                        Component: React.lazy(() => import("@/pages/2021/ExposuresArticles")),
                    },
                    {
                        path: "highlights",
                        Component: React.lazy(() => import("@/pages/2021/HighlightsVideo")),
                    },
                    {
                        path: "HighlightsVideo",
                        Component: React.lazy(() => import("@/pages/2021/HighlightsVideo")),
                    },
                    {
                        path: "archive",
                        Component: React.lazy(() => import("@/pages/2021/Archive")),
                    },
                    {
                        path: "contact",
                        Component: React.lazy(() => import("@/pages/2021/Contact")),
                    },
                ],
            },
        ],
    },
];