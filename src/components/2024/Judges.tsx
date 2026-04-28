
import { ImageDir } from "@/utils/2024/config";
import { useTranslation } from 'react-i18next';
export const Judges = () => {
    const { t } = useTranslation('2024');
    const judges = t('judges_array.judges', { returnObjects: true });

    if (!Array.isArray(judges)) {
        console.error("Expected 'judges_array.special_categories' to be an array, but got:", judges);
        return null; // Prevent rendering if data is incorrect
    }
    return (
        <div id="Judges_Wrapper">
            <div id="Judges_UpperShadow"></div>
            <div id="Judges_Container">
                <h2>{t('judges_array.title')}</h2>
                <div className="Judges_Text">
                    <p>{t('judges_array.intro')}
                    </p></div>
                <h4>{t('judges_array.judges_criteria_title')}</h4>
                <div className="Judges_Text TextCenter">
                    <p>{t('judges_array.judges_criteria')}</p>
                </div>

                <div id="Judges_Criteria"><img src={ImageDir + "images/criteria.png"} alt="Judging Criteria" /></div>
                <h4>{t('judges_array.head_of_judge')}</h4>
                <div className="JudgesCard_Wrapper JudgesCardCenter">
                    <div className="JudgesCard">
                        <div className="JudgesThumbnail"><img src={ImageDir + "images/judges/winnietang.png"} alt="Dr. Winnie Tang, MH, JP" /></div>
                        <div className="JudgesBio">
                            <h3>{t('judges_array.head_of_judge_name')}</h3>
                            <h6>{t('judges_array.head_of_judge_title')}</h6>
                        </div>
                    </div>
                </div>
                <h4>{t('judges_array.Panel_of_judge')}</h4>
                <div className="JudgesCard_Wrapper">
                    {judges.map((item, index) => (
                        <div className="JudgesCard" key={`${item.name}-${index}`}>
                            <div className="JudgesThumbnail">
                                <img src={`${ImageDir}images/judges/${item.img}`} alt="" loading="lazy" />
                            </div>
                            <div className="JudgesBio">
                                <h3> {item.name}</h3>
                                <h6>
                                    {item.title}
                                </h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Judges;
