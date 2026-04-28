import { useTranslation } from "react-i18next";

const categoriesAsH4 = new Set([
  "FinTech of the Year 2024",
  "FinTech Marketing Campaign of the Year 2024",
  "FinTech of the Year 2024 in Start-up",
  "FinTech Digital Innovations in 2024",
  "2024金融科技大獎",
  "2024金融科技市場策劃大獎",
  "2024金融科技大獎 - 初創企業",
  "2024金融科技數碼創新",
]);

const Winners = () => {
    const { t, i18n } = useTranslation("2024");
    const isZh = (i18n.resolvedLanguage || i18n.language || '').startsWith('zh');
    const winnersData = t('winners_array', { returnObjects: true });

    if (!winnersData || typeof winnersData !== 'object') {
        return null;
      }


    return (
        <div id="WinnerWrapper" className="py-8 px-4 bg-white text-gray-800">
        <div id="WinnerContainer" className="max-w-3xl mx-auto">
          <div id="BookletContainer">
            <a href="/2024/images/FA2024_ebooklet.pdf" target="_blank" rel="noopener noreferrer">
              <figure>
                <img src="/2024/images/booklet.png" alt="FA2024 Booklet" />
                <figcaption className={isZh ? "BookletCaptionZh" : ""}>{t('booklet_download')}</figcaption>
              </figure>
            </a>
          </div>
          <h2>{t('winners_title')}</h2>
          {Object.entries(winnersData).map(([key, category]) => (
          <div key={key}>
            {categoriesAsH4.has(category.award_cat) ? (
              <h4 key={key}>{category.award_cat}</h4>
            ) : (
              <h5 key={key}>{category.award_cat}</h5>
            )}
            {category.winners.map((winner, index) => (
              <div key={index}>
                {winner.award && (
                  <h4>{winner.award}</h4>
                )}
                <p>{winner.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    );
};

export default Winners;