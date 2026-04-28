import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useTranslation } from 'react-i18next';
import '@/i18n/';
export const Layout2022 = () => {
    const year = '2022'; // Extract the year from the path
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
    const loadSVGInjectScript = async () => {
        await import(`@/assets/2022/js/svg-inject.min.js`)
        if(SVGInject){
            SVGInject.setOptions({
                onFail: function (img:any) {
                    // if injection fails show the img element
                    img.classList.remove('injectable');
                }
            });
            // inject all img elements with class name `injectable`
            SVGInject(document.querySelectorAll('img.injectable'));
        }
    };
    useEffect(() => {
        import(`@/assets/2022/css/modal.css`);
        import(`@/assets/2022/css/bootstrap.css`);
        import(`@/assets/2022/css/style.css`);
        import(`@/assets/2022/css/colorbox.css`);
        import(`@/assets/2022/css/newsAlertStyle.css`);
        import(`@/assets/2022/css/popupAlert.css`);
        import(`@/assets/2022/js/custom.js`);
        import(`@/assets/2022/js/gradient.js`);
        loadSVGInjectScript();
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
export default Layout2022