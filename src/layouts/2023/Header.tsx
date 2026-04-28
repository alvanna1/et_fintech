import { ImageDir } from "@/utils/2023/config";
import { LanguageSwitcher } from "@/utils/functions";
import { switchLanguage } from "@/utils/functions";
import { pop, cross } from '@/assets/2023/js/controller.js';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t, i18n } = useTranslation('2023');
/*
    const handleLanguageSwitch = (event: any) => {
        switchLanguage(event, i18n, navigate);
    }; */
    return (
        <>
        <header>
            <div className="logo"><a href="/"><img src={ImageDir+"images/FA_logo.png"} alt="" /></a></div>
            <div id="navmenu">
                <button className="Menubutton" onClick={pop}>
                    <div className="menu-icon" onClick={cross}></div>
                </button>
            </div>
            <div id="navmenulist">
                <a href="#awards">{t('header_nav.awards')}</a>
                <a href="#judges">{t('header_nav.judges')}</a>
                <a href="#winners">{t('header_nav.winners')}</a>
                <a href="#highlights">{t('header_nav.highlights')}</a>
                <a href="#exposures">{t('header_nav.exposures')}</a>
                <a href="#past_event">{t('header_nav.past_events')}</a>
              {/*   <a href="#" onClick={handleLanguageSwitch}>{t('header_nav.lang_opt')}</a> */}
                <a href="#" onClick={(event) => LanguageSwitcher(event, i18n, navigate, location)}>{t('header_nav.lang_opt')}</a>
            </div>
        </header>
        </>
    )
}
export default Header