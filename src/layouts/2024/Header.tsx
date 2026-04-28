import { ImageDir } from "@/utils/2024/config";
import { LanguageSwitcher } from "@/utils/functions";
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t, i18n } = useTranslation('2024');
    const isZh = location.pathname.includes('/zh');
    return (
        <>
        <header>
		<div id="HeaderWrapper">
			<div id="HeaderLogo"><img src={ImageDir+"images/FA_Logo.svg" }alt="FinTech Awards 2024 by etnet" loading="eager"/></div>
			<div id="NavWrapper">
				<nav>
                    <a href="#">{t('header_nav.awards')}</a>
                    <a href="#">{t('header_nav.judges')}</a>
                    <a href="#">{t('header_nav.winners')}</a>
                    <a href="#">{t('header_nav.past_events')}</a>
                    <a href="#" className="New">{t('header_nav.highlights')}</a>
                    <a href="#" className="New">{t('header_nav.exposures')}</a>
                    <div className="HeaderLangWrapper">
                    <a
                        href="#"
                        className={!isZh ? "Disabled" : ""}
                        onClick={(event) => {
                            if (!isZh) {
                                event.preventDefault();
                                return;
                            }
                            LanguageSwitcher(event, i18n, navigate, location);
                        }}
                    >
                        EN
                    </a>
                    <span>|</span>
                    <a
                        href="#"
                        className={isZh ? "Disabled" : ""}
                        onClick={(event) => {
                            if (isZh) {
                                event.preventDefault();
                                return;
                            }
                            LanguageSwitcher(event, i18n, navigate, location);
                        }}
                    >
                        ZH
                    </a>
                    </div>
                </nav>
			</div>
		</div>
	</header>
        </>
    )
}
export default Header