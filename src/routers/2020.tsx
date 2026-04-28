import React from "react";

export const routes2020 = [
    {
        path: "2020", // ✅ No leading slash
        Component: React.lazy(() => import("@/layouts/2020/Frame")),
        children: [
            {
                index: true,
                Component: React.lazy(() => import("@/pages/2020/Home")),
            },
            {
                path: "awards", // ✅ No leading slash
                Component: React.lazy(() => import("@/pages/2020/Awards")),
            },
            {
                path: "judges",
                Component: React.lazy(() => import("@/pages/2020/Judges")),
            },
            {
                path: "winners",
                Component: React.lazy(() => import("@/pages/2020/Winners")),
            },
            {
                path: "exposures",
                Component: React.lazy(() => import("@/pages/2020/Exposures")),
            },
            {
                path: "exposuresArticles",
                Component: React.lazy(() => import("@/pages/2020/ExposuresArticles")),
            },
            {
                path: "highlights",
                Component: React.lazy(() => import("@/pages/2020/Highlights")),
            },
            {
                path: "HighlightsVideo",
                Component: React.lazy(() => import("@/pages/2020/HighlightsVideo")),
            },
            {
                path: "archive",
                Component: React.lazy(() => import("@/pages/2020/Archive")),
            },
            {
                path: "zh", // ✅ No leading slash
                children: [
                    {
                        index: true,
                        Component: React.lazy(() => import("@/pages/2020/Home")),
                    },
                    {
                        path: "awards",
                        Component: React.lazy(() => import("@/pages/2020/Awards")),
                    },
                    {
                        path: "judges",
                        Component: React.lazy(() => import("@/pages/2020/Judges")),
                    },
                    {
                        path: "winners",
                        Component: React.lazy(() => import("@/pages/2020/Winners")),
                    },
                    {
                        path: "exposures",
                        Component: React.lazy(() => import("@/pages/2020/Exposures")),
                    },
                    {
                        path: "exposuresArticles",
                        Component: React.lazy(() => import("@/pages/2020/ExposuresArticles")),
                    },
                    {
                        path: "highlights",
                        Component: React.lazy(() => import("@/pages/2020/Highlights")),
                    },
                    {
                        path: "HighlightsVideo",
                        Component: React.lazy(() => import("@/pages/2020/HighlightsVideo")),
                    },
                    {
                        path: "archive",
                        Component: React.lazy(() => import("@/pages/2020/Archive")),
                    },
                ],
            },
        ],
    },
];