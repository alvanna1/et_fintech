import { LanguageSwitcher } from "@/utils/functions";
import { ImageDir } from "@/utils/2019/config";
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t, i18n } = useTranslation('2019');

    return (
<nav className="navbar absolute">
        <div className="container-fluid">
        <div className="navbar-header">
            <div className="logo"> <a href="/"> <img className="slogo" src={ImageDir+"images/logo.png" } alt="FinTech Awards 2019"/> <span>by etnet</span> </a> </div>
            <div className="menuIcon"><a id="menuToggle"><div className="hamburgerMenu"></div></a></div>
            <div className="menuitemContainer desktop">
                <ul className="menuitem">
                    <li><a href="awards">{t('header_nav.awards')}</a></li>
                    <li><a href="judges"> {t('header_nav.judges')}</a></li>
                    <li><a href="sponsors">{t('header_nav.sponsors')}</a></li>
					<li><a href="winners"> {t('header_nav.winners')}</a></li>
					<li><a href="highlights"> {t('header_nav.highlights')}</a></li>
					<li><a href="archive">{t('header_nav.past_events')}</a></li>
                </ul>
				<ul className="pull-right">
					<li className="socialBar">
						<ul>
                        <li>
                                        <a data-type="fb" className="sharetoFacebookStyle" href="https://www.facebook.com/sharer.php?u=https://fintech.etnet.com.hk/"
                                            target="_blank">
                                            <span>{t('social.fb')}</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://fintech.etnet.com.hk/2024/index.php&title=FinTech Awards 2024 - Innovating and Pioneering a Sustainable Digital Economy&source=etnet" className="sharetoLinkedinStyle" target="_blank">
                                            <span>{t('social.linkedin')}</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="sharetoLine mobile" data-type="ln" href="https://line.me/R/share?text=" target="_blank">
                                            <span> {t('social.ln')}</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="sharetoWhatsapp mobile" data-type="wa"
                                            href="whatsapp://send?text="
                                        >
                                            <span> {t('social.whatsApp')}</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="sharetoWeiboStyle" data-type="wb" href="https://service.weibo.com/share/share.php?url=http%3A%2F%2Ffintech.etnet.com.hk%2F%3Futm_source%3Dweibo%26utm_medium%3Dshare-message&title=Sustainability%20Drives%20Value%20in%20Green%20Finance"
                                            target="_blank">
                                            <span> {t('social.wb')}</span>
                                        </a>
                                    </li>
						</ul>
					</li>

                    <li className="lang chinese">
                                <a href="#" onClick={(event) => LanguageSwitcher(event, i18n, navigate, location)}>
                                {t("header_nav.lang_opt")}
                                </a>
                                </li>

				</ul>
            </div>
            <div className="menuitemContainerMobile col-md-12">
                <div className="container">
                    <ul className="menuitem">
                        <li><a href="awards">{t('header_nav.awards')}</a></li>
                        <li><a href="judges"> {t('header_nav.judges')}</a></li>
                        <li><a href="sponsors">{t('header_nav.sponsors')}</a></li>
						<li><a href="winners"> {t('header_nav.winners')}</a></li>
						<li><a href="highlights"> {t('header_nav.highlights')}</a></li>
						<li><a href="archive">{t('header_nav.past_events')}</a></li>
                    </ul>
                    <footer className="text-left">
                        <div className="container">

                            <div className="lang chinese pull-left"><a className="chinese" href="<?php echo $transalte_url; ?>">繁體中文</a></div>
					<ul className="socialBar pull-right">
						<li><a className="sharetoFacebook" href="javascript:void(0);"><span>Share to Facebook</span></a></li>
						<li><a className="sharetoLinkedin" href="javascript:void(0);"><span>Share to Linkdedin</span></a></li>
						<li><a className="sharetoLine mobile" href="javascript:void(0);"><span>Share to Line</span></a></li>
						<li><a className="sharetoWhatsapp mobile" href="javascript:void(0);"><span>Share to WhatsApp</span></a></li>
						<li><a className="sharetoWeibo" href="javascript:void(0);"><span>Share to Weibo</span></a></li>
					</ul>
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