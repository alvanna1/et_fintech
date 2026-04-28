import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ImageDir } from "@/utils/2021/config";
const Winners = () => {
  useEffect(() => {
    import(`@/assets/2021/css/bootstrap.css`);
    import(`@/assets/2021/css/style.css`);
  }, []);

  const [openItems, setOpenItems] = useState({});

  const toggleItem = (key) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const { t } = useTranslation("2021");

  // Fetch award categories
  const awardsData = t("award_array", { returnObjects: true }) || {};
  // Fetch winners data
  const winnersData = t("winners", { returnObjects: true }) || {};
  const validAwardEntries = Object.entries(awardsData).filter(([key]) => {
    const winnerList = winnersData[key];
    if (!Array.isArray(winnerList) || winnerList.length === 0) {
      return false;
    }
    return winnerList.some((winner) => winner?.name && winner.name.trim() !== "");
  });

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
              {validAwardEntries.map(([key, value]) => (
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

              {/* ESG Appreciation Section */}
              <li
                key="esg"
                className={openItems["esg"] ? "open" : ""}
                onClick={() => toggleItem("esg")}
              >
                <h2>
                  <a onTouchStart={() => true}>
                  {t('esgwinner')}
                  </a>
                </h2>
                <ul style={{ display: openItems["esg"] ? "block" : "none" }}>
                  <li>
                    <div className="sponsorsLogo col-xs-12 col-md-12 mt-8">
                      <img src={ImageDir +"images/sponsors/bct.png"} alt="BCT" />
                      <img src={ImageDir +"images/sponsors/Deloitte.png"} alt="Deloitte" />
                      <img src={ImageDir +"images/sponsors/EY.png"} alt="EY" />
                      <img src={ImageDir +"images/sponsors/hkri.png"} alt="HKRI" />
                      <img src={ImageDir +"images/sponsors/hkhs.png"} alt="Hong Kong Housing Society" />
                      <img src={ImageDir +"images/sponsors/KPMG.png"} alt="KPMG" />
                      <img src={ImageDir +"images/sponsors/nwd.png"} alt="New World Development" />
                      <img src={ImageDir +"images/sponsors/prudential.png"} alt="Prudential" />
                      <img src={ImageDir +"images/sponsors/pwc.png"} alt="PwC" />
                      <img src={ImageDir +"images/sponsors/sc.png"} alt="Standard Chartered" />
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Winners;