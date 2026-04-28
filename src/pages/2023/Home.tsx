
import {scrolltoWinners, newstolater, scrolltotop} from '@/assets/2023/js/controller.js';
import { useTranslation } from 'react-i18next';
import KeyVisual from '@/components/2023/KeyVisual';
import LeadIn from '@/components/2023/LeadIn';
import Awards from '@/components/2023/Awards';
import Judges from '@/components/2023/Judges';
import Winners from '@/components/2023/Winners';
import Highlights from '@/components/2023/Highlights';
import Exposures from '@/components/2023/Exposures';
import PastEvents from '@/components/2023/PastEvents';

export const Home = () => {
    const { t } = useTranslation('2023');
    return (
        <>
        <KeyVisual />
        <LeadIn />
        <Awards />
        <Judges />
        <Winners />
        <Highlights />
        <Exposures />
        <PastEvents />

        <div id="backtotop">
            <button className="backtotopactions" onClick={scrolltotop} ></button>
        </div>
        <div id="newsAlert">
                <p>{t('announcement.title')}</p>
                <button className="newsactions" onClick={scrolltoWinners} >{t('announcement.result')}</button>
                <button className="newslater" onClick={newstolater} >{t('announcement.later')}</button>
        </div>
        </>
    )
}
export default Home;