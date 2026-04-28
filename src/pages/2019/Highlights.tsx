import { ImageDir } from "@/utils/2019/config";
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import Lightbox from "@/components/common/Lightbox";
import { Link } from "react-router-dom";
export const Highlights = () => {
    const { t } = useTranslation('2019');
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

    const onPhotoGridClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        const anchor = target.closest("a.colorBox") as HTMLAnchorElement | null;
        if (!anchor) return;
        e.preventDefault();
        e.stopPropagation();
        (e.nativeEvent as any).stopImmediatePropagation?.();
        const href = anchor.getAttribute("href") || "";
        const resolved = href.startsWith("/") || href.startsWith("http") ? href : `${ImageDir}${href}`;
        setLightboxSrc(resolved);
    };
    return (
        <section>
            <img className="preload" style={{ display: "none" }} src={ ImageDir+"images/splash-lightbox-loading.gif"}/>
            <div id="pagehighlightsPhoto" className="container body innerBody highlightsPhoto">
            <figure className="backgroundImage"> <img src={ ImageDir+"images/background_highlight.jpg"} alt=""/> </figure>
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
            <div className="col-md-11 grid highlights row" onClickCapture={onPhotoGridClickCapture}>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href={ImageDir+"images/highlights/high_res/FinTech_Awards_2019_1.jpg"}>
						<figure>
							<img src={ ImageDir+"images/highlights/thumbnail/FinTech_Awards_2019_1.jpg"} alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href={ImageDir+"images/highlights/high_res/FinTech_Awards_2019_2.jpg"}>
						<figure>
							<img src={ ImageDir+"images/highlights/thumbnail/FinTech_Awards_2019_2.jpg"} alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href={ImageDir+"images/highlights/high_res/FinTech_Awards_2019_3.jpg"}>
						<figure>
							<img src={ ImageDir+"images/highlights/thumbnail/FinTech_Awards_2019_3.jpg"} alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href={ImageDir+"images/highlights/high_res/FinTech_Awards_2019_4.jpg"}>
						<figure>
							<img src={ ImageDir+"images/highlights/thumbnail/FinTech_Awards_2019_4.jpg" }alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href={ImageDir+"images/highlights/high_res/FinTech_Awards_2019_5.jpg"}>
						<figure>
							<img src={ ImageDir+"images/highlights/thumbnail/FinTech_Awards_2019_5.jpg" }alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href="images/highlights/high_res/FinTech_Awards_2019_6.jpg">
						<figure>
							<img src={ ImageDir+"images/highlights/thumbnail/FinTech_Awards_2019_6.jpg"} alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href="images/highlights/high_res/FinTech_Awards_2019_7.jpg">
						<figure>
							<img src={ ImageDir+"images/highlights/thumbnail/FinTech_Awards_2019_7.jpg" }alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href="images/highlights/high_res/FinTech_Awards_2019_8.jpg">
						<figure>
							<img src={ ImageDir+"images/highlights/thumbnail/FinTech_Awards_2019_8.jpg"} alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href="images/highlights/high_res/FinTech_Awards_2019_9.jpg">
						<figure>
							<img src={ ImageDir+"images/highlights/thumbnail/FinTech_Awards_2019_9.jpg"} alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href="images/highlights/high_res/FinTech_Awards_2019_10.jpg">
						<figure>
							<img src={ ImageDir+"images/highlights/thumbnail/FinTech_Awards_2019_10.jpg" }alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href="images/highlights/high_res/FinTech_Awards_2019_11.jpg">
						<figure>
							<img src={ ImageDir+"images/highlights/thumbnail/FinTech_Awards_2019_11.jpg" }alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href="images/highlights/high_res/FinTech_Awards_2019_12.jpg">
						<figure>
							<img src={ ImageDir+"images/highlights/thumbnail/FinTech_Awards_2019_12.jpg"} alt=""/>
						</figure>
					</a>
				</div>
            </div>
            <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
        </div >
    </section >
    )
}
export default Highlights;