import { ImageDir } from "@/utils/2019/config";
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import Lightbox from "@/components/common/Lightbox";
import { Link } from "react-router-dom";
export const HighlightsVideo = () => {
    const { t } = useTranslation('2019');
    const videos = t('highlights_array.highlights_video', { returnObjects: true });
    const [videoSrc, setVideoSrc] = useState<string | null>(null);

    if (!Array.isArray(videos)) {
        console.error("Expected '' to be an array, but got:", videos);
        return null; // Prevent rendering if data is incorrect
    }
    return (
        <section>
            <img className="preload" style={{ display: "none" }} src="images/splash-lightbox-loading.gif" />
            <div id="pagehighlightsVideo" className="container body innerBody highlightsPhoto">
                <figure className="backgroundImage"> <img src={ ImageDir +"images/background_highlight.jpg"} alt="" /> </figure>
                <aside className="innerPage">
                    <div>
                    <h1>{t('highlights_array.title')}</h1>
                    <ul>
                        <li><a href="highlights">{t('highlights_array.tab1')}</a> </li>
                        <li><a href="highlightsVideo">{t('highlights_array.tab2')}</a> </li>
                        <li><Link to="../exposures" relative="path">{t('exposures_array.tab1')}</Link>
						</li>
                    </ul>
                    </div>
                </aside>
                <div className="col-md-11 grid highlights row">
                    {videos.map((item, index) => (
                        <div key={index} className="item col-md-6 col-xs-12">
                            <a
                                className="colorBoxVideo"
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    (e.nativeEvent as any).stopImmediatePropagation?.();
                                    setVideoSrc(`https://www.youtube.com/embed/${item.id}?autoplay=1`);
                                }}
                            >
                                <figure> <img src={`https://img.youtube.com/vi/${item.id}/maxresdefault.jpg`} alt="" /> </figure>
                                <h3>{item.title}</h3>
                            </a>
                        </div>
                    ))}
                </div >
                <Lightbox src={videoSrc} isVideo title="highlight video" onClose={() => setVideoSrc(null)} />
            </div >
        </section >
    )
}
export default HighlightsVideo;