import { ImageDir } from "@/utils/2017/config";
import { useTranslation } from 'react-i18next';
export const sponsors = () => {
    const { t } = useTranslation('2017');
    return (
        <section>
            <div className="container body innerBody">
        <aside className="innerPage col-md-3">
            <div className="row col-md-12">
                    <h1>{t('sponsors.h1')}</h1>
                </div>
            </aside>
            <div className="col-md-9 content">
                <div className="">
                    <h2 className="blank"> </h2>
                    <p>{t('sponsors.p1')}</p>
                    <p>{t('sponsors.p2')}</p>
                    <p>{t('sponsors.p3')}</p>
                    <p>{t('sponsors.p4')}</p>
                    <ul className="line narrow">
                        <li>{t('sponsors.p5')}</li>
                        <li>{t('sponsors.p6')}</li>
                        <li>{t('sponsors.p7')}</li>
                        <li>{t('sponsors.p8')}</li>
                    </ul>
                    <h2>{t('sponsors.p9')}</h2>
                    <ul className="line narrow">
                        <li>{t('sponsors.p10')}</li>
                        <li>{t('sponsors.p11')}</li>
                        <li>{t('sponsors.p12')}</li>
                    </ul>
                    <h2></h2>
                    <div className="sponsorsLogo col-xs-12 col-md-12">
                        <img className="col-xs-6 col-md-3 center-block" src={ ImageDir +"images/sponsors/sponsor_deloitte@3x.png" } alt="Deloitte"/>
                        <img className="col-xs-6 col-md-3 center-block"  src={ ImageDir +"images/sponsors/sponsor_kpmg@3x.png" } alt="KPMG"/>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default sponsors;