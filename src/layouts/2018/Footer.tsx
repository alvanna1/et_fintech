import { ImageDir } from "@/utils/2018/config";
import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom";
export const Footer = () => {
    const { t } = useTranslation('2018');
    const location = useLocation();
    const basePath = location.pathname.startsWith("/2018/zh") ? "/2018/zh" : "/2018";
    return (
        <>
<section className="socialBar">
	<div className="container">
		<div className="col-xs-12">
			<span>Share to</span>
			<a className="sharetoFacebookStyle" href="https://www.facebook.com/sharer.php?u=https://fintech.etnet.com.hk/" target="_blank"></a>
                                <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://fintech.etnet.com.hk/2024/index.php&title=FinTech Awards 2024 - Innovating and Pioneering a Sustainable Digital Economy&source=etnet"className="sharetoLinkedinStyle" target="_blank"></a>
			<a className="sharetoLine mobile" ></a>
			<a className="sharetoWhatsapp mobile" ></a>
			<a className="sharetoWeiboStyle" href="https://service.weibo.com/share/share.php?url=http%3A%2F%2Ffintech.etnet.com.hk%2F%3Futm_source%3Dweibo%26utm_medium%3Dshare-message&title=Sustainability%20Drives%20Value%20in%20Green%20Finance"
                                            target="_blank"></a>
		</div>
	</div>
</section>

<footer className="text-left">
	<div className="container etnet">
		<div className="col-xs-6">
			<a href="http://www.etnet.com.hk" target="_blank"><img className="logo" src={ ImageDir+"images/sponsors/logo_etnet_25years.png" }alt="etNet 25 years"/></a>

		</div>
		<div className="col-xs-6">
			<img className="logo pull-right" src={ ImageDir+"images/sponsors/logo_fintech_dark.png" }alt="FinTech Awards 2018"/>

		</div>
	</div>
</footer>
<footer className="text-left sponsors">
<div className="container">
		<div className="organizers">
            <div className="col-xs-12 coOrganizers">
            <div className="col-xs-12 col-md-2"><p>co-organisers</p></div>
			<div className="col-xs-12 col-md-10"><a href="http://www.cyberport.hk/en" target="_blank"><img src={ ImageDir+"images/sponsors/logo_cyberport.png" }alt="Hong Kong Cyberport Management Company Limited"/></a>
				<a href="https://www.hkstp.org/en" target="_blank"><img src={ ImageDir+"images/sponsors/logo_hkstp.png" }alt="Hong Kong Science & Technology Parks Corporation"/></a></div>
            </div>
			<div className="col-xs-12 coOrganizers">
            <div className="col-xs-12 col-md-2"><p>strategic partner</p></div>
			<div className="col-xs-12 col-md-10"><a href="https://smartcity.org.hk/" target="_blank"><img src={ ImageDir+"images/sponsors/logo_scc.png" }alt="Smart City Consortium Limited"/></a></div>
            </div>
			<div className="col-xs-12 coOrganizers">
            <div className="col-xs-12 col-md-2"><p>sponsors</p></div>
			<div className="col-xs-12 col-md-10"><a href="https://www2.deloitte.com/cn/en.html" target="_blank"><img src={ ImageDir+"images/sponsors/logo_deloitte.png" }alt="Deloitte"/></a>
			<a href="https://home.kpmg/cn/en/home.html" target="_blank"><img src={ ImageDir+"images/sponsors/logo_kpmg.png" }alt="KMPG"/></a>
			<a href="https://www.pwchk.com/" target="_blank"><img src={ ImageDir+"images/sponsors/logo_pwc.png" }alt="pwc"/></a></div>
            </div>
            <div className="col-xs-12 supportOrganization">
            <div className="col-xs-12 col-md-2"><p>supporting organisations</p></div>
			<div className="col-xs-12 col-md-10">
				<a href="http://www.hkfec.org/" target="_blank"><img src={ ImageDir+"images/sponsors/logo_hkfec.png" }alt="Hong Kong Federation of E-Commerce"/></a>
                <a href="http://www.hkna.net/" target="_blank"><img src={ ImageDir+"images/sponsors/logo_hongkongnetrepremeursassociation_long.png" }alt="Hong Kong Netrepremeurs Association"/></a>
                <a href="http://www.hkrtia.org/" target="_blank"><img src={ ImageDir+"images/sponsors/logo_hkrtia.png" }alt="Hong Kong Retail Technology Industry Association Limited"/></a>
                <a href="http://www.investhk.gov.hk/index.html" target="_blank"><img src={ ImageDir+"images/sponsors/logo_investhk.png" }alt="Invest Hong Kong Fintech Hong Kong"/></a>
				<a href="https://www.iab.com/" target="_blank"><img src={ ImageDir+"images/sponsors/logo_IAB.png" }alt="iab"/></a>
				<a href="https://cftasia.org/" target="_blank"><img src={ ImageDir+"images/sponsors/logo_ifta.png" }alt="Institute of Financial Technologists of Asia"/></a>
                <a href="http://www.acmcp.org/" target="_blank"><img src={ ImageDir+"images/sponsors/logo_acmcp_long.png" }alt="The Association of Cloud and Mobile Computing Professionals"/></a> </div>
            </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 copyright">
            <p>Copyright 2018 ET Net Limited</p><p><a href={`${basePath}/contact`}>{t('footer.contact')}</a></p>
		</div>
	</div>
</footer>
        </>

    )
}
export default Footer