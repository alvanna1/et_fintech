
import { ImageDir } from "@/utils/2019/config";
import { useTranslation } from 'react-i18next';
export const KeyVisual = () => {
    const { t } = useTranslation('2019');
    return (
        <header>
            <div className="jumbotron"> <img className="videoBackground sky" src={ImageDir + "images/header_bg/sky_background.jpg"} alt="" />
                <img className="videoBackground bakground_building" src={ImageDir + "images/header_bg/bakground_building.png"} alt="" />
                <img className="videoBackground building" src={ImageDir + "images/header_bg/building.png"} alt="" />
                <img className="videoBackground traffic_back" src={ImageDir + "images/header_bg/traffic_back.png"} alt="" />
                <img className="videoBackground harbour" src={ImageDir + "images/header_bg/harbour.png"} alt="" />
                <img className="videoBackground traffic_front" src={ImageDir + "images/header_bg/traffic_front.png"} alt="" />
                <img className="videoBackground water" src={ImageDir + "images/header_bg/water.png"} alt="" />
                <div className="container leadin">
                    <div className="row">
                        <div className="col-xs-12">
                            <h1><span> {t('home.title')}</span></h1>
                        </div>
                    </div>
                </div>
                <div className="container scroll_icon">
                    <div></div>
                </div>
            </div>
        </header>
    )
}
export default KeyVisual;