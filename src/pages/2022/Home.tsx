import { useEffect } from "react";
import KeyVisual from "@/components/2022/KeyVisual";
import { useTranslation } from 'react-i18next';
export const Home = () => {
    const { t } = useTranslation('2022');
     useEffect(() => {
        import('@/assets/2022/css/popupAlert.css');
        const loadScripts = async () => {
            try {
                await import('@/assets/2022/js/gradient.js');
                await import('@/assets/2022/js/particles.js');
                await import('@/assets/2022/js/home.js');
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
                <div className=" col-md-12">
                    <div className="col-md-12 leadin">
                        <div className="video_index_container">
                            <div className="video_index">
                                <iframe
                                    width={560}
                                    height={315}
                                    src="https://www.youtube.com/embed/xNqJNbOtNDU"
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                            <p>{t('home.highlights')}</p>
                        </div>
                        <p>
                        {t('home.p1')}
                        </p>
                        <p>
                        {t('home.p2')}
                        </p>
                        <p>
                        {t('home.p3')}
                        </p>
                        <p>
                        {t('home.p4')}
                        </p>
                        <p />
                    </div>
                </div>
            </div>
            <div className="content_circle1" />
            <div className="content_circle2" />
            <div className="content_circle3" />
            <div className="content_circle4" />
            <div className="content_circle5" />
        </section>
    </>
    )
}
export default Home;