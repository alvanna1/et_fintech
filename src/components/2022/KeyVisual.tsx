
import { useEffect } from "react";
import { ImageDir } from "@/utils/2022/config";
export const KeyVisual = () => {
    useEffect(() => {

    }, []);
    return (
        <header>
            <div className="jumbotron">
                <canvas id="gradient-canvas" data-js-darken-top="" data-transition-in="" />
                <img className="noise" src={ImageDir + "images/noise.png"} />
                <div className="FAKV">
                    <div>
                        <h1>
                            <span>Stepping into the Metaverse</span>
                        </h1>
                    </div>
                    <div>
                        <div className="FA2022_graphic">

                            <img src={ImageDir + "images/header_bg/FA_2022_2.png"} />
                            <div className="FaBallOut">
                                <div className="FAball FAballAnimate">
                                    <div className="FAball2 FAballAnimate" />
                                </div>
                            </div>
                            <div className="FAballShadow FAballAnimate" />
                        </div>
                    </div>
                </div>
                <figure className="circle" />
                <figure className="circle_R2" />
                <figure className="circle_L1" />
                <figure className="circle_L2" />
                <div className="container scroll_icon">
                    <div />
                </div>
            </div>
        </header>
    )
}
export default KeyVisual;