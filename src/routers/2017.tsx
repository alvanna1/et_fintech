import React from 'react';

export const routes2017 = [
    {
        path: "/2017",
        Component: React.lazy(() => import('@/layouts/2017/Frame')),
        children: [
            {
                index: true,
                Component: React.lazy(() => import("@/pages/2017/Home")),
            },
            {
                path: "awards", // ✅ No leading slash
                Component: React.lazy(() => import("@/pages/2017/Awards")),
            },
            {
                path: "judges",
                Component: React.lazy(() => import("@/pages/2017/Judges")),
            },
            {
                path: "winners",
                Component: React.lazy(() => import("@/pages/2017/Winners")),
            },
            {
                path: "sponsors",
                Component: React.lazy(() => import("@/pages/2017/sponsors")),
            },
            {
                path: "highlightsInterview",
                Component: React.lazy(() => import("@/pages/2017/highlightsInterview")),
            },
             {
                path: "HighlightsVideo",
                Component: React.lazy(() => import("@/pages/2017/HighlightsVideo")),
            },
            {
                path: "highlights",
                Component: React.lazy(() => import("@/pages/2017/Highlights")),
            },
            {
                path: "contact",
                Component: React.lazy(() => import("@/pages/2017/Contact")),
            },
            {
                path: "zh", // ✅ No leading slash
                children: [
                    {
                        index: true,
                        Component: React.lazy(() => import("@/pages/2017/Home")),
                    },
                    {
                        path: "awards",
                        Component: React.lazy(() => import("@/pages/2017/Awards")),
                    },
                    {
                        path: "judges",
                        Component: React.lazy(() => import("@/pages/2017/Judges")),
                    },
                    {
                        path: "winners",
                        Component: React.lazy(() => import("@/pages/2017/Winners")),
                    },
                    {
                        path: "sponsors",
                        Component: React.lazy(() => import("@/pages/2017/sponsors")),
                    },

                    {
                        path: "highlights",
                        Component: React.lazy(() => import("@/pages/2017/Highlights")),
                    },
                    {
                        path: "contact",
                        Component: React.lazy(() => import("@/pages/2017/Contact")),
                    },
                    {
                        path: "HighlightsVideo",
                        Component: React.lazy(() => import("@/pages/2017/HighlightsVideo")),
                    },
                    {
                        path: "highlightsInterview",
                        Component: React.lazy(() => import("@/pages/2017/highlightsInterview")),
                    },

                ],
            },
        ],
    }

]
