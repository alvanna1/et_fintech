
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
export const KeyVisual = () => {
    useEffect(() => {
        animate(); // Start animation
        triangles_degreesanimate();
    }, []);

    const { t } = useTranslation('2023');

    return (
        <section className="hero" id="hero">
            <div className="background_texture"></div>
            <div className="background_animation_contourline">
                <div className="background_animation_contourline_left">
                </div>
                <div className="background_animation_contourline_right">
                </div>
            </div>
            <h2 className="hero_header">{t('kv.title')}</h2>
            <div className="energy_circle">
                <div className="triangle_circle">
                    <div className="triangle_test">
                        <div className="triangle_testing"></div><div className="triangle_testing"></div><div className="triangle_testing"></div><div className="triangle_testing"></div><div className="triangle_testing"></div><div className="triangle_testing"></div><div className="triangle_testing"></div><div className="triangle_testing"></div><div className="triangle_testing"></div><div className="triangle_testing"></div><div className="triangle_testing"></div><div className="triangle_testing"></div><div className="triangle_testing"></div><div className="triangle_testing"></div><div className="triangle_testing"></div><div className="triangle_testing"></div><div className="triangle_testing"></div><div className="triangle_testing"></div>


                    </div>
                </div>
                <div className="level_circle">
                    <div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div><div className="radial"></div>

                </div>
                <div className="engergy_circle_line_solid"> </div>
                <div className="engergy_circle_line_dotted"> </div>
                <div className="engergy_circle_line_dotted_green"> </div>
                <div className="engergy_circle_line_dotted_icon">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" xmlSpace="preserve">
                        <g>
                            <polygon className="stoke-a" points="251.49,346.16 228.64,407.26 411.11,407.26 386.94,346.16" />
                            <polygon className="stoke-a" points="319.88,161.73 270.05,285.06 369.22,285.06" />
                            <polygon className="stoke-f" points="88.23,161.73 208.01,161.73 235.91,92.74 13.17,92.74 13.17,407.26 78.92,407.26 88.23,407.26 88.23,285.09 201.45,285.09 226.28,223.4 88.23,223.4" />
                            <polygon className="stoke-a" points="486.81,255.67 360.9,92.74 486.83,407.26" />
                        </g>
                    </svg>
                </div>
            </div>

            <div className="energy_naming">
                <div className="energy_box">
                    <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" xmlSpace="preserve">
                        <polygon className="namingline" points="487.6,198.5 210.46,198.5 194.11,176.8 12.4,176.8 2.77,186.44 2.77,198.5 2.77,201.49 2.77,208.13 2.77,313.56 12.4,323.2 487.6,323.2 497.23,313.56 497.23,208.13" />
                    </svg>
                    <div className="energy_greenpower">{t('kv.green_power')}</div>
                    <div className="energy_greenpower_name">{t('kv.green_power_desc')}</div>
                </div>
            </div>
        </section>
    )
}
export default KeyVisual;

function triangles_degreesanimate() {
    const triangles = [...document.querySelectorAll<HTMLElement>(".triangle_testing")];
    let triangles_degrees = 0;
    for (let i = 0; i < triangles.length; i++) {
        triangles_degrees += 0;
        triangles[i].style.transform = `rotate(${triangles_degrees}deg)`;
        triangles_degrees += 20;
    }
}
function animate() {
    let degrees = 90;
    const radials = [...document.querySelectorAll<HTMLElement>(".radial")];
    for (let i = 0; i < radials.length; i++) {
        degrees += 0;
        radials[i].style.transform = `rotate(${degrees}deg)`;
        degrees += 2.8125;
    }

    radials.forEach((radial, index) => {
        setTimeout(function () {
            radial.classList.add("glow");
            if (index === radials.length - 1) {
                radials.forEach((radial, index) => {
                    setTimeout(function () {
                        radial.classList.remove("glow");
                        if (index === radials.length - 1) {
                            animate();
                        }
                    }, index * 180); //  to control the speed
                });
            }
        }, index * 180); //  to control the speed
    });
}