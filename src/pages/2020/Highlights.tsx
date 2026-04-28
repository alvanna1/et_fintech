import { ImageDir } from "@/utils/2020/config";
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import Lightbox from "@/components/common/Lightbox";
export const Highlights = () => {
    const { t } = useTranslation('2020');
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

    const openFromHref = (href: string) => {
        const resolved = href.startsWith("/") ? href : `${ImageDir}${href}`;
        setLightboxSrc(resolved);
    };
    return (
        <section>
            <img className="preload" style={{ display: "none" }} src={ ImageDir +"images/splash-lightbox-loading.gif"}/>
            <div id="pagehighlightsPhoto" className="container body innerBody highlightsPhoto">
            <figure className="backgroundImage"> <img src={ ImageDir +"images/background_highlight.jpg" }alt=""/> </figure>
            <aside className="innerPage">
                <div>
                    <h1>{t('highlights_array.title')}</h1>
                    <ul>
                        <li><a href="highlights">{t('highlights_array.tab1')}</a> </li>
                        <li><a href="highlightsVideo">{t('highlights_array.tab2')}</a> </li>
                    </ul>
                </div>
            </aside>
            <div className="col-md-11 grid highlights row">
                <div className="item col-md-6 col-xs-12"> <a className="colorBox" href="images/highlights/high_res/1_0114_Snap-3.jpg" onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    (e.nativeEvent as any).stopImmediatePropagation?.();
                    openFromHref("images/highlights/high_res/1_0114_Snap-3.jpg");
                }}>
                    <figure> <img src={ ImageDir +"images/highlights/thumbnail/1_0114_Snap-3.jpg" }alt=""/> </figure>
                    </a> </div>
                <div className="item col-md-6 col-xs-12"> <a className="colorBox" href="images/highlights/high_res/2_0114_STD-156.jpg" onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    (e.nativeEvent as any).stopImmediatePropagation?.();
                    openFromHref("images/highlights/high_res/2_0114_STD-156.jpg");
                }}>
                    <figure> <img src={ ImageDir +"images/highlights/thumbnail/2_0114_STD-156.jpg"} alt=""/> </figure>
                    </a> </div>
                <div className="item col-md-6 col-xs-12"> <a className="colorBox" href="images/highlights/high_res/3_0114_Snap-152.jpg" onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    (e.nativeEvent as any).stopImmediatePropagation?.();
                    openFromHref("images/highlights/high_res/3_0114_Snap-152.jpg");
                }}>
                    <figure> <img src={ ImageDir +"images/highlights/thumbnail/3_0114_Snap-152.jpg"} alt=""/> </figure>
                    </a> </div>
                <div className="item col-md-6 col-xs-12"> <a className="colorBox" href="images/highlights/high_res/4_0114_Snap-161.jpg" onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    (e.nativeEvent as any).stopImmediatePropagation?.();
                    openFromHref("images/highlights/high_res/4_0114_Snap-161.jpg");
                }}>
                    <figure> <img src={ ImageDir +"images/highlights/thumbnail/4_0114_Snap-161.jpg"} alt=""/> </figure>
                    </a> </div>
                <div className="item col-md-6 col-xs-12"> <a className="colorBox" href="images/highlights/high_res/5_0114_STD-125.jpg" onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    (e.nativeEvent as any).stopImmediatePropagation?.();
                    openFromHref("images/highlights/high_res/5_0114_STD-125.jpg");
                }}>
                    <figure> <img src={ ImageDir +"images/highlights/thumbnail/5_0114_STD-125.jpg" }alt=""/> </figure>
                    </a> </div>
                <div className="item col-md-6 col-xs-12"> <a className="colorBox" href="images/highlights/high_res/6_5F7A9916.jpg" onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    (e.nativeEvent as any).stopImmediatePropagation?.();
                    openFromHref("images/highlights/high_res/6_5F7A9916.jpg");
                }}>
                    <figure> <img src={ ImageDir +"images/highlights/thumbnail/6_5F7A9916.jpg" }alt=""/> </figure>
                    </a> </div>
                <div className="item col-md-6 col-xs-12"> <a className="colorBox" href="images/highlights/high_res/7_0114_Snap-40.jpg" onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    (e.nativeEvent as any).stopImmediatePropagation?.();
                    openFromHref("images/highlights/high_res/7_0114_Snap-40.jpg");
                }}>
                    <figure> <img src={ ImageDir +"images/highlights/thumbnail/7_0114_Snap-40.jpg" }alt=""/> </figure>
                    </a> </div>
                <div className="item col-md-6 col-xs-12"> <a className="colorBox" href="images/highlights/high_res/8_0114_Snap-15.jpg" onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    (e.nativeEvent as any).stopImmediatePropagation?.();
                    openFromHref("images/highlights/high_res/8_0114_Snap-15.jpg");
                }}>
                    <figure> <img src={ ImageDir +"images/highlights/thumbnail/8_0114_Snap-15.jpg" }alt=""/> </figure>
                    </a> </div>
            </div>
            <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
        </div >
    </section >
    )
}
export default Highlights;