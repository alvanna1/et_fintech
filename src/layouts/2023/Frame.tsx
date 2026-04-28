import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import '@/i18n/'; // Import the i18n configuration

import Header from "./Header";
import Footer from "./Footer";

export const Layout2023 = () => {
    const year = '2023'; // Extract the year from the path
    const { i18n } = useTranslation(year);
    const [resourcesReady, setResourcesReady] = useState(false);
    //console.log(t)
    const loadYearResources = async () => {
        try {
            const en_module = await import(`@/i18n/${year}/en.json`);
            const en_resources = en_module.default ?? en_module;
            i18n.addResourceBundle('en', year, en_resources, true, true);
            const zh_module = await import(`@/i18n/${year}/zh.json`);
            const zh_resources = zh_module.default ?? zh_module;
            i18n.addResourceBundle('zh', year, zh_resources, true, true);
            i18n.changeLanguage(i18n.language); // Set the current language
            setResourcesReady(true);
        } catch (error) {
            console.error("Error loading translation resources:", error);
            setResourcesReady(true);
        }
    };
    useEffect(() => {
        import('@/assets/2023/css/style.css');
        import('@/assets/2023/js/controller.js');
        loadYearResources();
    }, []);
    return (
        
        <div className="container">
            <Header />
            <main>
                {resourcesReady ? <Outlet /> : null}
            </main>
            <Footer />
        </div>
    )
}
export default Layout2023