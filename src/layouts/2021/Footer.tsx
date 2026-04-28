import { ImageDir } from "@/utils/2021/config";
import { useTranslation } from 'react-i18next';
export const Footer = () => {
    const { t } = useTranslation('2021');
    return (
        <>
            <div className="mobilemenuitemContainer mobile">
                <ul className="bottomBar">
                    <li className="menuLeft">
                        <a href="awards">
                            <img className="injectable" src={ImageDir + "images/icons/awards.svg"} />
                            <span>{t('header_nav.awards')}</span>
                        </a>
                    </li>
                    <li className="menuCenter mainMenu">
                        <a id="menuToggle">
                            <div className="humburgerIcon">
                                <span />
                                <span />
                                <span />
                            </div>
                            <span>Menu</span>
                        </a>
                    </li>
                    <li className="menuRight">
                        <a href="winners">
                            <img className="injectable" src={ImageDir + "images/icons/winners.svg"} />
                            <span>Winners</span>
                            <span className="New" />
                        </a>
                    </li>
                </ul>
                <div className="logo">

                    <a href="/">

                        <img
                            className="slogo"
                            src={ImageDir + "images/logo.png"}
                            alt="FinTech Awards 2020"
                        />
                        <span>by etnet</span>
                    </a>
                </div>
                <div className="mainMenuItem">
                    <ul>
                        <li>
                            <a href="awards">
                                <img className="injectable" src={ImageDir + "images/icons/awards.svg"} />
                                <span>{t('header_nav.awards')}</span>
                            </a>
                        </li>
                        <li>
                            <a href="judges">
                                <img className="injectable" src={ImageDir + "images/icons/judges.svg"} />
                                <span>{t('header_nav.judges')}</span>
                            </a>
                        </li>
                        <li>
                            <a href="sponsors">
                                <img className="injectable" src={ImageDir + "images/icons/sponsors.svg"} />
                                <span>{t('header_nav.sponsors')}</span>
                            </a>
                        </li>
                        <li>
                            <a href="winners">
                                <img className="injectable" src={ImageDir + "images/icons/winners.svg"} />
                                <span>{t('header_nav.winners')}</span>
                                <span className="New" />
                            </a>
                        </li>
                        <li>
                            <a href="/2021/exposures">
                                <img className="injectable" src={ImageDir + "images/icons/exposures.svg"} />
                                <span>{t('header_nav.exposures')}</span>
                                <span className="New" />
                            </a>
                        </li>
                        <li>
                            <a href="highlights">
                                <img className="injectable" src={ImageDir + "images/icons/highlights.svg"} />
                                <span>{t('header_nav.highlights')}</span>
                                <span className="New" />
                            </a>
                        </li>
                        <li>
                            <a href="archive">
                                <img className="injectable" src={ImageDir + "images/icons/past_events.svg"} />
                                <span>{t('header_nav.past_events')}</span>
                            </a>
                        </li>
                    </ul>
                    <div className="langAndSocial">
                        <div className="lang">
                            <a
                                className="chinese"
                                href="zh"

                            >
                                <img className="injectable" src={ImageDir + "images/icons/language.svg"} />
                                <span className="chinese">繁體中文</span>
                            </a>
                        </div>
                        <div className="socialBar">
                            <ul>
                                <li>
                                    <a
                                        className="sharetoFacebook"
                                        href="#"
                                        data-type="fb"

                                    >
                                        <img className="injectable" src={ImageDir + "images/icons/facebook.svg"} />
                                        <span>{t('social.fb')}</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="sharetoLinkedin"
                                        href="#"
                                        data-type="linkedin"

                                    >
                                        <img className="injectable" src={ImageDir + "images/icons/linkedin.svg"} />
                                        <span>{t('social.linkedin')}</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="sharetoLine mobile"
                                        href="#"
                                        data-type="ln"
                                    >
                                        <img className="injectable" src={ImageDir + "images/icons/Line.svg"} />
                                        <span>{t('social.ln')}</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="sharetoWhatsapp mobile"
                                        href="#"
                                        data-type="wa"
                                    >
                                        <img className="injectable" src={ImageDir + "images/icons/whatsapp.svg"} />
                                        <span>{t('social.whatsApp')}</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="sharetoWeibo"
                                        href="#"
                                        data-type="wb"
                                    >
                                        <img className="injectable" src={ImageDir + "images/icons/sina.svg"} />
                                        <span>{t('social.wb')}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* FOOTER */}
            <footer className="etnet">
                <div className="container">
                    <div className="sitemap">
                        <ul>
                            <li>
                                <a href="awards">
                                    <span>{t('header_nav.awards')}</span>
                                </a>
                            </li>
                            <li>
                                <a href="judges">
                                    <span>{t('header_nav.judges')}</span>
                                </a>
                            </li>
                            <li>
                                <a href="sponsors">
                                    <span>{t('header_nav.sponsors')}</span>
                                </a>
                            </li>
                            <li>
                                <a href="winners">
                                    <span>{t('header_nav.winners')}</span>
                                </a>
                            </li>
                            <li>
                                <a href="/2021/exposures">
                                    <span>{t('header_nav.exposures')}</span>
                                </a>
                            </li>
                            <li>
                                <a href="highlights">
                                    <span>{t('header_nav.highlights')}</span>
                                </a>
                            </li>
                            {/*?php if(isset($show_winner) && $show_winner) {?*/}
                            {/*?php }?*/}
                            <li>
                                <a href="archive">
                                    <span>{t('header_nav.past_events')}</span>
                                </a>
                                <ul>
                                    <li>
                                        <a href="http://fintech.etnet.com.hk/2021" target="_blank">
                                            <span>2021</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://fintech.etnet.com.hk/2020" target="_blank">
                                            <span>2020</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://fintech.etnet.com.hk/2019" target="_blank">
                                            <span>2019</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://fintech.etnet.com.hk/2018" target="_blank">
                                            <span>2018</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://fintech.etnet.com.hk/2017" target="_blank">
                                            <span>2017</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="logo faLogo">
                            <img src={ImageDir + "images/logo_vertical.png"} alt="FinTech Awards 2022" />
                        </div>
                    </div>
                    <div className="copyright">
                        <a
                            className="logo etnetLogo"
                            href="http://www.etnet.com.hk"
                            target="_blank"
                        >
                            <img
                                className="logo"
                                src={ImageDir + "images/sponsors/logo_etnet.png"}
                                alt="etnet"
                            />
                        </a>
                        <div>
                            <p>{t('footer.copyright')}</p>
                            <p>
                                <a href="/2021/contact">{t('footer.contact')}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="text-left sponsors">
                <div className="container">
                    <div className="organizers">
                        <div className="col-xs-12 coOrganizers">
                            <div className="col-xs-12 col-md-2">
                                <p>{t('footer.co_organizers')}</p>
                            </div>
                            <div className="col-xs-12 col-md-10 enlarge">
                                <a href="http://www.cyberport.hk/en" target="_blank">
                                    <img src={ImageDir + "images/sponsors/Cyberport.png"} alt="Cyberport" />
                                </a>
                            </div>
                        </div>
                        <div className="col-xs-12 coOrganizers">
                            <div className="col-xs-12 col-md-2">
                                <p>{t('footer.co_organizer')}</p>
                            </div>
                            <div className="col-xs-12 col-md-10 enlarge">
                                <a href="https://www.hkstp.org/en" target="_blank">
                                    <img src={ImageDir + "images/sponsors/HKSTP-zh.png"} alt="HKSTP" />
                                </a>
                            </div>
                        </div>
                        <div className="col-xs-12 coOrganizers">
                            <div className="col-xs-12 col-md-2">
                                <p>{t('footer.knowledge_parner')}</p>
                            </div>
                            <div className="col-xs-12 col-md-10 s-large">
                                <a href="https://www.pwchk.com" target="_blank">
                                    <img src={ImageDir + "images/sponsors/pwc.png"} alt="pwc.png" />
                                </a>
                            </div>
                        </div>
                <div className="col-xs-12 coOrganizers">
                    <div className="col-xs-12 col-md-2">
                        <p>{t('footer.parner')}</p>
                    </div>
                    <div className="col-xs-12 col-md-10 s-large"><a href="https://www.ey.com/en_cn" target="_blank"><img src={ImageDir +"images/sponsors/EY.png" } alt="EY"/></a><a href="https://home.kpmg/cn/en/home.html" target="_blank"><img src={ImageDir +"images/sponsors/KPMG.png"}  alt="KPMG"/></a><a href="https://smartcity.org.hk/" target="_blank"><img src={ImageDir +"images/sponsors/SCC.png"}  alt="Smart City Consortium"/></a></div>
                </div>
                <div className="col-xs-12 coOrganizers">
                    <div className="col-xs-12 col-md-2">
                        <p>{t('footer.sponsor')}</p>
                    </div>
                    <div className="col-xs-12 col-md-10 xs-large"><a href="https://www2.deloitte.com/cn/en.html" target="_blank"><img src={ImageDir +"images/sponsors/Deloitte.png" } alt="Deloitte."/></a><a href="http://www.szqh.com.cn" target="_blank"><img src={ImageDir +"images/sponsors/QianHai.png" } alt="QianHai"/></a></div>
                </div>
                <div className="col-xs-12 supportOrganization">
                    <div className="col-xs-12 col-md-2">
                        <p>{t('footer.supportOrganization')}</p>
                    </div>
                    <div className="col-xs-12 col-md-10"><a href="https://www.bschool.cuhk.edu.hk" target="_blank"><img src={ImageDir +"images/sponsors/CUHKBS.png" } alt="CUHK Business School"/></a><a href="#" target="_blank"><img src={ImageDir +"images/sponsors/GHMGBACCTA.png"}  alt="Guangdong-Hong Kong-Macao Greater Bay Area Culture, Creative and Technology Alliance"/></a><a href="http://www.hkfec.org/" target="_blank"><img src={ImageDir +"images/sponsors/HKFEC.png"}  alt="Hong Kong Federation of E-Commerce"/></a><a href="#" target="_blank"><img src={ImageDir +"images/sponsors/HKIECA.png" } alt="Hong Kong Internet & Ecommerce Association"/></a><a href="http://www.hkna.net/" target="_blank"><img src={ImageDir +"images/sponsors/HKNA.png" } alt="Hong Kong Netrepremeurs Association"/></a><a href="https://www.hk-tag.org" target="_blank"><img src={ImageDir +"images/sponsors/HKtag.png" } alt="Hong Kong Technology Advancement Group"/></a><a href="http://www.hkrtia.org/" target="_blank"><img src={ImageDir +"images/sponsors/RTIA.png"}  alt="Hong Kong Retail Technology Industry Association Ltd"/></a><a href="http://www.hkrtia.org/" target="_blank"><img src={ImageDir +"images/sponsors/WTIA.png" } alt="Hong Kong Wireless Technology Industry Association"/></a><a href="https://www.iab.com/" target="_blank"><img src={ImageDir +"images/sponsors/iab.png"}  alt="Interactive Advertising Bureau"/></a><a href="http://www.iproa.org" target="_blank"><img src={ImageDir +"images/sponsors/iProA.png"}  alt="Internet Professional Association"/></a><a href="http://www.investhk.gov.hk/index.html" target="_blank"><img src={ImageDir +"images/sponsors/InvestHK.png"}  alt="Invest Hong Kong"/></a><a href="https://www.mpfa.org.hk/en" target="_blank"><img src={ImageDir +"images/sponsors/Mandatory.png" } alt="Mandatory Provident Fund Schemes Authority"/></a><a href="http://www.rfidgcc.org/?fbclid=IwAR3Y4BOQfZF7d4ebKRpuwdmeoYu__Cy9dUBV-fUR3aN5qC2fkgkV-rnLs4o#home" target="_blank"><img src={ImageDir +"images/sponsors/rfid.png"}  alt="RFID"/></a><a href="https://www.startmeup.hk" target="_blank"><img src={ImageDir +"images/sponsors/startmeup.png"}  alt="StartmeupHK"/></a><a href="http://www.acmcp.org/" target="_blank"><img src={ImageDir +"images/sponsors/TIN.png"}  alt="Technology Incubation Network"/></a><a href="http://www.acmcp.org/" target="_blank"><img src={ImageDir +"images/sponsors/ACMCP.png" } alt="The Association of Cloud and Mobile Computing Professionals"/></a><a href="https://www.hkib.org" target="_blank"><img src={ImageDir +"images/sponsors/HKIB.png"}  alt="Hong Kong Institute of Bankers"/></a><a href="https://www.hkineda.com" target="_blank"><img src={ImageDir +"images/sponsors/HKINED.png"} alt="The Hong Kong Independent Non-Executive Director Association Limited"/></a></div>
                </div>
                        </div>
                    </div>

            </footer>
        </>

    )
}
export default Footer