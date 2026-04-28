import { useState } from "react";
import { useTranslation } from 'react-i18next';
export const Awards = () => {
    const {t, i18n} = useTranslation('2017');
    const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
    const awardsData = t("award_array", { returnObjects: true }) || {};
    const awardDescriptions = t("award_descriptions", { returnObjects: true }) || {};
    const isZh = i18n.language.startsWith("zh");

    const toggleItem = (key: string) => {
        setOpenItems((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <section>
             <div className="container body innerBody">
                <aside className="innerPage col-md-3">
                    <div>
                        <h1> {t('awards_title')}</h1>
                    </div>
                </aside>
                <div className="col-md-9 content">
                    <div className={`awardsList ${isZh ? "is-zh" : ""}`}>
                        <ul id="expandListAwards" className="expandList">
                        {Object.entries(awardsData).map(([key, value]) => (
                            <li key={key} className={openItems[key] ? "open" : ""}>
                                <h2>
                                    <a
                                        href="#"
                                        onTouchStart={() => true}
                                        onClick={(event) => {
                                            event.preventDefault();
                                            toggleItem(key);
                                        }}
                                    >
                                        {value}
                                    </a>
                                </h2>
                                {awardDescriptions[key] ? (
                                    <ul className={`award-description ${openItems[key] ? "open" : ""}`}>
                                        <li><p>{awardDescriptions[key]}</p></li>
                                    </ul>
                                ) : null}
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