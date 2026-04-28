import { useEffect } from "react";
import { ImageDir } from "@/utils/2019/config";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
export const Exposures = () => {
    const { t } = useTranslation('2019');
    return (
        <section>
            <div id="pageexposuresPublication" className="container body innerBody exposures exposuresPublication">
                <figure className="backgroundImage"> <img src={ImageDir +"images/background_exposures.jpg"} alt=""/> </figure>
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
                <div className="col-md-11 grid highlights publication row">
                    <div className="item col-md-6 col-xs-12"> <a href="publication/Result_Announcement_HKET.pdf" download="FA2019 HKET PreEvent">
                        <figure> <img src={ImageDir +"images/highlights/Result_Announcement_HKET_Thumbnail.png"} alt=""/> </figure>
                        <h3>{t('exposures_array.publication1_title')}<br />
                        {t('exposures_array.publication1_details')}</h3>
                        </a>
                    </div>
                    <div className="item col-md-6 col-xs-12"> <a href="publication/Result_Announcement_The_Standard.pdf" download="Result Announcement The Standard (20 Jan 2020).pdf">
                        <figure> <img src={ImageDir +"images/highlights/Result_Announcement_The_Standard_Thumbnail.png"} alt=""/> </figure>
                        <h3>{t('exposures_array.publication2_title')}<br />
                        {t('exposures_array.publication2_details')}</h3>
                        </a> </div>
                    <div className="item col-md-6 col-xs-12"> <a href="publication/Post_Event_Advertisement_HKET.pdf" download="Post Event Advertisement HKET (24 Jan 2020).pdf">
                        <figure> <img src={ImageDir +"images/highlights/Post_Event_Advertisement_HKET_Thumbnail.png"} alt=""/> </figure>
                        <h3>{t('exposures_array.publication3_title')}<br />
                        {t('exposures_array.publication3_details')}</h3>
                        </a> </div>
                </div>
            </div >
        </section >
    )
}
export default Exposures;