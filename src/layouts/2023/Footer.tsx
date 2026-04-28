import { ImageDir } from "@/utils/2023/config";
import { LanguageSwitcher } from "@/utils/functions";
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from "react-router-dom";
export const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t, i18n } = useTranslation('2023');
    return (
        <>
            <section className="footer" id="footer">
                <div className="footer_wrapper">
                    <div className="footer_logo">
                        <a href="#">
                            <img src={ImageDir + "images/footer_logo.png"} alt="" loading="lazy" />
                        </a>
                        <p>
                        {t('footer.copyright')}
                        </p>
                    </div>
                    <div className="footer_contact_us">
                        <p>{t('footer.contact_us')}</p>
                        <div className="footer_contact_us_phone">
                            <a href="tel:+852-28802978" target="_blank">
                                <img src={ImageDir + "images/social_media/contact_phone.png"} alt="" loading="lazy" />
                            </a>
                        </div>
                        <div className="footer_contact_us_email">
                            <a href="mailto:fintechawards@etnet.com.hk" target="_blank">
                                <img src={ImageDir + "images/social_media/contact_email.png"} alt="" loading="lazy" />
                            </a>
                        </div>
                    </div>
                    <div className="footer_social_meida">
                        <p>{t('footer.share_to')}</p>
                        <div className="footer_social_meida_facebook">
                            <a
                                href="https://www.facebook.com/sharer.php?u=http%3A%2F%2Ffintech.etnet.com.hk"
                                target="_blank"
                            >
                                <img src={ImageDir + "images/social_media/social_meida-facebook.png"} alt="" loading="lazy" />
                            </a>
                        </div>
                        <div className="footer_social_meida_linkedin">
                            <a
                                href="https://www.linkedin.com/sharing/share-offsite/?url=https://fintech.etnet.com.hk/2023/index.php"
                                target="_blank"
                            >
                                <img src={ImageDir + "images/social_media/social_meida-linkedin.png"} alt="" loading="lazy" />
                            </a>
                        </div>
                        <div className="footer_social_meida_weibo">
                            <a
                                href="https://service.weibo.com/share/share.php?url=http%3A%2F%2Ffintech.etnet.com.hk%2F%3Futm_source%3Dweibo%26utm_medium%3Dshare-message&title=Sustainability%20Drives%20Value%20in%20Green%20Finance"
                                target="_blank"
                            >
                                <img src={ImageDir + "images/social_media/social_meida-weibo.png"} alt="" loading="lazy" />
                            </a>
                        </div>
                    </div>
                    <div className="footer_pagemap">
                        <p>{t('footer.pages')}</p>
                        <a href="#awards">{t('footer.awards')}</a>
                        <a href="#judges">{t('footer.judges')}</a>
                        <a href="#winners">{t('footer.winners')}</a>
                        <a href="#highlights">{t('footer.highlights')}</a>
                        <a href="#exposures">{t('footer.exposures')}</a>
                        <a href="#past_event">{t('footer.past_events')}</a>
                        <a href="#" onClick={(event) => LanguageSwitcher(event, i18n, navigate, location)}>{t('footer.lang_opt')}</a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer