import React from "react";

export const routes2018 = [
    {
        path: "2018", // ✅ No leading slash
        Component: React.lazy(() => import("@/layouts/2018/Frame")),
        children: [
            {
                index: true,
                Component: React.lazy(() => import("@/pages/2018/Home")),
            },
            {
                path: "awards", // ✅ No leading slash
                Component: React.lazy(() => import("@/pages/2018/Awards")),
            },
            {
                path: "judges",
                Component: React.lazy(() => import("@/pages/2018/Judges")),
            },
            {
                path: "winners",
                Component: React.lazy(() => import("@/pages/2018/Winners")),
            },
            {
                path: "sponsors",
                Component: React.lazy(() => import("@/pages/2018/sponsors")),
            },
            {
                path: "highlights",
                Component: React.lazy(() => import("@/pages/2018/Highlights")),
            },
            {
                path: "HighlightsVideo",
                Component: React.lazy(() => import("@/pages/2018/HighlightsVideo")),
            },
            {
                path: "archive",
                Component: React.lazy(() => import("@/pages/2018/Archive")),
            },
            {
                path: "contact",
                Component: React.lazy(() => import("@/pages/2018/Contact")),
            },
            {
                path: "zh", // ✅ No leading slash
                children: [
                    {
                        index: true,
                        Component: React.lazy(() => import("@/pages/2018/Home")),
                    },
                    {
                        path: "awards",
                        Component: React.lazy(() => import("@/pages/2018/Awards")),
                    },
                    {
                        path: "judges",
                        Component: React.lazy(() => import("@/pages/2018/Judges")),
                    },
                    {
                        path: "winners",
                        Component: React.lazy(() => import("@/pages/2018/Winners")),
                    },
                    {
                        path: "sponsors",
                        Component: React.lazy(() => import("@/pages/2018/sponsors")),
                    },
                    {
                        path: "highlights",
                        Component: React.lazy(() => import("@/pages/2018/Highlights")),
                    },
                    {
                        path: "HighlightsVideo",
                        Component: React.lazy(() => import("@/pages/2018/HighlightsVideo")),
                    },
                    {
                        path: "archive",
                        Component: React.lazy(() => import("@/pages/2018/Archive")),
                    },
                    {
                        path: "contact",
                        Component: React.lazy(() => import("@/pages/2018/Contact")),
                    },
                ],
            },
        ],
    },
];