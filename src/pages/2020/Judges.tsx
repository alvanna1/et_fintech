import React from "react";
import { ImageDir } from "@/utils/2021/config";
import { useTranslation } from 'react-i18next';
export const Judges = () => {
    const { t } = useTranslation('2020');
    const judges = t('judges_array.judges', { returnObjects: true });

    if (!Array.isArray(judges)) {
        console.error("Expected '' to be an array, but got:", judges);
        return null; // Prevent rendering if data is incorrect
    }
    return (
        <div id="pageJudges">
            <section>
                <div className="container body innerBody">
                    <figure className="backgroundImage"> <img src={ImageDir +"images/background_judges.jpg"} alt="" /> </figure>
                    <aside className="innerPage">
                        <div>
                            <h1>{t('judges_array.title')}</h1>
                        </div>
                    </aside>
                    <div className="col-md-11 grid">
                        <p className="col-sm-8 intro">{t('judges_array.description')}</p>
                        <div className="col-sm-4 criteria">
                            <h2>{t('judges_array.criteria')}</h2>
                            <p></p>
                            <img src={ImageDir +"images/judging_eng.png" }/> </div>
                        <h2 className="item col-md-12">{t('judges_array.head_of_judge')}</h2>
                        <div className="row item col-lg-6 col-sm-12 head"> <a href="winnie.php">
                            <figure className="background1 col-sm-6 pull-right">
                                <div className="background"></div>
                                <img src={ImageDir +"images/judges/Winnie-Tang.png"} alt="Dr. Winnie Tang, MH, JP" /> </figure>
                            <div className="col-sm-6">
                                <h3>{t('judges_array.head_of_judge_name')}</h3>
                                <p>{t('judges_array.head_of_judge_title1')}</p>
                            </div>
                        </a> </div>
                        <h2 className="item col-md-12">{t('judges_array.panel_of_judges')}</h2>

                        {judges.map((item, index) => (
                            <div key={index} className="row item col-lg-6 col-sm-12">
                                <a href="">
                                <figure className="background1 col-sm-6 pull-right">
                                    <div className="background"></div>
                                    <img src={`${ImageDir}images/judges/${item.img}`} alt="" loading="lazy" />
                                </figure>
                                <div className="col-sm-6">
                                    <h3>{item.name}</h3>
                                    <p>
                                    {item.title.split("\n").map((line, i) => (
                                        <React.Fragment key={i}>
                                        {line}
                                        <br />
                                        </React.Fragment>
                                    ))}
                                    </p>
                                </div>
                                </a>
                            </div>
                            ))}
                        <h2 className="item col-md-12">{t('judges_array.legal_advisor')}</h2>
                        <div className="row item col-lg-6 col-sm-12"> <a href="valent.php">
                            <figure className="background1 col-sm-6 pull-right">
                                <div className="background"></div>
                                <img src={ImageDir +"images/judges/Valent-Tse.png" }alt="Mr. Valent Tse" /> </figure>
                            <div className="col-sm-6">
                                <h3>{t('judges_array.legal_advisor_name')}</h3>
                                <p>{t('judges_array.legal_advisor_title')}</p>
                            </div>
                        </a > </div >
                        <div className="clearfix"> </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Judges;