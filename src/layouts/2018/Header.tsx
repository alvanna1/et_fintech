import { LanguageSwitcher } from "@/utils/functions";
import { ImageDir } from "@/utils/2018/config";
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t, i18n } = useTranslation('2018');
    const basePath = location.pathname.startsWith("/2018/zh") ? "/2018/zh" : "/2018";
    return (
        <nav className="navbar absolute">
            <div className="container-fluid">
                <div className="navbar-header">
                    <div className="logo col-md-4"> <a href="/"> <img className="slogo" src={ImageDir + "images/logo.png"} alt="FinTech Awards 2018" /> <span>by etnet</span> </a> </div>
                    <div className="menuIcon mobile"><a id="menuToggle" href="#"><div className="hamburgerMenu"></div></a></div>
                    <div className="menuitem col-md-8 navbar-right desktop">
                        <ul>
                            <li><a href={`${basePath}/awards`}>{t('header_nav.awards')}</a></li>
                            <li><a href={`${basePath}/judges`}>{t('header_nav.judges')}</a></li>
                            <li><a href={`${basePath}/sponsors`}>{t('header_nav.sponsors')}</a></li>
                            <li><a href={`${basePath}/winners`}>{t('header_nav.winners')}</a></li>
                            <li><a href={`${basePath}/highlights`}>{t('header_nav.highlights')}</a></li>
                            <li className="lang chinese"> <a href="#" onClick={(event) => LanguageSwitcher(event, i18n, navigate, location)}>
                                <span>{t("header_nav.lang_opt")}</span> </a></li>
                        </ul>
                    </div>
                    <div className="menuitemMobile col-md-12 mobile">
                        <div className="container">
                            <ul>
                                <li><a href={`${basePath}/Awards`}>{t('header_nav.awards')}</a></li>
                                <li><a href={`${basePath}/judges`}>{t('header_nav.judges')}</a></li>
                                <li><a href={`${basePath}/sponsors`}>{t('header_nav.sponsors')}</a></li>
                                <li><a href={`${basePath}/winners`}>{t('header_nav.winners')}</a></li>
                                <li><a href={`${basePath}/highlights`}>{t('header_nav.highlights')}</a></li>
                            </ul>
                            <section className="socialBar">
                                <div className="container">
                                    <div className="col-xs-12"> <span>Share to</span>
                                        <a className="sharetoFacebookStyle" href="https://www.facebook.com/sharer.php?u=https://fintech.etnet.com.hk/" target="_blank"></a>
                                        <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://fintech.etnet.com.hk/2024/index.php&title=FinTech Awards 2024 - Innovating and Pioneering a Sustainable Digital Economy&source=etnet" className="sharetoLinkedinStyle" target="_blank"></a>
                                        <a className="sharetoLine mobile" ></a>
                                        <a className="sharetoWhatsapp mobile" ></a>
                                        <a className="sharetoWeiboStyle" href="https://service.weibo.com/share/share.php?url=http%3A%2F%2Ffintech.etnet.com.hk%2F%3Futm_source%3Dweibo%26utm_medium%3Dshare-message&title=Sustainability%20Drives%20Value%20in%20Green%20Finance"
                                            target="_blank"></a> </div>
                                </div>
                            </section>
                            <footer className="text-left">
                                <div className="container">
                                    <div className="lang chinese pull-left"><a className="chinese" href="#" onClick={(event) => LanguageSwitcher(event, i18n, navigate, location)}>
                                        {t("header_nav.lang_opt")}
                                    </a></div>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>

            </div>

        </nav>
    )
}
export default Header