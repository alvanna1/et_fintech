import { useEffect } from "react";
import { ImageDir } from "@/utils/2022/config";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
export const Exposures = () => {
    const { t } = useTranslation('2022');
    return (
        <section>
            <div id="pageexposuresPublication" className="container body innerBody exposures exposuresPublication">
                <figure className="backgroundImage"> <img src={ImageDir +"images/background_exposures.jpg"} alt=""/> </figure>
                    <aside className="innerPage">
                        <div>
                            <h1>{t('exposures_array.title')}</h1>
                            <ul>
                                <li><Link to="../exposures" relative="path">{t('exposures_array.tab1')}</Link> </li>
                                <li><Link to="../exposuresArticles" relative="path">{t('exposures_array.tab2')}</Link> </li>
                            </ul>
                        </div>
                    </aside>
                <div className="col-md-11 grid highlights publication row">
                    <div className="item col-md-6 col-xs-12"> <a href="publication/FA2022_HKET_PreEvent_1.pdf" download="FA2022 HKET PreEvent">
                        <figure> <img src={ImageDir +"images/highlights/Pre_Event_HKET_Thumbnail.png"} alt=""/> </figure>
                        <h3>{t('exposures_array.publication1_title')}<br />
                        {t('exposures_array.publication1_details')}</h3>
                        </a>
                    </div>
                    <div className="item col-md-6 col-xs-12"> <a href="publication/FA2022_Standard_PreEvent_1.pdf" download="Result Announcement The Standard (18 Jan 2023).pdf">
                        <figure> <img src={ImageDir +"images/highlights/Standard_HKET_Thumbnail.png"} alt=""/> </figure>
                        <h3>{t('exposures_array.publication2_title')}<br />
                        {t('exposures_array.publication2_details')}</h3>
                        </a> </div>
                    <div className="item col-md-6 col-xs-12"> <a href="publication/FA2022_HKET_PostEvent_1.pdf" download="Post Event Advertisement HKET (06 Feb 2023).pdf">
                        <figure> <img src={ImageDir +"images/highlights/Post_Event_HKET_Thumbnail.png"} alt=""/> </figure>
                        <h3>{t('exposures_array.publication3_title')}<br />
                        {t('exposures_array.publication3_details')}</h3>
                        </a> </div>
                </div>
            </div >
        </section >
    )
}
export default Exposures;