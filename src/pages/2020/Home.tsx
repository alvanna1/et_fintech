import { useEffect } from "react";
import KeyVisual from "@/components/2020/KeyVisual";
import { useTranslation } from 'react-i18next';
export const Home = () => {
    const { t } = useTranslation('2020');
    useEffect(() => {
        // import('@/assets/2022/css/popupAlert.css');
        const loadScripts = async () => {
            try {
               // await import('@/assets/2020/js/gradient.js');
                //await import('@/assets/2020/js/particles.js');
                // Now you can use Bootstrap features that depend on jQuery
            } catch (error) {
                console.error("Error loading scripts:", error);
            }
        };

        loadScripts();
    }, []);
    return (
        <>
            <KeyVisual />
            <section id="particles" className="intro">
                <div className="container body">
                    <div id="video" className="video col-md-6" style={{ zIndex: 999 }}>
                        <iframe src="https://www.youtube.com/embed/5EJK3TC9lNc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <p>{t('home.highlights1')}</p>
                    </div>
                    <div className="video col-md-6" style={{ zIndex: 999 }}>
                        <iframe src="https://www.youtube.com/embed/5Cn2mj6WC0w"  frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowFullScreen ></iframe>
                        <p  style={{ marginBottom: 0 }}>
                        {t('home.highlights2')}</p>
                        <p>{t('home.highlights3')}</p>
                    </div>
                    <div className=" col-md-12">
                        <div className="col-md-12 leadin">
                            <p>
                                {t('home.p1')}
                            </p>
                            <p>
                                {t('home.p2')}
                            </p>
                            <ul>
                                <li>{t('home.p3_1')}</li>
                                <li>{t('home.p3_2')}</li>
                                <li>{t('home.p3_3')}</li>
                                <li>{t('home.p3_4')}</li>
                            </ul>
                            <p>{t('home.p4')}
                            </p>
                            <p>
                                {t('home.p5')}<span> {t('home.p6')}</span>
                                {t('home.p7')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;