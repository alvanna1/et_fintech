
import { ImageDir } from "@/utils/2023/config";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
export const Exposures = () => {
  const { t } = useTranslation('2023');
  const [activeTab, setActiveTab] = useState<'tab3' | 'tab4'>('tab3');
    return (
        <section className="exposures" id="exposures">
  <div className="title"> {t('exposures.title')}</div>
  <div className="highlights_wrapper">
    <ul className="tabs clearfix" data-tabgroup="second-tab-group">
      <li>
        <a
          href="#tab3"
          className={activeTab === 'tab3' ? 'active' : ''}
          onClick={(event) => {
            event.preventDefault();
            setActiveTab('tab3');
          }}
        >
        {t('exposures.tab3')}
        </a>
      </li>
      <li>
        <a
          href="#tab4"
          className={activeTab === 'tab4' ? 'active' : ''}
          onClick={(event) => {
            event.preventDefault();
            setActiveTab('tab4');
          }}
        >
          {t('exposures.tab4')}
        </a>
      </li>
    </ul>
    <section id="second-tab-group" className="tabgroup">
      {activeTab === 'tab3' && (
      <div id="tab3">
        <a
          href="https://fintech.etnet.com.hk/2023/images/publication/FA2022_HKET_PreEvent_1.pdf"
          target="_blank"
          className="publication"
        >
          <img src={ImageDir + "images/publication/publication_01.jpg"} alt="" loading="lazy" />
          <div className="publication_title">
            <p>{t('exposures.publication1_title')}</p>
          </div>
          <div className="publication_details">
            <p>
            {t('exposures.publication1_details')}
            </p>
          </div>
        </a>
        <a
          href="https://fintech.etnet.com.hk/2023/images/publication/FA23_Standard_PreEvent.pdf"
          target="_blank"
          className="publication"
        >
          <img src={ImageDir + "images/publication/publication_02.jpg"} alt="" loading="lazy" />
          <div className="publication_title">
            <p>{t('exposures.publication2_title')}</p>
          </div>
          <div className="publication_details">
            <p>{t('exposures.publication2_details')}</p>
          </div>
        </a>
        <a
          href="https://fintech.etnet.com.hk/2023/images/publication/FA23_HKET_PostEvent.pdf"
          target="_blank"
          className="publication"
        >
          <img src={ImageDir + "images/publication/publication_03.jpg"} alt="" loading="lazy" />
          <div className="publication_title">
            <p>{t('exposures.publication3_title')}</p>
          </div>
          <div className="publication_details">
            <p>
            {t('exposures.publication3_details')}
            </p>
          </div>
        </a>
      </div>
      )}
      {activeTab === 'tab4' && (
      <div id="tab4">
        <a
          href="https://www.etnet.com.hk/www/tc/news/topic_news_category.php?category=fintechawards"
          target="_blank"
          className="articles"
        >
          <p>{t('exposures.articles')}</p>
        </a>
      </div>
      )}
    </section>
  </div>
</section>


    )
}
export default Exposures;
