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

  const { t } = useTranslation("2018");

  // Fetch award categories
  const awardsData = (t("award_array", { returnObjects: true }) || {}) as Record<string, string>;
  // Fetch winners data
  const winnersData = (t("winners", { returnObjects: true }) || {}) as Record<string, { name: string; award?: string }[]>;

  if (!awardsData || typeof awardsData !== "object") {
    console.error("Expected 'award_array' to be an object, but got:", awardsData);
    return null;
  }

  const winnerDisplayOrder = [
    "finTechofyear",
    "marketing",
    "startup",
    "retail",
    "corporate",
    "insurance",
    "consumerpayments",
    "corporatepayments",
    "wealth",
    "lending",
    "retailsupply",
    "fxpayment",
    "ai",
    "cloud",
    "bigdata",
    "blockchain",
    "fraud",
    "university",
  ];

  const winnerEntries = winnerDisplayOrder
    .map((key) => [key, awardsData[key]] as const)
    .filter(([key, value]) => Boolean(value) && Array.isArray(winnersData[key]) && winnersData[key].length > 0);

  return (
    <section>
      <div className="container body innerBody">
      <aside className="innerPage col-md-3">
            <div className="row col-md-12">
            <h1 style={{ fontSize: '2.5em' }}>{t('winners_title')}</h1>
            </div>

        </aside>
        <div className="col-md-9 content">
          <div className="awardsList winners">
            <ul id="expandList" className="expandList">
              {winnerEntries.map(([key, value]) => (
                <li key={key} className={openItems[key] ? "open" : ""} onClick={() => toggleItem(key)}>
                  <h2>
                    <a onTouchStart={() => true}>
                      {value}
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