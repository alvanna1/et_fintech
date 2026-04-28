import { ImageDir } from "@/utils/2018/config";
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import Lightbox from "@/components/common/Lightbox";
export const Highlights = () => {
    const { t } = useTranslation('2018');
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

    const onPhotoGridClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        const anchor = target.closest("a.colorBox") as HTMLAnchorElement | null;
        if (!anchor) return;
        e.preventDefault();
        e.stopPropagation();
        (e.nativeEvent as any).stopImmediatePropagation?.();
        const href = anchor.getAttribute("href") || "";
        setLightboxSrc(href);
    };

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
						<li><a target="_blank" href="/2018/downloads/NewspaperAd.pdf">{t('exposures_array.title')}</a>
						</li>
                    </ul>
                </div>
            </aside>
			<div className="col-md-9 grid highlights row" onClickCapture={onPhotoGridClickCapture}>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href={ ImageDir +"images/hightlights/preview/1.jpg"}>
						<figure>
							<img src={ ImageDir +"images/hightlights/1.jpg" } alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href={ ImageDir +"images/hightlights/preview/2.jpg"}>
						<figure>
							<img src={ ImageDir +"images/hightlights/2.jpg" } alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href={ ImageDir +"images/hightlights/preview/3.jpg"}>
						<figure>
							<img src={ ImageDir +"images/hightlights/3.jpg" } alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href={ ImageDir +"images/hightlights/preview/4.jpg"}>
						<figure>
							<img src={ ImageDir +"images/hightlights/4.jpg" } alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href={ ImageDir +"images/hightlights/preview/5.jpg"}>
						<figure>
							<img src={ ImageDir +"images/hightlights/6.jpg" } alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href={ ImageDir +"images/hightlights/preview/8.jpg"}>
						<figure>
							<img src={ ImageDir +"images/hightlights/8.jpg" } alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href={ ImageDir +"images/hightlights/preview/9.jpg"}>
						<figure>
							<img src={ ImageDir +"images/hightlights/9.jpg" } alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href={ ImageDir +"images/hightlights/preview/10.jpg"}>
						<figure>
							<img src={ ImageDir +"images/hightlights/10.jpg" } alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href={ ImageDir +"images/hightlights/preview/11.jpg"}>
						<figure>
							<img src={ ImageDir +"images/hightlights/11.jpg" } alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href={ ImageDir +"images/hightlights/preview/14.jpg"}>
						<figure>
							<img src={ ImageDir +"images/hightlights/14.jpg" } alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href={ ImageDir +"images/hightlights/preview/15.jpg"}>
						<figure>
							<img src={ ImageDir +"images/hightlights/15.jpg" } alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href={ ImageDir +"images/hightlights/preview/16.jpg"}>
						<figure>
							<img src={ ImageDir +"images/hightlights/16.jpg" } alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href={ ImageDir +"images/hightlights/preview/17.jpg"}>
						<figure>
							<img src={ ImageDir +"images/hightlights/17.jpg" } alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href={ ImageDir +"images/hightlights/preview/18.jpg"}>
						<figure>
							<img src={ ImageDir +"images/hightlights/18.jpg" } alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href={ ImageDir +"images/hightlights/preview/19.jpg"}>
						<figure>
							<img src={ ImageDir +"images/hightlights/19.jpg" } alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href={ ImageDir +"images/hightlights/preview/22.jpg"}>
						<figure>
							<img src={ ImageDir +"images/hightlights/22.jpg" } alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href={ ImageDir +"images/hightlights/preview/23.jpg"}>
						<figure>
							<img src={ ImageDir +"images/hightlights/23.jpg" } alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href={ ImageDir +"images/hightlights/preview/24.jpg"}>
						<figure>
							<img src={ ImageDir +"images/hightlights/24.jpg" } alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href={ ImageDir +"images/hightlights/preview/26.jpg"}>
						<figure>
							<img src={ ImageDir +"images/hightlights/26.jpg" } alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href={ ImageDir +"images/hightlights/preview/27.jpg"}>
						<figure>
							<img src={ ImageDir +"images/hightlights/27.jpg" } alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href={ ImageDir +"images/hightlights/preview/28.jpg"}>
						<figure>
							<img src={ ImageDir +"images/hightlights/28.jpg" } alt=""/>
						</figure>
					</a>
				</div>
				<div className="item col-md-6 col-xs-12">
					<a className="colorBox" href={ ImageDir +"images/hightlights/preview/30.jpg"}>
						<figure>
							<img src={ ImageDir +"images/hightlights/30.jpg" } alt=""/>
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