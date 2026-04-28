
import { useTranslation } from 'react-i18next';
export const Awards = () => {
    const {t} = useTranslation('2018');
    const awardsData = t("award_array", { returnObjects: true }) || {};
    return (
        <section>
             <div className="container body innerBody">
                <aside className="innerPage col-md-3">
                    <div>
                        <h1> {t('awards_title')}</h1>
                    </div>
                </aside>
                <div className="col-md-9 content">
                    <div className="awardsList">
                        <ul id="expandList" className="expandList">
                        {Object.entries(awardsData).map(([key, value]) => (
                            <li key={key}>
                                <h2>
                                    <a onTouchStart={() => true}>{value}</a>
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