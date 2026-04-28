import { useEffect } from "react";
import { ImageDir } from "@/utils/2021/config";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
export const Exposures = () => {
    const { t } = useTranslation('2021');
    return (
        <section>
            <div id="pageexposuresPublication" className="container body innerBody exposures exposuresPublication">
                <figure className="backgroundImage"> <img src={ImageDir +"images/background_exposures.jpg"} alt=""/> </figure>
                    <aside className="innerPage">
                        <div>
                            <h1>{t('exposures_array.title')}</h1>
                            <ul>
                                <li><Link to="../exposures" relative="path">{t('exposures_array.tab1')}</Link> </li>
                                <li><a href="https://www.etnet.com.hk/www/tc/news/topic_news_category.php?category=fintechawards" target="_blank" rel="noopener noreferrer">{t('exposures_array.tab2')}</a> </li>
                            </ul>
                        </div>
                    </aside>
                <div className="col-md-11 grid highlights publication row">
                    <div className="item col-md-6 col-xs-12"> <a href="publication/FinTech2021_HKET_13Jan2022.pdf" download="Result Announcement HKET (13 Jan 2022).pdf">
                        <figure> <img src={ImageDir +"images/highlights/Result_Announcement_HKET_Thumbnail.png"} alt=""/> </figure>
                        <h3>{t('exposures_array.publication1_title')}<br />
                        {t('exposures_array.publication1_details')}</h3>
                        </a>
                    </div>
                    <div className="item col-md-6 col-xs-12"> <a href="publication/FinTech2021_TheStandard_13Jan2022.pdf" download="Result Announcement The Standard (13 Jan 2022).pdf">
                        <figure> <img src={ImageDir +"images/highlights/Result_Announcement_The_Standard_Thumbnail.png"} alt=""/> </figure>
                        <h3>{t('exposures_array.publication2_title')}<br />
                        {t('exposures_array.publication2_details')}</h3>
                        </a> </div>
                        <div className="item col-md-6 col-xs-12"> <a href="publication/FinTech2021_HKET_17May2022.pdf" download="Post Event Advertisement HKET (17 May 2022).pdf">  <figure> <img src={ImageDir +"images/highlights/Post_Event_Advertisement_HKET_Thumbnail.png"} alt=""/> </figure>
                        <h3>{t('exposures_array.publication3_title')}<br />
                        {t('exposures_array.publication3_details')}</h3>
                        </a> </div>
                </div>
            </div >
        </section >
    )
}
export default Exposures;