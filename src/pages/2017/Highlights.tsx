import { useEffect } from "react";
import { ImageDir } from "@/utils/2017/config";
import { useTranslation } from 'react-i18next';
export const Highlights = () => {
    const { t } = useTranslation('2017');
    useEffect(() => {
        const jq = (window as Window & { $?: any }).$;
        if (!jq || !jq.fn?.colorbox) return;
        jq(".colorBox").each(function (this: HTMLAnchorElement) {
            const href = this.getAttribute("href");
            if (href && href.startsWith("images/")) {
                this.setAttribute("href", `${ImageDir}${href}`);
            }
        });
        jq(".colorBox").colorbox({
            fixed: true,
            scalePhotos: true,
            opacity: 0.95,
            speed: 200,
            maxHeight: "80%",
            closeButton: false,
        });
    }, []);
    return (
        <section>
		<img className="preload"  style={{ display: 'none' }}src={ ImageDir +"images/splash-lightbox-loading.gif"}/>
		<div id="pagehighlightsPhoto" className="container body innerBody highlightsPhoto">
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
                <a className="colorBox" href="images/hightlights/preview/01.jpg"></a>
                <figure>
               <img src={ ImageDir+"images/hightlights/01.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/02.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/02.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/26.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/26.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/03.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/03.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/04.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/04.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/27.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/27.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/25.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/25.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/05.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/05.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/06.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/06.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/07.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/07.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/08.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/08.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/09.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/09.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/23.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/23.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/11.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/11.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/12.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/12.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/13.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/13.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/28.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/28.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/30.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/30.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/14.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/14.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/31.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/31.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/15.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/15.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/16.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/16.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/29.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/29.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/17.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/17.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/19.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/19.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/37.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/37.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/33.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/33.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/20.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/20.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/32.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/32.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/10.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/10.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/35.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/35.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/34.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/34.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/36.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/36.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/21.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/21.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/22.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/22.jpg" }alt=""/>
                </figure>
            </div>
            <div className="row item col-md-6 col-xs-12">
                <a className="colorBox" href="images/hightlights/preview/24.jpg"></a>
                <figure>
                    <img src={ ImageDir+"images/hightlights/24.jpg" }alt=""/>
                </figure>
            </div>
            </div>
        </div >
    </section >
    )
}
export default Highlights;