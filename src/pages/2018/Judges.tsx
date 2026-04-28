import React from "react";
import { ImageDir } from "@/utils/2018/config";
import { useTranslation } from 'react-i18next';
export const Judges = () => {
    const { t } = useTranslation('2018');
    const judges = t('judges_array.judges', { returnObjects: true });

    if (!Array.isArray(judges)) {
        console.error("Expected '' to be an array, but got:", judges);
        return null; // Prevent rendering if data is incorrect
    }
    return (
        <div id="pageJudges">
            <section>
                <div className="container body innerBody">
                    <aside className="innerPage col-md-3">
                        <div>
                            <h1>{t('judges_array.title')}</h1>
                            <p>{t('judges_array.description')}</p>
                            <div>
                                <h2>{t('judges_array.criteria')}</h2>
                                <p></p>
                                <img src={ ImageDir+"images/judging_eng.png"}/>
                            </div>
                        </div>
                    </aside>
                    <div className="col-md-9 grid">
                    <h2 className="item col-md-12">{t('judges_array.head_of_judge')}</h2>
                        <div className="row item col-md-4">
                            <a href="winnie.php">
                            <figure className="background1">
                                <div className="ribbon ribbonGreen"></div>
                                <div className="ribbon ribbonBlue"></div>
                                <div className="ribbon ribbonGold"></div>
                                <div className="background"></div>
                                <img src={ ImageDir+"images/judges/Winnie-Tang.png" }alt="Dr. Winnie Tang, JP"/>
                            </figure>
                            <h3>{t('judges_array.head_of_judge_name')}</h3>
                                <p>{t('judges_array.head_of_judge_title1')}</p>
                            </a>
                        </div>
                    <h2 className="item col-md-12">{t('judges_array.panel_of_judges')}</h2>

                        {judges.map((item, index) => (
                            <div key={index} className="row item col-md-4">
                            <a href="">
                            <figure className="shoulderCorner2">
                                <div className="ribbon ribbonGreen"></div>
                                <div className="ribbon ribbonBlue"></div>
                                <div className="ribbon ribbonGold"></div>
                                <div className="background"></div>
                                <img src={`${ImageDir}images/judges/${item.img}`} alt=""/>
                            </figure>
                            <h3>{item.name}</h3>
                            <p>{item.title.split("\n").map((line, i) => (
                                        <React.Fragment key={i}>
                                        {line}
                                        <br />
                                        </React.Fragment>
                                    ))}</p>
                            </a>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Judges;