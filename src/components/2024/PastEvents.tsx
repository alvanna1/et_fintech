
import { ImageDir } from "@/utils/2024/config";
import { useTranslation } from 'react-i18next';
export const PastEvents = () => {
    const { t } = useTranslation('2024');
    const openLink = (url: string) => () => {
        window.open(url, '_blank');
    }
    return (
        <div className="past_event" id="past_event">
            <div className="title"> {t('pastevent.title')}</div>
            <div className="pastevent_wrapper">
                <div className="pastevent_table">
                    <div
                        className="pastevent_box"
                        onClick={openLink('/2022/')}
                    >
                        <div className="pastevent_box_2022">
                            <img src={ImageDir + "images/past_event/Past_event-11.png"} alt="" loading="lazy" />
                        </div>
                    </div>
                    <div
                        className="pastevent_box"
                        onClick={openLink('/2021/')}
                    >
                        <div className="pastevent_box_2021">
                            <img src={ImageDir + "images/past_event/Past_event-09.png"} alt="" loading="lazy" />
                        </div>
                    </div>
                    <div
                        className="pastevent_box"
                        onClick={openLink('/2020/')}
                    >
                        <div className="pastevent_box_2020">
                            <img src={ImageDir + "images/past_event/Past_event-07.png"} alt="" loading="lazy" />
                        </div>
                    </div>
                    <div
                        className="pastevent_box"
                        onClick={openLink('/2019/')}
                    >
                        <div className="pastevent_box_2019">
                            <img src={ImageDir + "images/past_event/Past_event-05.png"} alt="" loading="lazy" />
                        </div>
                    </div>
                    <div
                        className="pastevent_box"
                        onClick={openLink('/2018/')}
                    >
                        <div className="pastevent_box_2018">
                            <img src={ImageDir + "images/past_event/Past_event-03.png"} alt="" loading="lazy" />
                        </div>
                    </div>
                    <div
                        className="pastevent_box"
                        onClick={openLink('/2017/')}
                    >
                        <div className="pastevent_box_2017">
                            <img src={ImageDir + "images/past_event/Past_event-01.png"} alt="" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default PastEvents;
