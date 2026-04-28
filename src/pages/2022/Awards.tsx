
import { ImageDir } from "@/utils/2022/config";
import { useTranslation } from 'react-i18next';
export const Awards = () => {
    const {t} = useTranslation('2022');
    const awardsData = t("award_array", { returnObjects: true }) || {};
    return (
        <section>
            <div className="container body innerBody">
                <figure className="backgroundImage">
                    <img src={ImageDir+"images/background_awards.jpg"} alt="" />
                </figure>
                <aside className="innerPage">
                    <div>
                        <h1> {t('awards_title')}</h1>
                    </div>
                </aside>
                <div className="col-md-9 content">
                    <div className="awardsList">
                        <ul id="expandList" className="expandList bullet">
                        {Object.entries(awardsData).map(([key, value]) => (
                            <li key={key}>
                                <h2>
                                    <a style={{ textDecoration: "none", userSelect: "none", WebkitUserSelect: "none" }} onMouseDown={(e) => e.preventDefault()}>{value}</a>
                                </h2>
                            </li>
                        ))}

                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Awards;
