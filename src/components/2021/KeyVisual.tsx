
import { ImageDir } from "@/utils/2021/config";
import { useTranslation } from 'react-i18next';
export const KeyVisual = () => {
    const { t } = useTranslation('2021');
    return (
        <header>
        <div className="jumbotron"> <img className="videoBackground" src={ImageDir+"images/header_bg/header.jpg"} alt=""/>
            <div className="container leadin">
                <div className="row">
                    <div className="col-xs-12 col-md-7">
                        <h1><span>{t('home.title')}</span></h1>
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