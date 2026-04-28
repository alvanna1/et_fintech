import { LanguageSwitcher } from "@/utils/functions";
import { ImageDir } from "@/utils/2019/config";
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t, i18n } = useTranslation('2019');
    const basePath = location.pathname.startsWith("/2019/zh") ? "/2019/zh" : "/2019";
    const lastScrollRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (!navbar || navbar.classList.contains('menuOpen')) return;

            const currentScroll = window.scrollY;
            const lastScroll = lastScrollRef.current;
            if (Math.abs(lastScroll - currentScroll) <= 5) return;

            if (currentScroll < lastScroll) {
                document.body.classList.remove('stickyLeave');
                document.body.classList.add('sticky');
            } else {
                document.body.classList.add('stickyLeave');
                document.body.classList.remove('sticky');
            }

            lastScrollRef.current = currentScroll;

            if (currentScroll < 50) {
                document.body.classList.remove('sticky');
                document.body.classList.remove('stickyLeave');
            }
        };

        lastScrollRef.current = window.scrollY;
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.classList.remove('sticky');
            document.body.classList.remove('stickyLeave');
        };
    }, [location.pathname]);

    return (
        <nav className="navbar absolute">
            <div className="container-fluid">
                <div className="navbar-header">
                    <div className="logo">
                        <a href="/">
                            <img className="slogo" src={ImageDir + "images/logo.png"} alt="FinTech Awards 2019" />
                            <span>by etnet</span>
                        </a>
                    </div>

                    <div className="menuIcon">
                        <a id="menuToggle" className="bg-transparent border-0 p-0">
                            <div className="hamburgerMenu"></div>
                        </a>
                    </div>

                    <div className="menuitemContainer desktop">
                        <ul className="menuitem">
                            <li><a href={`${basePath}/awards`}>{t('header_nav.awards')}</a></li>
                            <li><a href={`${basePath}/judges`}>{t('header_nav.judges')}</a></li>
                            <li><a href={`${basePath}/sponsors`}>{t('header_nav.sponsors')}</a></li>
                            <li><a href={`${basePath}/winners`}>{t('header_nav.winners')}</a></li>
                            <li><a href={`${basePath}/highlights`}>{t('header_nav.highlights')}</a></li>
                            <li><a href={`${basePath}/archive`}>{t('header_nav.past_events')}</a></li>
                        </ul>

                        <ul className="pull-right">
                            <li className="socialBar">
                                <ul>
                                    <li>
                                        <a
                                            data-type="fb"
                                            className="sharetoFacebookStyle"
                                            href="https://www.facebook.com/sharer.php?u=https://fintech.etnet.com.hk/"
                                            target="_blank" rel="noopener noreferrer"
                                        >
                                            <span>{t('social.fb')}</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.linkedin.com/sharing/share-offsite/?url=https://fintech.etnet.com.hk/2024/index.php&title=FinTech Awards 2024 - Innovating and Pioneering a Sustainable Digital Economy&source=etnet"
                                            className="sharetoLinkedinStyle"
                                            target="_blank" rel="noopener noreferrer"
                                        >
                                            <span>{t('social.linkedin')}</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="sharetoLine mobile"
                                            data-type="ln"
                                            href="https://line.me/R/share?text=https://fintech.etnet.com.hk/"
                                            target="_blank" rel="noopener noreferrer"
                                        >
                                            <span>{t('social.ln')}</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="sharetoWhatsapp mobile"
                                            data-type="wa"
                                            href="https://api.whatsapp.com/send?text=https://fintech.etnet.com.hk/"
                                            target="_blank" rel="noopener noreferrer"
                                        >
                                            <span>{t('social.whatsApp')}</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="sharetoWeiboStyle"
                                            data-type="wb"
                                            href="https://service.weibo.com/share/share.php?url=http%3A%2F%2Ffintech.etnet.com.hk%2F%3Futm_source%3Dweibo%26utm_medium%3Dshare-message&title=Sustainability%20Drives%20Value%20in%20Green%20Finance"
                                            target="_blank" rel="noopener noreferrer"
                                        >
                                            <span>{t('social.wb')}</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="lang chinese">
                                <a
                                    onClick={(event) => LanguageSwitcher(event, i18n, navigate, location)}
                                    className="bg-transparent border-0 text-blue-500"
                                >
                                    <span>{t("header_nav.lang_opt")}</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="menuitemContainerMobile col-md-12">
                        <div className="container">
                            <ul className="menuitem">
                                <li><a href={`${basePath}/Awards`}>{t('header_nav.awards')}</a></li>
                                <li><a href={`${basePath}/judges`}>{t('header_nav.judges')}</a></li>
                                <li><a href={`${basePath}/sponsors`}>{t('header_nav.sponsors')}</a></li>
                                <li><a href={`${basePath}/winners`}>{t('header_nav.winners')}</a></li>
                                <li><a href={`${basePath}/highlights`}>{t('header_nav.highlights')}</a></li>
                                <li><a href={`${basePath}/archive`}>{t('header_nav.past_events')}</a></li>
                            </ul>

                            <footer className="text-left">
                                <div className="container">
                                    {/* Language switcher */}
                                    <div className="lang chinese pull-left">
                                        <button
                                            onClick={(event) => LanguageSwitcher(event, i18n, navigate, location)}
                                            className="bg-transparent border-0 text-blue-500"
                                        >
                                            繁體中文
                                        </button>
                                    </div>

                                    {/* Social Links */}
                                    <ul className="socialBar pull-right">
                                        <li><a href="#" onClick={(e) => e.preventDefault()}><span>Share to Facebook</span></a></li>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}><span>Share to LinkedIn</span></a></li>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}><span>Share to Line</span></a></li>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}><span>Share to WhatsApp</span></a></li>
                                        <li><a href="#" onClick={(e) => e.preventDefault()}><span>Share to Weibo</span></a></li>
                                    </ul>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;