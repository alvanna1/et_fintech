import { useState } from "react";
import { useTranslation } from "react-i18next";
const Winners = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const { t, i18n } = useTranslation("2017");

  // Fetch award categories
  const awardsData = t("winners_award_array", { returnObjects: true }) || {};
  // Fetch winners data
  const winnersData = t("winners", { returnObjects: true }) || {};
  const isZh = i18n.language.startsWith("zh");
  const winnerOrder = [
    "finTechofyear",
    "marketing",
    "startup",
    "retail",
    "insurance",
    "cybersecurity",
    "lending",
    "consumerpayments",
    "tradingsystems",
    "wealth",
    "fxpayment",
    "university",
  ];
  const displayKeys = winnerOrder.filter((key) => Array.isArray(winnersData[key]) && winnersData[key].length > 0);

  if (!awardsData || typeof awardsData !== "object") {
    console.error("Expected 'award_array' to be an object, but got:", awardsData);
    return null;
  }

  return (
    <section>
      <div className="container body innerBody">
      <aside className="innerPage col-md-3">
            <div className="row col-md-12">
                <h1>{t('winners_title')}</h1>
            </div>
        </aside>
        <div className="col-md-9 content">
          <div className={`awardsList winners ${isZh ? "is-zh" : ""}`}>
            <ul id="expandListWinners" className="expandList">
              {displayKeys.map((key) => (
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
                      {awardsData[key]}
                    </a>
                  </h2>
                  <ul style={{ display: openItems[key] ? "block" : "none" }}>
                    {winnersData[key].map((winner, index) => (
                      <li key={index}>
                        <h3>{winner.name}</h3>
                        {winner.award && <p>{winner.award}</p>}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Winners;