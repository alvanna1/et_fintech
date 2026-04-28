import { ImageDir } from "@/utils/2024/config";
import { LanguageSwitcher } from "@/utils/functions";
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from "react-router-dom";
export const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t, i18n } = useTranslation('2024');
    const isZh = location.pathname.includes('/zh');
    return (
        <>
        <footer>
		<div id="LogoContainer">
			<div className="MainLogo">
				<p>{t('footer.organiser')}</p>
				<div><img src={ ImageDir+"images/logo/etnet.png"} alt="etnet - FinTech Awards 2024 Organiser" /></div>
				<p>{t('footer.co_organizers')}</p>
				<div><img src={ ImageDir+"images/logo/cyberport.png"} alt="Cyberport - Co-organiser and FinTech Partner" /></div>
				<p>{t('footer.co_organizer')}</p>
				<div><img src={ ImageDir+"images/logo/hkstp.png"} alt="HKSTP - Co-organiser" /></div>
				<p>{t('footer.parner')}</p>
				<div><img src={ ImageDir+"images/logo/scc.png"} alt="SCC - Strategic Partner" /></div>
				<p>{t('footer.sponsor')}</p>
				<div><img src={ ImageDir+"images/logo/oracle.png"} alt="Oracle NetSuite - Sponsor" /></div>
			</div>
			<div className="SupportingWrapper">
			  <p>{t('footer.supportOrganization')}</p>
				<div><img src={ ImageDir+"images/logo/friendofearth.png"} alt="Friend of the Earth - Supporting Organisation" /></div>
				<div><img src={ ImageDir+"images/logo/hkim.png"} alt="Hong Kong Institute of Marketing - Supporting Organisation" /></div>
				<div><img src={ ImageDir+"images/logo/rtia.png"} alt="RTIA - Supporting Organisation" /></div>
				<div><img src={ ImageDir+"images/logo/hksme.png"} alt="HKSME - Supporting Organisation" /></div>
				<div><img src={ ImageDir+"images/logo/hktag.png"} alt="HKtag - Supporting Organisation" /></div>
				<div><img src={ ImageDir+"images/logo/poly.png"} alt="Hong Kong Polytechnic University - Supporting Organisation" /></div>
				<div><img src={ ImageDir+"images/logo/mpfa.png"} alt="MPFA - Supporting Organisation" /></div>
				<div><img src={ ImageDir+"images/logo/cloud.png"} alt="The Association of Cloud and Mobile Computing Professionals - Supporting Organisation" /></div>
				<div><img src={ ImageDir+"images/logo/cma.png"} alt="The Chinese Manufacturers' Association of Hong Kong - Supporting Organisation" /></div>
				<div><img src={ ImageDir+"images/logo/hkined.png"} alt="HKINED - Supporting Organisation" /></div>
				<div><img src={ ImageDir+"images/logo/hkib.png"} alt="HKiB - Supporting Organisation" /></div>
				<div><img src={ ImageDir+"images/logo/cesgp.png"} alt="CESGP - Supporting Organisation" /></div>
			</div>
		</div>
		<div id="FooterBlue">
			<div id="FooterEndLogo"><img src={ ImageDir+"images/footer.png"} alt="FinTech Awards 2024 by etnet" /></div>
            <div className="FooterPastEventWrapper">
				<p>{t('footer.past_events')}</p>
				<a href="/2017" target="_blank">2017</a><a href="/2018" target="_blank">2018</a><a href="/2019" target="_blank">2019</a><a href="/2020" target="_blank">2020</a><a href="/2021" target="_blank">2021</a><a href="/2022" target="_blank">2022</a><a href="/2023" target="_blank">2023</a>
			</div>
			<div id="FooterSNSContainer">
				<div className="FooterSNSWrapper">
					<p>{t('footer.contact_us')}</p>
					<a href="tel:+852-28802978" target="_blank"><img src={ ImageDir+"images/sns/phone.svg" }alt="Contact us by phone" /></a>
					<a href="mailto:fintechawards@etnet.com.hk" target="_blank"><img src={ ImageDir+"images/sns/email.svg"} alt="Contact us by email" /></a>
				</div>
				<div className="FooterSNSWrapper">
					<p>{t('footer.share_to')}</p>
					<a href="https://www.facebook.com/sharer.php?u=https://fintech.etnet.com.hk/2024/index.php" target="_blank"><img src={ ImageDir+"images/sns/fb.svg"} alt="Share on Facebook" /></a>
					<a href="https://www.linkedin.com/sharing/share-offsite/?url=https://fintech.etnet.com.hk/2024/index.php&title=FinTech Awards 2024 - Innovating and Pioneering a Sustainable Digital Economy&source=etnet" target="_blank"><img src={ ImageDir+"images/sns/linkin.svg"} alt="Share on LinkedIn" /></a>
					<a href="https://service.weibo.com/share/share.php?url=https://fintech.etnet.com.hk/2024/index.php&title=Innovating and Pioneering a Sustainable Digital Economy" target="_blank"><img src={ ImageDir+"images/sns/weibo.svg"} alt="Share on Weibo" /></a>
				</div>
				<div className="FooterMenuWrapper">
					<a href="#">{t('header_nav.awards')}</a>
					<a href="#">{t('header_nav.judges')}</a>
					<a href="#">{t('header_nav.winners')}</a>
					<a href="#">{t('header_nav.past_events')}</a>
					<a href="#" className="New">{t('header_nav.highlights')}</a>
					<a href="#" className="New">{t('header_nav.exposures')}</a>
                    <div className="FooterLangWrapper">
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
				</div>
				<p id="FooterCopyright">{t('footer.copyright')}</p>
			</div>
		</div>
	</footer>
        </>
    )
}
export default Footer