import { ImageDir } from "@/utils/2021/config";
import { useTranslation } from "react-i18next";

export const Sponsors = () => {
  const { t } = useTranslation("2021");

  return (
    <div id="pageSponsors">
      <section>
        <div className="container body innerBody">
          <figure className="backgroundImage">
            <img src={ImageDir + "images/background_sponsors.jpg"} alt="" />
          </figure>
          <aside className="innerPage">
            <div>
              <h1>{t("sponsors.title")}</h1>
            </div>
          </aside>
          <div className="col-md-9 content">
            <div>
              <h2 className="blank"> </h2>
              <p>{t("sponsors.p1")}</p>
              <p>{t("sponsors.p2")}</p>
              <p>{t("sponsors.p3")}</p>
              <p>{t("sponsors.p4")}</p>
              <ul className="line narrow">
                <li>{t("sponsors.list1_1")}</li>
                <li>{t("sponsors.list1_2")}</li>
                <li>{t("sponsors.list1_3")}</li>
                <li>{t("sponsors.list1_4")}</li>
              </ul>
              <h2>{t("sponsors.exposure_title")}</h2>
              <ul className="line narrow">
                <li>{t("sponsors.list2_1")}</li>
                <li>{t("sponsors.list2_2")}</li>
                <li>{t("sponsors.list2_3")}</li>
              </ul>

              <h2>{t("sponsors.knowledge_partner")}</h2>
              <div className="sponsorsLogo col-xs-12 col-md-12">
                <img style={{ height: "200px" }} src={ImageDir + "images/sponsors/pwc.png"} alt="pwc" />
              </div>

              <h2>{t("sponsors.strategic_partners")}</h2>
              <div className="sponsorsLogo col-xs-12 col-md-12">
                <img src={ImageDir + "images/sponsors/EY.png"} alt="EY" />
                <img src={ImageDir + "images/sponsors/KPMG.png"} alt="KPMG" />
                <img src={ImageDir + "images/sponsors/SCC.png"} alt="Smart City Consortium" />
              </div>

              <h2>{t("sponsors.sponsor")}</h2>
              <div className="sponsorsLogo col-xs-12 col-md-12">
                <img src={ImageDir + "images/sponsors/Deloitte.png"} alt="Deloitte" />
                <img src={ImageDir + "images/sponsors/QianHai.png"} alt="QianHai" />
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
