import React from "react";

export const routes2019 = [
    {
        path: "2019", // ✅ No leading slash
        Component: React.lazy(() => import("@/layouts/2019/Frame")),
        children: [
            {
                index: true,
                Component: React.lazy(() => import("@/pages/2019/Home")),
            },
            {
                path: "awards", // ✅ No leading slash
                Component: React.lazy(() => import("@/pages/2019/Awards")),
            },
            {
                path: "judges",
                Component: React.lazy(() => import("@/pages/2019/Judges")),
            },
            {
                path: "winners",
                Component: React.lazy(() => import("@/pages/2019/Winners")),
            },
            {
                path: "sponsors",
                Component: React.lazy(() => import("@/pages/2019/sponsors")),
            },
            {
                path: "exposures",
                Component: React.lazy(() => import("@/pages/2019/Exposures")),
            },
            {
                path: "exposuresArticles",
                Component: React.lazy(() => import("@/pages/2019/ExposuresArticles")),
            },
            {
                path: "highlights",
                Component: React.lazy(() => import("@/pages/2019/Highlights")),
            },
            {
                path: "HighlightsVideo",
                Component: React.lazy(() => import("@/pages/2019/HighlightsVideo")),
            },
            {
                path: "archive",
                Component: React.lazy(() => import("@/pages/2019/Archive")),
            },
            {
                path: "zh", // ✅ No leading slash
                children: [
                    {
                        index: true,
                        Component: React.lazy(() => import("@/pages/2019/Home")),
                    },
                    {
                        path: "awards",
                        Component: React.lazy(() => import("@/pages/2019/Awards")),
                    },
                    {
                        path: "judges",
                        Component: React.lazy(() => import("@/pages/2019/Judges")),
                    },
                    {
                        path: "winners",
                        Component: React.lazy(() => import("@/pages/2019/Winners")),
                    },
                    {
                        path: "sponsors",
                        Component: React.lazy(() => import("@/pages/2019/sponsors")),
                    },
                    {
                        path: "exposures",
                        Component: React.lazy(() => import("@/pages/2019/Exposures")),
                    },
                    {
                        path: "exposuresArticles",
                        Component: React.lazy(() => import("@/pages/2019/ExposuresArticles")),
                    },
                    {
                        path: "highlights",
                        Component: React.lazy(() => import("@/pages/2019/Highlights")),
                    },
                    {
                        path: "HighlightsVideo",
                        Component: React.lazy(() => import("@/pages/2019/HighlightsVideo")),
                    },
                    {
                        path: "archive",
                        Component: React.lazy(() => import("@/pages/2019/Archive")),
                    },
                ],
            },
        ],
    },
];