import { ImageDir } from "@/utils/2022/config";
import { useTranslation } from 'react-i18next';
export const Footer = () => {
    const { t } = useTranslation('2022');
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
                            <a href="winners">
                                <img className="injectable" src={ImageDir + "images/icons/winners.svg"} />
                                <span>{t('header_nav.winners')}</span>
                                <span className="New" />
                            </a>
                        </li>
                        <li>
                            <a href="/2022/exposures">
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
                                <a href="winners">
                                    <span>{t('header_nav.winners')}</span>
                                </a>
                            </li>
                            <li>
                                <a href="/2022/exposures">
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
                        <div className="logo falogo">
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
                                <a href="/2022/contact">{t('footer.contact')}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="text-left sponsors">
                <div className="container">
                    <div className="organizers">
                        {/*div class="col-xs-12 coOrganizers">
          <div class="col-xs-12 col-md-2">
              <p>Co-Organiser and FinTech Partner</p>
          </div>
          <div class="col-xs-12 col-md-10 enlarge"></div>
      </div*/}
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
                                <p>{t('footer.parner')}</p>
                            </div>
                            <div className="col-xs-12 col-md-10 s-large">
                                <a href="https://smartcity.org.hk/" target="_blank">
                                    <img src={ImageDir + "images/sponsors/SCC.png"} alt="Smart City Consortium" />
                                </a>
                            </div>
                        </div>
                        <div className="col-xs-12 coOrganizers">
                            <div className="col-xs-12 col-md-2">
                                <p>{t('footer.sponsor')}</p>
                            </div>
                            <div className="col-xs-12 col-md-10 s-large">
                                <a href="https://www2.deloitte.com/cn/en.html" target="_blank">
                                    <img src={ImageDir + "images/sponsors/Deloitte.png"} alt="Deloitte." />
                                </a>
                            </div>
                        </div>
                        <div className="col-xs-12 supportOrganization">
                            <div className="col-xs-12 col-md-2">
                                <p>{t('footer.supportOrganization')}</p>
                            </div>
                            <div className="col-xs-12 col-md-10">
                                <a href="https://www.ent-fund.org" target="_blank">
                                    <img
                                        src={ImageDir + "images/sponsors/alibaba.png"}
                                        alt="Alibaba Entrepreneurs Fund"
                                    />
                                </a>
                                <a href="https://www.bschool.cuhk.edu.hk" target="_blank">
                                    <img
                                        src={ImageDir + "images/sponsors/CUHKBS.png"}
                                        alt="CUHK Business School"
                                    />
                                </a>
                                <a href="https://dalahk.org/" target="_blank">
                                    <img
                                        src={ImageDir + "images/sponsors/DataLiteracyAssociation.png"}
                                        alt="Data Literacy Association"
                                    />
                                </a>
                                <a href="https://gbabs.hk/" target="_blank">
                                    <img
                                        src={ImageDir + "images/sponsors/GBABusinessSchool.png"}
                                        alt="GBA Business School"
                                    />
                                </a>
                                <a href="http://www.hkfec.org/" target="_blank">
                                    <img
                                        src={ImageDir + "images/sponsors/HKFEC.png"}
                                        alt="Hong Kong Federation of E-Commerce"
                                    />
                                </a>
                                <a href="https://www.hkitf.org.hk/" target="_blank">
                                    <img
                                        src={ImageDir + "images/sponsors/HKITF.png"}
                                        alt="Hong Kong Information Technology Federation (HKITF)"
                                    />
                                </a>
                                <a href="https://www.hkim.org.hk/" target="_blank">
                                    <img
                                        src={ImageDir + "images/sponsors/HKIM.png"}
                                        alt="Hong Kong Institute of Marketing"
                                    />
                                </a>
                                <a href="https://hkieca.org.hk/" target="_blank">
                                    <img
                                        src={ImageDir + "images/sponsors/HKIECA.png"}
                                        alt="Hong Kong Internet & Ecommerce Association"
                                    />
                                </a>
                                <a href="http://hkira.com/en/global/index.php" target="_blank">
                                    <img src={ImageDir + "images/sponsors/hkira.png"} alt="HKIRA" />
                                </a>
                                <a href="https://www.hkna.org/" target="_blank">
                                    <img
                                        src={ImageDir + "images/sponsors/HKNA.png"}
                                        alt="Hong Kong Netrepremeurs Association"
                                    />
                                </a>
                                <a
                                    href="http://www.hkrtia.org/"
                                    target="_blank"

                                >
                                    <img
                                        src={ImageDir + "images/sponsors/RTIA.png"}
                                        alt="Hong Kong Retail Technology Industry Association Ltd"
                                    />
                                </a>
                                <a href="https://www.hksme.hk/" target="_blank">
                                    <img src={ImageDir + "images/sponsors/hksme.png"} alt="HKSME" />
                                </a>
                                <a href="http://www.hksoe.org.hk/" target="_blank">
                                    <img src={ImageDir + "images/sponsors/hksofe.png"} alt="HKSOE" />
                                </a>
                                <a
                                    href="https://www.hk-tag.org"
                                    target="_blank"

                                >
                                    <img src={ImageDir + "images/sponsors/HKtag.png"} alt="香港科技創新促進組" />
                                </a>
                                <a
                                    href="http://www.hkrtia.org/"
                                    target="_blank"

                                >
                                    <img src={ImageDir + "images/sponsors/WTIA.png"} alt="香港無線科技商會" />
                                </a>
                                <a href="https://cftasia.org/" target="_blank">
                                    <img src={ImageDir + "images/sponsors/ifta.png"} alt="IFTA" />
                                </a>
                                <a
                                    href="http://www.iproa.org"
                                    target="_blank"

                                >
                                    <img src={ImageDir + "images/sponsors/iProA.png"} alt="互聯網專業協會" />
                                </a>
                                <a
                                    href="http://www.investhk.gov.hk/index.html"
                                    target="_blank"

                                >
                                    <img src={ImageDir + "images/sponsors/InvestHK.png"} alt="投資推廣署" />
                                </a>
                                <a
                                    href="https://www.mpfa.org.hk"
                                    target="_blank"

                                >
                                    <img
                                        src={ImageDir + "images/sponsors/Mandatory.png"}
                                        alt="強制性公積金計劃管理局"
                                    />
                                </a>
                                <a
                                    href="https://hktin.org/"
                                    target="_blank"

                                >
                                    <img src={ImageDir + "images/sponsors/TIN.png"} alt="香港科學園科培網絡" />
                                </a>
                                <a
                                    href="http://www.acmcp.org/"
                                    target="_blank"

                                >
                                    <img
                                        src={ImageDir + "images/sponsors/ACMCP.png"}
                                        alt="雲端與流動運算專業人士協會"
                                    />
                                </a>
                                <a href="https://www.cma.org.hk/" target="_blank">
                                    <img src={ImageDir + "images/sponsors/CMA.png"} alt="CMA" />
                                </a>
                                <a
                                    href="https://www.hkib.org"
                                    target="_blank"

                                >
                                    <img src={ImageDir + "images/sponsors/HKIB.png"} alt="香港銀行學會" />
                                </a>
                            </div>
                            {/*div class="col-xs-12 coOrganizers">
          <div class="col-xs-12 col-md-2">
              <p>Site Disinfection / Hand Sanitising Product Sponsor</p>
          </div>
          <div class="col-xs-12 col-md-10"><img src={ImageDir+"images/sponsors/AquaProTech.png"} alt="AquaPro+Tech"/><img src={ImageDir+"images/sponsors/Mainetti.png"} alt="Mainetti"/></div>
      </div*/}
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}
export default Footer