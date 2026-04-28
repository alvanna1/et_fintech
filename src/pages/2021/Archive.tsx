import PastEvents from '@/components/common_past_event/PastEvents';
import { ImageDir } from "@/utils/2021/config";
import { useTranslation } from 'react-i18next';
export const Archive = () => {
    const { t } = useTranslation('2021');
    return (
        <section>
            <img className="preload"  style={{ display: "none" }} src="images/splash-lightbox-loading.gif" />
            <div id="pagehighlightsPhoto" className="container body innerBody highlightsPhoto">
                <figure className="backgroundImage"> <img src={ImageDir +"images/background_archive.jpg"} alt="" /> </figure>
                <aside className="innerPage">
                    <div>
                        <h1>{t('header_nav.past_events')}</h1>
                    </div>
                </aside>
                <PastEvents />
            </div>
        </section>

    )
}
export default Archive;