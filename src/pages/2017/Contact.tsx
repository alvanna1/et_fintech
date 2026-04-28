import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation("2017");

  return (
    <div id="pageContact">
      <section>
        <div className="container body innerBody">
          <aside className="innerPage col-md-3">
            <div className="row col-md-12">
              <h1>{t("contact.title")}</h1>
            </div>
          </aside>
          <div className="col-md-9 content">
            <div>
              <h2>{t("contact.enquiries")}</h2>
              <p className="contactNumber">
                <a href="tel:+85225640943">+852 2564 0943</a>
              </p>
              <p className="contactEmail">
                <a href="mailto:fintechawards@etnet.com.hk?subject=ETNet%20-%202018%20FinTech%20Awards%20-%20Event%20and%20Awards%20Enquiries">
                  fintechawards@etnet.com.hk
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
