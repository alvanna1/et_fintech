import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useTranslation } from 'react-i18next';
import '@/i18n/';
export const Layout2021 = () => {
    const year = '2021'; // Extract the year from the path
    const { i18n } = useTranslation(year);
    //console.log(t)
    const loadYearResources = async () => {
        try {
            const en_resources = await import(`@/i18n/${year}/en.json`);
            i18n.addResourceBundle('en', year, en_resources, true, true);
            const zh_resources = await import(`@/i18n/${year}/zh.json`);
            i18n.addResourceBundle('zh', year, zh_resources, true, true);
            i18n.changeLanguage(i18n.language); // Set the current language
        } catch (error) {
            console.error("Error loading translation resources:", error);
        }
    };

    useEffect(() => {
        import(`@/assets/2021/css/modal.css`);
        import(`@/assets/2021/css/bootstrap.css`);
        import(`@/assets/2021/css/style.css`);
        import(`@/assets/2021/css/colorbox.css`);
        //import(`@/assets/2021/css/newsAlertStyle.css`);
       // import(`@/assets/2021/css/popupAlert.css`);
       // import(`@/assets/2021/js/custom.js`);
        //import(`@/assets/2021/js/gradient.js`);
        loadYearResources();
    }, []);
    return (
        <div>
            <main>
                <Header />
                <Outlet />
                <Footer />
            </main>
        </div>
    )
}
export default Layout2021