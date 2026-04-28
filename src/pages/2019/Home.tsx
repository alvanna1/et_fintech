import { useEffect, useState } from "react";
import KeyVisual from "@/components/2019/KeyVisual";
import { useTranslation } from 'react-i18next';
import { ImageDir } from "@/utils/2019/config";
import { Loader } from '@googlemaps/js-api-loader';
import GoogleMap from './GoogleMap';

const GOOGLE_MAP_API_KEY = 'AIzaSyD4VZaOFx6dHHHU9375pja0g-r19CsP86I';
export const Home = () => {
    const [loadMap, setLoadMap] = useState<boolean>(false);
    const [mapUnavailable, setMapUnavailable] = useState<boolean>(false);
    const { t } = useTranslation('2019');
    useEffect(() => {
        const previousAuthFailureHandler = (window as typeof window & { gm_authFailure?: () => void }).gm_authFailure;
        (window as typeof window & { gm_authFailure?: () => void }).gm_authFailure = () => {
            setMapUnavailable(true);
            previousAuthFailureHandler?.();
        };

        const loader = new Loader({
            apiKey: GOOGLE_MAP_API_KEY,
            version: 'weekly',
            libraries: ['geometry', 'marker'],
        });
        loader.load()
            .then(() => {
                setLoadMap(true);
            })
            .catch(e => {
                console.error('Error loading Google Maps API:', e);
                setMapUnavailable(true);
            });

        // import('@/assets/2022/css/popupAlert.css');
        const loadScripts = async () => {
            try {
                // await import('@/assets/2020/js/gradient.js');
                //await import('@/assets/2020/js/particles.js');
                // Now you can use Bootstrap features that depend on jQuery
            } catch (error) {
                console.error("Error loading scripts:", error);
            }
        };

        loadScripts();

        return () => {
            (window as typeof window & { gm_authFailure?: () => void }).gm_authFailure = previousAuthFailureHandler;
        };
    }, []);
    return (
        <>
            <KeyVisual />
            <section className="intro">
                <div className="container body">
                    <div className=" col-md-12">
                        <div className="col-md-12 leadin">
                            <p>{t('home.p1')}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="importantNotice">
                <div className="container body">
                    <div className=" col-md-12">
                        <div className="col-md-6 left">
                            <figure><img src={ ImageDir+"images/calender_reminder.png" }/></figure>
                            <div className="htmlBackground">
                                <div className="roundCorner"></div>
                            </div>
                        </div>
                        <div className="col-md-6 right">
                            <div>
                                <h2>{t('home.notice1')}</h2>
                                <p><span>{t('home.notice2')}</span>{t('home.notice3')}</p>
                                <p><span>{t('home.notice4')}</span>{t('home.notice5')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="importantNoticeContainer">
                <div className="container body">
                    <div id="map">
                        {!mapUnavailable && loadMap ? <GoogleMap onError={() => setMapUnavailable(true)} /> : null}
                    </div>
                    <div className=" col-md-12 ">
                        <div className="col-md-6 left">
                            <div className="eventDetails">
                                <h2>{t('home.event1')}</h2>
                                <p>{t('home.event2')}  <br /> {t('home.event3')}<br />{t('home.event4')}</p>
                                <p><a href="https://www.google.com/maps/place/The+Exchange+Auditorium,+HKEx/@22.283732,114.1560386,17z/data=!3m1!4b1!4m5!3m4!1s0x3404006370545631:0x896bb22fdd95afc0!8m2!3d22.283732!4d114.1582273" target="_blank">
                                <span>{t('home.event5')}</span>
                                <span>{t('home.event6')}</span>
                                <span className="address">{t('home.event7')}</span>
                                <span className="address">{t('home.event8')}</span></a></p>
                             </div>
                         </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;