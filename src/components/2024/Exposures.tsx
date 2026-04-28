
import { ImageDir } from "@/utils/2024/config";
import { useTranslation } from 'react-i18next';
export const Exposures = () => {
  const { t } = useTranslation('2024');
  const publicationsRaw = t('exposures.publications', { returnObjects: true });
  const publications = Array.isArray(publicationsRaw)
    ? (publicationsRaw as Array<{ href: string; image: string; title: string; details: string }>)
    : [];
    return (
      <div id="Publication_Container">
        <h2>{t('exposures.title')}</h2>
        {publications.map((publication, index) => (
          <a key={index} href={publication.href} target="_blank" rel="noreferrer">
            <figure className={index === 0 ? "RA" : ""}>
              <img src={ImageDir + "images/publication/" + publication.image} alt="" loading="lazy" />
              <figcaption>
                <h3>
                  {publication.title}
                  <br />
                  {publication.details}
                </h3>
              </figcaption>
            </figure>
          </a>
        ))}
        <div>
          <a
            href="https://www.etnet.com.hk/www/tc/news/topic_news_category.php?category=fintechawards"
            target="_blank"
            rel="noreferrer"
            id="ArticleButton"
          >
            <h2>{t('exposures.articles_button')}</h2>
          </a>
        </div>
      </div>
    );
}
export default Exposures;
