import { LanguageSwitcher } from "@/utils/functions";
import { ImageDir } from "@/utils/2017/config";
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t, i18n } = useTranslation('2017');
    const basePath = location.pathname.startsWith("/2017/zh") ? "/2017/zh" : "/2017";
    return (
        <nav className="navbar absolute">
            <div className="container-fluid">

                <div className="navbar-header">
                    <div className="logo col-md-3"> <a href="/"> <img src={ImageDir + "images/logo.png"} alt="FinTech Awards 2017" /> <span>by etnet</span> </a> </div>
                    <div className="menuIcon mobile"><a id="menuToggle" href="#"></a></div>
                    <div className="menuitem col-md-9 navbar-right desktop">
                        <ul>
                            <li><a href={`${basePath}/Awards`}>{t('header_nav.awards')}</a></li>
                            <li><a href={`${basePath}/judges`}>{t('header_nav.judges')}</a></li>
                            <li><a href={`${basePath}/sponsors`}>{t('header_nav.sponsors')}</a></li>
                            <li><a href={`${basePath}/winners`}>{t('header_nav.winners')}</a></li>
                            <li><a href={`${basePath}/highlights`}>{t('header_nav.highlights')}</a></li>
                            <li className="lang chinese"> <a href="#" onClick={(event) => LanguageSwitcher(event, i18n, navigate, location)}>
                                {t("header_nav.lang_opt")}</a></li>
                        </ul>
                    </div>
                    <div className="menuitemMobile col-md-12 mobile">
                        <div className="container">
                            <ul>
                                <li><a href={`${basePath}/awards`}>{t('header_nav.awards')}</a></li>
                                <li><a href={`${basePath}/judges`}>{t('header_nav.judges')}</a></li>
                                <li><a href={`${basePath}/sponsors`}>{t('header_nav.sponsors')}</a></li>
                                <li><a href={`${basePath}/winners`}>{t('header_nav.winners')}</a></li>
                                <li><a href={`${basePath}/highlights`}>{t('header_nav.highlights')}</a></li>
                                <li className="lang chinese"> <a href="#" onClick={(event) => LanguageSwitcher(event, i18n, navigate, location)}>
                                    {t("header_nav.lang_opt")}</a></li>
                            </ul>
                            <section className="socialBar">
                                <div className="container">
                                    <div className="col-xs-12"> <span>Share to</span>
                                        <a className="sharetoFacebook" href="https://www.facebook.com/sharer.php?u=https://fintech.etnet.com.hk/"></a>
                                        <a className="sharetoLinkedin" href="https://www.linkedin.com/sharing/share-offsite/?url=https://fintech.etnet.com.hk/2024/index.php&title=FinTech Awards 2024 - Innovating and Pioneering a Sustainable Digital Economy&source=etnet"></a>
                                        <a className="sharetoLine mobile" ></a>
                                        <a className="sharetoWhatsapp mobile" ></a>
                                        <a className="sharetoWeibo" href="https://service.weibo.com/share/share.php?url=http%3A%2F%2Ffintech.etnet.com.hk%2F%3Futm_source%3Dweibo%26utm_medium%3Dshare-message&title=Sustainability%20Drives%20Value%20in%20Green%20Finance"></a> </div>
                                </div>
                            </section>
                            <footer className="text-left">
                                <div className="container">
                                    <div className="lang chinese pull-left"><a className="chinese" href="">繁體中文</a></div>
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