
import { ImageDir } from "@/utils/2024/config";
import { useTranslation } from 'react-i18next';
export const Highlights = () => {
    const { t } = useTranslation('2024');
    const videosRaw = t('highlights.videos', { returnObjects: true });
    const videos = Array.isArray(videosRaw)
      ? (videosRaw as Array<{ url: string; title: string }>)
      : [];

    return (
      <div id="Highlight_Wrapper">
        <h2>{t('highlights.title')}</h2>
        <div id="Video_Container">
          {videos.map((video, index) => (
            <div key={index}>
              <iframe
                src={video.url}
                title={video.title}
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              <h3>{video.title}</h3>
            </div>
          ))}
        </div>
        <div id="Gallery_Container">
          <div><img src={ImageDir + "images/gallery/fa2024pt1.jpg"} alt="" loading="lazy" /></div>
          <div><img src={ImageDir + "images/gallery/fa2024pt2.jpg"} alt="" loading="lazy" /></div>
          <div><img src={ImageDir + "images/gallery/fa2024pt3.jpg"} alt="" loading="lazy" /></div>
          <div><img src={ImageDir + "images/gallery/fa2024pt4.jpg"} alt="" loading="lazy" /></div>
          <div><img src={ImageDir + "images/gallery/fa2024pt5.jpg"} alt="" loading="lazy" /></div>
          <div><img src={ImageDir + "images/gallery/fa2024pt6.jpg"} alt="" loading="lazy" /></div>
          <div><img src={ImageDir + "images/gallery/fa2024pt7.jpg"} alt="" loading="lazy" /></div>
          <div><img src={ImageDir + "images/gallery/fa2024pt8.jpg"} alt="" loading="lazy" /></div>
        </div>
      </div>
    );
}
export default Highlights;
