import { ImageDir } from "@/utils/2017/config";
import { useTranslation } from 'react-i18next';
export const highlightsInterview = () => {
    const { t } = useTranslation('2017');
    return (
        <section>
	   <img className="preload" style={{ display: 'none' }} src="images/splash-lightbox-loading.gif"/>
    <div id="pagehighlightsInterview" className="container body innerBody highlightsInterview">
            <aside className="innerPage col-md-3">
                <div>
                    <h1>{t('highlights_array.title')}</h1>
                    <ul>
                        <li><a href="highlights">{t('highlights_array.tab1')}</a> </li>
                        <li><a href="highlightsVideo">{t('highlights_array.tab2')}</a> </li>
						<li><a href="highlightsInterview">{t('highlights_array.tab3')}</a></li>
						<li><a target="_blank" href="/2017/download/NewspaperAd.pdf">{t('exposures_array.title')}</a>
						</li>
                    </ul>
                </div>
            </aside>
            <div className="col-md-9 grid highlights">
			<p className="col-md-12 col-xs-12 info">Please note that interview contents will be provided in Chinese.</p>
			<div className="row item col-md-6 col-sm-6 col-xs-12">
                <a target="_blank" href="http://www.etnet.com.hk/www/tc/news/advertorial.php?category=fintech&adid=7"></a>
                <figure>
               <img src="http://www.etnet.com.hk/www/tc/news/advertorial/2018/Fintech/images/adv7_img4.jpg" alt=""/>
                </figure>
				<figcaption>匯元通傑出「跨境支付方案」解決市場需要</figcaption>
            </div>
			<div className="row item col-md-6 col-sm-6 col-xs-12">
                <a target="_blank" href="http://www.etnet.com.hk/www/tc/news/advertorial.php?category=fintech&adid=6"></a>
                <figure>
               <img src="http://www.etnet.com.hk/www/tc/news/advertorial/2018/Fintech/images/adv6_img4.jpg" alt=""/>
                </figure>
				<figcaption>EFT傑出流動支付系統 邁向智慧城市一大步</figcaption>
            </div>
			<div className="row item col-md-6 col-sm-6 col-xs-12">
                <a target="_blank" href="http://www.etnet.com.hk/www/tc/news/advertorial.php?category=fintech&adid=5"></a>
                <figure>
               <img src="http://www.etnet.com.hk/www/tc/news/advertorial/2018/Fintech/images/adv5_img5.jpg" alt=""/>
                </figure>
				<figcaption>橋彼道開發網上融資平台	協助中小企資金周轉</figcaption>
            </div>
			<div className="row item col-md-6 col-sm-6 col-xs-12">
                <a target="_blank" href="http://www.etnet.com.hk/www/tc/news/advertorial.php?category=fintech&adid=4"></a>
                <figure>
               <img src="http://i3.ytimg.com/vi/cy6E435jGWI/maxresdefault.jpg" alt=""/>
                </figure>
				<figcaption>中國金洋證券精品銀行式服務配合金融科技迎來中港新機遇</figcaption>
            </div>
			<div className="row item col-md-6 col-sm-6 col-xs-12">
                <a target="_blank" href="http://www.etnet.com.hk/www/tc/news/advertorial.php?category=fintech&adid=3"></a>
                <figure>
               <img src="http://www.etnet.com.hk/www/tc/news/advertorial/2018/Fintech/images/adv3_img2.jpg" alt=""/>
                </figure>
				<figcaption>中銀香港「指靜脈認證」服務 開創先河</figcaption>
            </div>
			<div className="row item col-md-6 col-sm-6 col-xs-12">
                <a target="_blank" href="http://www.etnet.com.hk/www/tc/news/advertorial.php?category=fintech&adid=2"></a>
                <figure>
               <img src="http://www.etnet.com.hk/www/tc/news/advertorial/2018/Fintech/images/adv2_img5.jpg" alt=""/>
                </figure>
				<figcaption>民眾證券iBroker平台　創建證券經紀新年代</figcaption>
            </div>
			<div className="row item col-md-6 col-sm-6 col-xs-12">
                <a target="_blank" href="http://www.etnet.com.hk/www/tc/news/advertorial.php?category=fintech&adid=1"></a>
                <figure>
               <img src="http://www.etnet.com.hk/www/tc/news/advertorial/2018/Fintech/images/adv1_img2.jpg" alt=""/>
                </figure>
				<figcaption>如何解決中國跨境支付的難題，迅速打入內地市場？</figcaption>
            </div>
        </div>
        </div >
    </section >
    )
}
export default highlightsInterview;