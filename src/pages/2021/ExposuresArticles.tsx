import { useEffect, useState } from "react";
import axios from "axios";
import { ImageDir } from "@/utils/2021/config";
import { useTranslation } from 'react-i18next';
import articleData from "../../i18n/2021/fintech2020.json";
import { Link } from "react-router-dom";
interface Article {
    url: string;
    date: string;
    subject: string;
}
const ExposuresArticles = () => {
    const { t } = useTranslation('2021');
   // const [exposuresArticlesData, setExposuresArticlesData] = useState<{ fintech2022: Article[] }>({ fintech2022: [] });

/*     useEffect(() => {
        const fetchExposuresArticlesData = async () => {
            try {
                const response = await axios.get("/www/tc/news/advertorial/2023/Fintech2022/fintech2022.json");
                console.log("API Response:", response.data);
                setExposuresArticlesData(response.data);
            } catch (error) {
                console.error("Error fetching exposuresArticlesData: ", error);
            }
        };

        fetchExposuresArticlesData();
    }, []); */
   // console.log("Exposures Articles Data:", exposuresArticlesData); // Log the data to check
    return (
        <section>
            <img className="preload" style={{ display: "none" }} src={ImageDir +"images/splash-lightbox-loading.gif"} alt="" />
            <div id="pageexposuresArticle" className="container body innerBody exposures exposuresArticle">
                <figure className="backgroundImage">
                    <img src="images/background_exposures.jpg" alt="" />
                </figure>
                <aside className="innerPage">
                    <div>
                        <h1>{t('exposures_array.title')}</h1>
                        <ul>
                            <li><Link to="../exposures" relative="path">{t('exposures_array.tab1')}</Link></li>
                            <li><a href="https://www.etnet.com.hk/www/tc/news/topic_news_category.php?category=fintechawards" target="_blank" rel="noopener noreferrer">{t('exposures_array.tab2')}</a></li>
                        </ul>
                    </div>
                </aside>
                <div className="col-md-9 grid highlights articles row">

                        {articleData.fintech2020.map((item, index) => (
                            <div className="item col-md-12 col-xs-12" >
                                <a
                                href={item.url}
                                target="_blank"
                                className="colorBox"
                                key={index}
                                >
                                <span className="date">{item.date}</span>
                                <span>{item.subject}</span>
                                </a>
                            </div>
                        ))}


                </div>
            </div>
        </section>
    )
}
export default ExposuresArticles;