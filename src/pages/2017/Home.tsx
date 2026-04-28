import { useEffect, useState } from 'react';
import { ImageDir } from "@/utils/2017/config";
import { Loader } from '@googlemaps/js-api-loader';
import GoogleMap from './GoogleMap';
import { useTranslation } from 'react-i18next';
const GOOGLE_MAP_API_KEY = 'AIzaSyD4VZaOFx6dHHHU9375pja0g-r19CsP86I';
export const Home = () => {
    const [loadMap, setLoadMap] = useState<boolean>(false);
    const [mapUnavailable, setMapUnavailable] = useState<boolean>(false);
    const { t } = useTranslation('2017');
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
                <div className="jumbotron">

                    <img
                        id="videoBGStill"
                        className="videoBackground"
                        src={ImageDir + "images/header_bg.jpg"}
                        alt=""
                    />
                    <div className="container leadin">
                        <div className="row">
                            <div className="col-xs-12 col-md-8">
                                <h1 className="text-left">
                                    {t('home.title1')}
                                </h1>
                                <div className="btn btn-primary btn-lg">
                                    <a href="winners" role="button">
                                        {t('home.title2')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="scroll_icon" />
                    </div>
                </div>
            </header>
            <section>
                <div className="container body">
                    <div className=" col-md-8 intro">
                        <div className="col-md-12 row text-left">
                            <p>
                                {t('home.p1')}
                            </p>
                            <p>
                                {t('home.p2')}
                            </p>
                            <p>
                                {t('home.p3')}
                            </p>
                        </div>
                        <div className="col-md-12 row text-left">
                            <h2>   {t('home.p4')}</h2>
                            <ul className="line">
                                <li>
                                    {t('home.p5')}
                                </li>
                                <li>
                                    {t('home.p6')}
                                </li>
                                <li>
                                    {t('home.p7')}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <aside className="importantNotice col-md-4">
                        <div className="row col-md-12">
                            <h2>{t('home.event1')}</h2>
                            <p>
                                {t('home.event2')}
                                <br />
                                {t('home.event3')}
                            </p>
                            <p>
                                <a
                                    href="https://www.google.com.hk/maps/place/Island+Shangri-La,+Hong+Kong/@22.277116,114.164415,15z/data=!4m5!3m4!1s0x0:0x476edbf3622c83!8m2!3d22.277116!4d114.164415?sa=X&ved=0ahUKEwiO-bLji_rXAhXBfLwKHUXfC8YQ_BIIvAEwCg"
                                    target="_blank"
                                >
                                    <span> {t('home.event4')}</span>
                                    <span className="address">
                                        {t('home.event5')}
                                    </span>
                                    <span className="address"> {t('home.event6')}</span>
                                </a>
                            </p>
                            {!mapUnavailable ? (!loadMap ? <div>Loading...</div> : <GoogleMap onError={() => setMapUnavailable(true)} />) : null}
                        </div>
                        <div className="row col-md-12">
                            <h2> {t('home.notice1')}</h2>
                            <p>
                                <span>{t('home.notice2')}</span>{t('home.notice3')}
                            </p>
                            <p>
                                <span>{t('home.notice4')}</span>{t('home.notice5')}
                            </p>
                            <p>
                                <span>{t('home.notice6')}</span>{t('home.notice7')}
                            </p>
                        </div>
                    </aside>
                </div>
            </section>
        </>

    )
}
export default Home;