import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ImageDir } from "@/utils/2020/config";
const Winners = () => {
  useEffect(() => {
    import(`@/assets/2020/css/bootstrap.css`);
    import(`@/assets/2020/css/style.css`);
  }, []);

  const [openItems, setOpenItems] = useState({});

  const toggleItem = (key) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const { t } = useTranslation("2020");

  // Fetch award categories
  const awardsData = t("award_array", { returnObjects: true }) || {};
  // Fetch winners data
  const winnersData = t("winners", { returnObjects: true }) || {};

  if (!awardsData || typeof awardsData !== "object") {
    console.error("Expected 'award_array' to be an object, but got:", awardsData);
    return null;
  }

  return (
    <section>
      <div className="container body innerBody">
        <figure className="backgroundImage">
          <img src={ImageDir + "images/background_awards.jpg"} alt="Awards Background" />
        </figure>
        <aside className="innerPage">
          <div>
            <h1>{t('winners_title')}</h1>
          </div>
        </aside>

        <div className="col-md-9 content">
          <div className="awardsList winners">
            <ul id="expandList" className="expandList">
              {Object.entries(awardsData).map(([key, value]) => (
                <li key={key} className={openItems[key] ? "open" : ""} onClick={() => toggleItem(key)}>
                  <h2>
                    <a onTouchStart={() => true}>
                      {value}
                    </a>
                  </h2>
                  <ul style={{ display: openItems[key] ? "block" : "none" }}>
                    {winnersData[key] && winnersData[key].length > 0 ? (
                      winnersData[key].map((winner, index) => (
                        <li key={index}>
                          <h3>{winner.name}</h3>
                          {winner.award && <p>{winner.award}</p>}
                        </li>
                      ))
                    ) : (
                      <li>
                        <h3>No winner data available</h3>
                      </li>
                    )}
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