import React from "react";
import { ImageDir } from "@/utils/2017/config";
import { useTranslation } from 'react-i18next';
export const Judges = () => {
    const { t } = useTranslation('2017');
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
                        <div className="row col-md-12">
                            <h1>{t('judges_array.title')}</h1>
                            <p>{t('judges_array.description')}</p>
                        </div>
                    </aside>
                    <div className="col-md-9 grid">
                        {judges.map((item, index) => (
                            <div key={index} className={`row item col-md-4${index === 3 ? " clearfix" : ""}`}>
                            <a href="#"></a>
                            <figure>
                                <img src={`${ImageDir}images/judges/${item.img}`} alt={item.name}/>
                            </figure>
                            <h3>{item.name}</h3>
                            <p>{item.title.split("\n").map((line, i) => (
                                        <React.Fragment key={i}>
                                        {line}
                                        <br />
                                        </React.Fragment>
                                    ))}</p>

                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Judges;