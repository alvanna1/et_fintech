import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useTranslation } from 'react-i18next';
import '@/i18n/';
import '@/assets/2019/css/modal.css';
import '@/assets/2019/css/bootstrap.css';
import '@/assets/2019/css/style.css';
import '@/assets/2019/css/colorbox.css';
import '@/assets/2019/css/newsAlertStyle.css';
export const Layout2019 = () => {
    const year = '2019'; // Extract the year from the path
    const { i18n } = useTranslation(year);
    const [resourcesReady, setResourcesReady] = useState(false);
    //console.log(t)
    const loadYearResources = async () => {
        try {
            const en_resources = await import(`@/i18n/${year}/en.json`);
            i18n.addResourceBundle('en', year, en_resources, true, true);
            const zh_resources = await import(`@/i18n/${year}/zh.json`);
            i18n.addResourceBundle('zh', year, zh_resources, true, true);
            i18n.changeLanguage(i18n.language); // Set the current language
            setResourcesReady(true);
        } catch (error) {
            console.error("Error loading translation resources:", error);
            setResourcesReady(true);
        }
    };

    useEffect(() => {
        loadYearResources();
    }, []);
    return (
        <div>
            <main>
                <Header />
                {resourcesReady ? <Outlet /> : null}
                <Footer />
            </main>
        </div>
    )
}
export default Layout2019