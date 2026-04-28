import { ImageDir } from "@/utils/2022/config";
import { useState } from "react";
import Lightbox from "@/components/common/Lightbox";
import { useTranslation } from 'react-i18next';
export const Highlights = () => {
    const { t } = useTranslation('2022');
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

    const onGridClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        const anchor = target.closest("a.colorBox") as HTMLAnchorElement | null;
        if (!anchor) return;
        e.preventDefault();
        const href = anchor.getAttribute("href") || "";
        const resolved = href.startsWith("/")
            ? href
            : href.startsWith("images/")
                ? ImageDir + href
                : href;
        setLightboxSrc(resolved);
    };
    return (
        <section>
            <img className="preload" style={{ display: "none" }} src="images/splash-lightbox-loading.gif"/>
            <div id="pagehighlightsPhoto" className="container body innerBody highlightsPhoto">
            <figure className="backgroundImage"> <img src="images/background_highlight.jpg" alt=""/> </figure>
            <aside className="innerPage">
                <div>
                    <h1>{t('highlights_array.title')}</h1>
                    <ul>
                        <li><a href="highlights">{t('highlights_array.tab1')}</a> </li>
                        <li><a href="highlightsVideo">{t('highlights_array.tab2')}</a> </li>
                    </ul>
                </div>
            </aside>
            <div className="col-md-11 grid highlights row" onClick={onGridClick}>
                <div className="item col-md-6 col-xs-12"> <a className="colorBox" href="images/highlights/high_res/01.jpg">
                    <figure> <img src={ImageDir +"images/highlights/thumbnail/thumbnail_01.jpg"}  alt=""/> </figure>
                    </a> </div>
                <div className="item col-md-6 col-xs-12"> <a className="colorBox" href="images/highlights/high_res/02.jpg">
                    <figure> <img src={ImageDir +"images/highlights/thumbnail/thumbnail_02.jpg" } alt=""/> </figure>
                    </a> </div>
                <div className="item col-md-6 col-xs-12"> <a className="colorBox" href="images/highlights/high_res/03.jpg">
                    <figure> <img src={ImageDir +"images/highlights/thumbnail/thumbnail_03.jpg" } alt=""/> </figure>
                    </a> </div>
                <div className="item col-md-6 col-xs-12"> <a className="colorBox" href="images/highlights/high_res/04.jpg">
                    <figure> <img src={ImageDir +"images/highlights/thumbnail/thumbnail_04.jpg" } alt=""/> </figure>
                    </a> </div>
                <div className="item col-md-6 col-xs-12"> <a className="colorBox" href="images/highlights/high_res/05.jpg">
                    <figure> <img src={ImageDir +"images/highlights/thumbnail/thumbnail_05.jpg" } alt=""/> </figure>
                    </a> </div>
                <div className="item col-md-6 col-xs-12"> <a className="colorBox" href="images/highlights/high_res/06.jpg">
                    <figure> <img src={ImageDir +"images/highlights/thumbnail/thumbnail_06.jpg"}  alt=""/> </figure>
                    </a> </div>
                <div className="item col-md-6 col-xs-12"> <a className="colorBox" href="images/highlights/high_res/07.jpg">
                    <figure> <img src={ImageDir +"images/highlights/thumbnail/thumbnail_07.jpg"}  alt=""/> </figure>
                    </a> </div>
                <div className="item col-md-6 col-xs-12"> <a className="colorBox" href="images/highlights/high_res/08.jpg">
                    <figure> <img src={ImageDir +"images/highlights/thumbnail/thumbnail_08.jpg"} alt=""/> </figure>
                    </a> </div>
            </div>
            <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
        </div >
    </section >
    )
}
export default Highlights;