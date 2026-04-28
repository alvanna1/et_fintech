import { ImageDir } from "@/utils/2017/config";
import { useLocation } from "react-router-dom";
export const Footer = () => {
    const location = useLocation();
    const basePath = location.pathname.startsWith("/2017/zh") ? "/2017/zh" : "/2017";
    return (
        <>
            <section className="socialBar">
                <div className="container">
                    <div className="col-xs-12">
                        <span>Share to</span>
                        <a className="sharetoFacebookStyle" href="https://www.facebook.com/sharer.php?u=https://fintech.etnet.com.hk/" target="_blank"></a>
                        <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://fintech.etnet.com.hk/2024/index.php&title=FinTech Awards 2024 - Innovating and Pioneering a Sustainable Digital Economy&source=etnet" className="sharetoLinkedinStyle" target="_blank"></a>
                        <a className="sharetoLine mobile" ></a>
                        <a className="sharetoWhatsapp mobile" ></a>
                        <a className="sharetoWeiboStyle" href="https://service.weibo.com/share/share.php?url=http%3A%2F%2Ffintech.etnet.com.hk%2F%3Futm_source%3Dweibo%26utm_medium%3Dshare-message&title=Sustainability%20Drives%20Value%20in%20Green%20Finance"
                            target="_blank"></a>
                    </div>
                </div>
            </section>
            <footer className="text-left">
                <div className="container etnet">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <img
                            className="logo"
                            src={ImageDir + "images/logo-light.png"}
                            alt="FinTech Awards 2017"
                        />
                    </div>
                    <div className="col-xs-12 col-md-12 row organizers">
                        <div className="col-xs-12 col-sm-3 col-md-3 organizer">
                            <p>organizer</p>
                            <a href="http://www.etnet.com.hk/" target="_blank">
                                <img
                                    className="logo"
                                    src={ImageDir + "images/logo_etNet@3x.png"}
                                    alt="ET Net Limited"
                                />
                            </a>
                        </div>
                        <div className="col-xs-12 col-sm-9 col-md-9 coOrganizers">
                            <p>co-organizers</p>
                            <a href="http://www.cyberport.hk/en" target="_blank">
                                <img
                                    src={ImageDir + "images/sponsors/logo_cyberport@3x.png"}
                                    alt="Hong Kong Cyberport Management Company Limited"
                                />
                            </a>
                            <a href="https://www.hkstp.org/en" target="_blank">
                                <img
                                    src={ImageDir + "images/sponsors/logo_hkstp@3x.png"}
                                    alt="Hong Kong Science and Technology Parks Corporation"
                                />
                            </a>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 supportOrganization">
                            <p>supporting organizations</p>
                            <a href="https://www.hkna.net/" target="_blank">
                                <img
                                    src={ImageDir + "images/sponsors/logo_hongkongnetrepremeursassociation_long@3x.png"}
                                    alt="Hong Kong Netrepremeurs Association"
                                />
                            </a>
                            <a href="http://www.hkrtia.org/" target="_blank">
                                <img
                                    src={ImageDir + "images/sponsors/logo_hkrtia@3x.png"}
                                    alt="Hong Kong Retail Technology Industry Association Limited"
                                />
                            </a>
                            <a href="http://www.investhk.gov.hk/index.html" target="_blank">
                                <img
                                    src={ImageDir + "images/sponsors/logo_investhk@3x.png"}
                                    alt="Invest Hong Kong"
                                />
                            </a>
                            <a href="http://www.iproa.org/" target="_blank">
                                <img
                                    src={ImageDir + "images/sponsors/logo_iproa@3x.png"}
                                    alt="Internet Professional Association"
                                />
                            </a>
                            <a href="https://nextmoney.org/" target="_blank">
                                <img src={ImageDir + "images/sponsors/logo_nextmoney@3x.png"} alt="Next Money" />
                            </a>
                            <a href="https://smartcity.org.hk/" target="_blank">
                                <img
                                    src={ImageDir + "images/sponsors/logo_scc@3x.png"}
                                    alt="Smart City Consortium Limited"
                                />
                            </a>
                            <a href="https://www.fintechsupercharger.com/" target="_blank">
                                <img
                                    src={ImageDir + "images/sponsors/logo_supercharger@3x.png"}
                                    alt="SuperCharger"
                                />
                            </a>
                            <a href="http://www.acmcp.org/" target="_blank">
                                <img
                                    src={ImageDir + "images/sponsors/logo_acmcp_long@3x.png"}
                                    alt="The Association of Cloud and Mobile Computing Professionals"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 copyright">
                        <p>Copyright 2017 ET Net Limited</p>{" "}
                        <p>
                            <a href={`${basePath}/contact`}>Contact Us</a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer