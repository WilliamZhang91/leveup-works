import "../../styles/pages/homepage.css";
import classroom from "../../images/pages/homepage/classroom.png";

export const SectionFour = () => {
    return <>
        <div className="four">
            <div className="flex2" style={{ justifyContent: "space-between" }}>
                <img className="classroom-image" src={classroom} />
                <div>
                    <div>
                        <h1 className="title">What are you waiting for?</h1>
                        <h2 className="font-styling">Start teaching Digital Technologies today</h2>
                        <h3>If you need more information, we are happy to answer any questions you may have</h3>
                    </div>
                    <div>
                        <button className="button-section-four1">ENQUIRE NOW</button>
                        <button className="button-section-four2">SIGN UP</button>
                    </div>
                </div>
            </div>
        </div>
    </>
};