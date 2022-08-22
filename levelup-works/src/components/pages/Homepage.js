import "../../styles/pages/homepage.css";
import { SectionOne } from "./SectionOne";
import { SectionTwo } from "./SectionTwo";
import { SectionThree } from "./SectionThree";
import { SectionFour } from "./SectionFour";
import hero from "../../images/pages/homepage/hero.png";
import hero_zoomed from "../../images/pages/homepage/hero-zoomed.png";
import hero_mobile from "../../images/pages/homepage/hero-mobile.png"

export const Homepage = () => {

    return <>
        <div>
            <div className="relative">
                <img className="hero-img" src={hero} alt="hero-image" />
                <img className="hero-img-resize" src={hero_zoomed} alt="hero-zoomed-image" />
                <img className="hero-img-mobile" src={hero_mobile} alt="hero-zoomed-image" />
                <div className="inner-text">
                </div>
            </div>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
        </div>
    </>
};
