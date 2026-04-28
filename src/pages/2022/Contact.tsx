import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation("2022");

  return (
    <section>
      <div id="pageContact" className="container body innerBody">
        <aside className="innerPage">
          <div>
            <h1>{t("contact.title")}</h1>
          </div>
        </aside>
        <div className="col-md-9 content">
          <div>
            <h2>{t("contact.enquiries")}</h2>
            <p className="contactNumber">
              <a href="tel:+85228802978">+852 2880 2978</a>
            </p>
            <p className="contactEmail">
              <a href="mailto:fintechawards@etnet.com.hk?subject=ETNet%20-%202022%20FinTech%20Awards%20-%20Event%20and%20Awards%20Enquiries">
                fintechawards@etnet.com.hk
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
