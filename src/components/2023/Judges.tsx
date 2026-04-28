
import { ImageDir } from "@/utils/2023/config";
import { useTranslation } from 'react-i18next';
export const Judges = () => {
    const { t } = useTranslation('2023');
    const judges = t('judges_array.judges', { returnObjects: true });

    if (!Array.isArray(judges)) {
        console.error("Expected 'judges_array.judges' to be an array, but got:", judges);
        return null; // Prevent rendering if data is incorrect
    }
    return (
        <section className="judges" id="judges">
            <div className="title">{t('judges_array.title')}</div>
            <div className="judge_wrapper">
                <div className="judges_intro_box_wrapper">
                    <div className="judges_intro_box_line">
                        <div className="judges_intro_box">
                            <div className="judges_intro_text">
                            {t('judges_array.intro')}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="judges_criteria_box">
                    <div className="judges_criteria_teture" />
                    <div className="judges_criteria_title">
                        {t('judges_array.judges_criteria_title')}
                        <br />
                        <p>{t('judges_array.judges_criteria')}</p>
                    </div>
                    <div className="judges_criteria_pentagon_warpper reveal">
                        <div className="judges_criteria_pentagon">
                            <img src={ImageDir + "images/judging_criteria_pentagon.png"} alt="" loading="lazy" />
                        </div>
                        <div className="judges_criteria_pentagon_fa_award">
                            <img src={ImageDir + "images/judging_criteria_fa_award.png"} alt="" loading="lazy" />
                        </div>
                        <div className="judges_criteria innovation_and_creativity">
                        {t('judges_array.criteria1')}
                        </div>
                        <div className="judges_criteria functionality">
                        {t('judges_array.criteria2')}</div>
                        <div className="judges_criteria marketability">
                        {t('judges_array.criteria3')}</div>
                        <div className="judges_criteria impact">
                        {t('judges_array.criteria4')}</div>
                        <div className="judges_criteria benifits">
                        {t('judges_array.criteria5')}</div>
                    </div>
                </div>
                <div className="judges_headofjudge_wrapper">
                    <div className="judges_headofjudge_title">{t('judges_array.head_of_judge')}</div>
                    <div className="judges_headofjudge_box_wrapper">
                        <div className="judges_box_line">
                            <div className="judges_box">
                                <div className="judge_photo Winnie">
                                    <img src={ImageDir + "images/judge/judge_winnie.png"} alt="" loading="lazy" />
                                </div>
                                <div className="judge_text">
                                    <div className="judge_name">{t('judges_array.head_of_judge_name')}</div>
                                    <div className="judge_title">
                                    {t('judges_array.head_of_judge_title')}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="headofjudge_description_wrapper">
                            <div className="headofjudge_description_box">
                                <div className="headofjudge_description_details">
                                {t('judges_array.head_of_judge_description')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="judges_Panelofjudge_title">
            {t('judges_array.Panel_of_judge')}
            </div>
            <div className="panelofjudges_wrapper">
                <div className="panelofjudges_table">
                {judges.map((item, index) => (
                    <div className="panelofjudges_box" key={`${item.name}-${index}`}>
                        <div className="panelofjudges_photo">
                            <img src={`${ImageDir}images/judge/${item.img}`} alt="" loading="lazy" />
                        </div>
                        <div className="panelofjudges_text">
                            <div className="panelofjudges_name"> {item.name}</div>
                            <div className="panelofjudges_title">
                                {item.title}
                            </div>
                        </div>
                    </div>
                ))}
                    <div className="panelofjudges_box">
                        <div className="panelofjudges_photo Valent">
                            <img src={ImageDir + "images/judge/judge_Valent.png"} alt="" loading="lazy" />
                        </div>
                        <div className="panelofjudges_text">
                            <div className="panelofjudges_role">{t('judges_array.legal_advisor')}</div>
                            <div className="panelofjudges_name">{t('judges_array.legal_advisor_name')}</div>
                            <div className="panelofjudges_title">
                            {t('judges_array.legal_advisor_title')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Judges;
