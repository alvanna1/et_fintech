import { useEffect } from "react";
import { ImageDir } from "@/utils/2017/config";
import { useTranslation } from 'react-i18next';
export const HighlightsVideo = () => {
    const { t, i18n } = useTranslation('2017');
    const videos = t('highlights_array.highlights_video', { returnObjects: true });
    useEffect(() => {
        const jq = (window as Window & { $?: any }).$;
        if (!jq || !jq.fn?.colorbox) return;
        const lang = i18n.language.startsWith("zh") ? "zh" : "en";
        jq(".colorBoxVideo").colorbox({
            iframe: true,
            fixed: true,
            width: 1000,
            height: 563,
            opacity: 0.95,
            speed: 200,
            closeButton: false,
            href: function (this: HTMLAnchorElement) {
                const videoId = /[?&]v=([^&#]*)/.exec(this.href);
                if (videoId && videoId[1]) {
                    return `https://youtube.com/embed/${videoId[1]}?disablekb=1&hl=${lang}&fs=0&rel=0&autoplay=1`;
                }
                return this.href;
            },
        });
    }, [i18n.language]);

    if (!Array.isArray(videos)) {
        console.error("Expected '' to be an array, but got:", videos);
        return null; // Prevent rendering if data is incorrect
    }
    return (
        <section>
            	<img className="preload"  style={{ display: 'none' }}src={ ImageDir +"images/splash-lightbox-loading.gif"}/>
		        <div id="pagehighlightsVideo" className="container body innerBody highlightsVideo">
                <figure className="backgroundImage"> <img src={ ImageDir +"images/background_highlight.jpg"} alt="" /> </figure>
                <aside className="innerPage col-md-3">
                    <div>
                    <h1>{t('highlights_array.title')}</h1>
                    <ul>
                    <li><a href="highlights">{t('highlights_array.tab1')}</a> </li>
                        <li><a href="highlightsVideo">{t('highlights_array.tab2')}</a> </li>
                        <li><a href="highlightsInterview">{t('highlights_array.tab3')}</a></li>
						<li><a target="_blank" href="/2017/download/NewspaperAd.pdf">{t('exposures_array.title')}</a>
						</li>
                    </ul>
                    </div>
                </aside>
                <div className="col-md-9 grid highlights">
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBoxVideo" target="_blank" href="https://www.youtube.com/watch?v=BNa-gguPtXM"></a>
                <figure>
               <img src="https://img.youtube.com/vi/BNa-gguPtXM/maxresdefault.jpg" alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBoxVideo" target="_blank" href="https://www.youtube.com/watch?v=qR5962OItgY"></a>
                <figure>
                    <img src="https://img.youtube.com/vi/qR5962OItgY/maxresdefault.jpg" alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBoxVideo" target="_blank" href="https://www.youtube.com/watch?v=sqHnAIzEmvc"></a>
                <figure>
                    <img src="https://img.youtube.com/vi/sqHnAIzEmvc/maxresdefault.jpg" alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBoxVideo" target="_blank" href="https://www.youtube.com/watch?v=oyBYvB5x-f0"></a>
                <figure>
                    <img src="https://img.youtube.com/vi/oyBYvB5x-f0/maxresdefault.jpg" alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBoxVideo" target="_blank" href="https://www.youtube.com/watch?v=aNj6-isiC2M"></a>
                <figure>
                    <img src="https://img.youtube.com/vi/aNj6-isiC2M/maxresdefault.jpg" alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBoxVideo" target="_blank" href="https://www.youtube.com/watch?v=z1dN1ITus_A"></a>
                <figure>
                    <img src="https://img.youtube.com/vi/z1dN1ITus_A/maxresdefault.jpg" alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBoxVideo" target="_blank" href="https://www.youtube.com/watch?v=ffQjGQchIe4"></a>
                <figure>
                    <img src="https://img.youtube.com/vi/ffQjGQchIe4/maxresdefault.jpg" alt=""/>
                </figure>
            </div>
        </div>
    </div>
        </section >
    )
}
export default HighlightsVideo;