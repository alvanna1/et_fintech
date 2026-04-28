import  { useEffect, useState } from 'react';
import { ImageDir } from "@/utils/2018/config";
import { Loader } from '@googlemaps/js-api-loader';
import GoogleMap from './GoogleMap';
import { useTranslation } from 'react-i18next';
const GOOGLE_MAP_API_KEY = 'AIzaSyD4VZaOFx6dHHHU9375pja0g-r19CsP86I';
export const Home = () => {
    const [loadMap, setLoadMap] = useState<boolean>(false);
    const [mapUnavailable, setMapUnavailable] = useState<boolean>(false);
    const { t } = useTranslation('2018');
    useEffect(() => {
        const previousAuthFailureHandler = (window as typeof window & { gm_authFailure?: () => void }).gm_authFailure;
        (window as typeof window & { gm_authFailure?: () => void }).gm_authFailure = () => {
            setMapUnavailable(true);
            previousAuthFailureHandler?.();
        };

        const loader = new Loader({
            apiKey: GOOGLE_MAP_API_KEY,
            version: 'weekly',
            libraries: ['geometry'],
        });
        loader.load()
            .then(() => {
                setLoadMap(true);
            })
            .catch(e => {
                console.error('Error loading Google Maps API:', e);
                setMapUnavailable(true);
            });

        return () => {
            (window as typeof window & { gm_authFailure?: () => void }).gm_authFailure = previousAuthFailureHandler;
        };
    }, []);
    return (
        <>
<header>
    <div className="jumbotron"> <img id="videoBGStill" className="videoBackground" src= { ImageDir +"images/header_bg.jpg" }alt=""/>
        <div className="container leadin">
            <div className="row">
                <div className="col-xs-12 col-md-8">
					<h1 className="text-left"><span>{t('home.title1')}</span><span>{t('home.title2')}</span><span>{t('home.title3')}</span></h1>

                </div>
            </div>
        </div>
        <div className="container">
            <div className="scroll_icon"></div>
        </div>
    </div>
</header>

<section>
    <div className="container body">
        <div className=" col-md-8 intro">
            <div className="col-md-12 text-left">
                <p>{t('home.p1')}</p>
            </div>
			<div className="col-md-12 importantNotice">
                <h2>{t('home.notice1')}</h2>
                <p><span>{t('home.notice2')}</span>{t('home.notice3')}</p>
                <p><span>{t('home.notice4')}</span>{t('home.notice5')}</p>
                <p><span>{t('home.notice6')}</span>{t('home.notice7')}</p>
            </div>
        </div>
        <aside className="importantNoticeContainer col-md-4">
            <div className="eventDetails">
                <h2>{t('home.event1')}</h2>
                <p>{t('home.event2')}<br />
                {t('home.event3')}</p>
                <p><a href="https://www.google.com/maps/place/Conrad+Hong+Kong/@22.2767271,114.1633182,17z/data=!3m1!4b1!4m5!3m4!1s0x34040067b6bd550d:0x40e92f306d56dd42!8m2!3d22.2767222!4d114.1655122" target="_blank"><span>{t('home.event4')}</span> <span className="address">{t('home.event5')}</span><span className="address">{t('home.event6')}</span></a></p>

                    {!mapUnavailable ? (!loadMap ? <div>{t('home.event7')}</div> : <GoogleMap onError={() => setMapUnavailable(true)} />) : null}
            </div>
        </aside>
    </div>
</section>
        </>

    )
}
export default Home;