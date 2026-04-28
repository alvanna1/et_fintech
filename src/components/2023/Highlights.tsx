
import { ImageDir } from "@/utils/2023/config";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
export const Highlights = () => {
    const { t } = useTranslation('2023');
    const [activeTab, setActiveTab] = useState<'tab1' | 'tab2'>('tab1');
    const openLink = (url: string) => () => {
        window.open(url, '_blank');
    }

    return (
  <section className="highlights" id="highlights">
    <div className="title">{t('highlights.title')}</div>
    <div className="highlights_wrapper">
      <ul className="tabs clearfix" data-tabgroup="first-tab-group">
        <li>
          <a
            href="#tab1"
            className={activeTab === 'tab1' ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab('tab1');
            }}
          >
          {t('highlights.tab1')}
          </a>
        </li>
        <li>
          <a
            href="#tab2"
            className={activeTab === 'tab2' ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab('tab2');
            }}
          >
            {t('highlights.tab2')}
          </a>
        </li>
      </ul>
      <section id="first-tab-group" className="tabgroup">
        {activeTab === 'tab1' && (
        <div id="tab1">
          <div className="highlights_video_wrapper">
            <div
              className="highlights_video_box"
              onClick={openLink('https://www.youtube.com/watch?v=xDu7uZxEBY8&list=PLptAF_QG4rqdcMc_EvuS0m_QgJMWMq-rf&index=1')}
            >
              <img
                src={ImageDir + "images/highlights/video/FA_highlight_video-01.jpg"} alt="" loading="lazy"
              />
              <p>{t('highlights.video1')}</p>
            </div>
            <div
              className="highlights_video_box"
              onClick={openLink('https://www.youtube.com/watch?v=udX8Yo_XXTM&list=PLptAF_QG4rqdcMc_EvuS0m_QgJMWMq-rf&index=10')}
            >
              <img
                src={ImageDir + "images/highlights/video/FA_highlight_video-02.jpg"}
                alt="" loading="lazy"
              />
              <p>
              {t('highlights.video2')}
              </p>
            </div>
            <div
              className="highlights_video_box"
              onClick={openLink('https://www.youtube.com/watch?v=1MC3NxaRL-A&list=PLptAF_QG4rqdcMc_EvuS0m_QgJMWMq-rf&index=3')}
            >
              <img
                src={ImageDir + "images/highlights/video/FA_highlight_video-03.jpg"}
                alt="" loading="lazy"
              />
              <p>{t('highlights.video3')}</p>
            </div>
            <div
              className="highlights_video_box"
              onClick={openLink('https://www.youtube.com/watch?v=dPH7a0OGUOI&list=PLptAF_QG4rqdcMc_EvuS0m_QgJMWMq-rf&index=8')}
            >
              <img
                src={ImageDir + "images/highlights/video/FA_highlight_video-04.jpg"}
                alt="" loading="lazy"
              />
              <p>{t('highlights.video4')}</p>
            </div>
            <div
              className="highlights_video_box"
              onClick={openLink('https://www.youtube.com/watch?v=FFVYyMcYNqg&list=PLptAF_QG4rqdcMc_EvuS0m_QgJMWMq-rf&index=2')}
            >
              <img
                src={ImageDir + "images/highlights/video/FA_highlight_video-05.jpg"}
                alt="" loading="lazy"
              />
              <p>{t('highlights.video5')}</p>
            </div>
            <div
              className="highlights_video_box"
              onClick={openLink('https://www.youtube.com/watch?v=VDgFBLszs2U&list=PLptAF_QG4rqdcMc_EvuS0m_QgJMWMq-rf&index=7')}
            >
              <img
                src={ImageDir + "images/highlights/video/FA_highlight_video-06.jpg"}
                alt="" loading="lazy"
              />
              <p>{t('highlights.video6')}</p>
            </div>
            <div
              className="highlights_video_box"
              onClick={openLink('https://www.youtube.com/watch?v=5mhhb30GpNs&list=PLptAF_QG4rqdcMc_EvuS0m_QgJMWMq-rf&index=5')}
            >
              <img
                src={ImageDir + "images/highlights/video/FA_highlight_video-07.jpg"}
                alt="" loading="lazy"
              />
              <p>{t('highlights.video7')}</p>
            </div>
            <div
              className="highlights_video_box"
              onClick={openLink('https://www.youtube.com/watch?v=0FTG9Rqmibs&list=PLptAF_QG4rqdcMc_EvuS0m_QgJMWMq-rf&index=1')}
            >
              <img
                src={ImageDir + "images/highlights/video/FA_highlight_video-08.jpg"}
                alt="" loading="lazy"
              />
              <p>{t('highlights.video8')}</p>
            </div>
            <div
              className="highlights_video_box"
              onClick={openLink('https://www.youtube.com/watch?v=EI-9v6HVqKQ&list=PLptAF_QG4rqdcMc_EvuS0m_QgJMWMq-rf&index=6')}
            >
              <img
                src={ImageDir + "images/highlights/video/FA_highlight_video-09.jpg"}
                alt="" loading="lazy"
              />
              <p>{t('highlights.video9')}</p>
            </div>
            <div
              className="highlights_video_box"
              onClick={openLink('https://www.youtube.com/watch?v=3VC60rcrmhE&list=PLptAF_QG4rqdcMc_EvuS0m_QgJMWMq-rf&index=4')}
            >
              <img
                src={ImageDir + "images/highlights/video/FA_highlight_video-10.jpg"}
                alt="" loading="lazy"
              />
              <p>{t('highlights.video10')}</p>
            </div>
          </div>
        </div>
        )}
        {activeTab === 'tab2' && (
        <div id="tab2">
          <div className="highlights_photos_wrapper">
            <img src={ImageDir + "images/highlights/1.jpg"} alt="" loading="lazy" />
            <img src={ImageDir + "images/highlights/2.jpg"} alt="" loading="lazy" />
            <img src={ImageDir + "images/highlights/3.jpg"} alt="" loading="lazy" />
            <img src={ImageDir + "images/highlights/4.jpg"} alt="" loading="lazy" />
            <img src={ImageDir + "images/highlights/5.jpg"} alt="" loading="lazy" />
            <img src={ImageDir + "images/highlights/6.jpg"} alt="" loading="lazy" />
            <img src={ImageDir + "images/highlights/7.jpg"} alt="" loading="lazy" />
            <img src={ImageDir + "images/highlights/8.jpg"} alt="" loading="lazy" />
          </div>
        </div>
        )}
      </section>
    </div>
  </section>
    )
}
export default Highlights;
