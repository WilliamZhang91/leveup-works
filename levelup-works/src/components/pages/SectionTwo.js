import "../../styles/pages/homepage.css";
import kids1 from "../../images/pages/homepage/kids1.png";
import kids1_overlay from "../../images/pages/homepage/kids1-overlay.png";
import kids2 from "../../images/pages/homepage/kids2.png";
import kids2_overlay from "../../images/pages/homepage/kids2-overlay.png";
import kids3 from "../../images/pages/homepage/kids3.png";
import kids3_overlay from "../../images/pages/homepage/kids3-overlay.png";
import kids4 from "../../images/pages/homepage/kids4.png";
import kids4_overlay from "../../images/pages/homepage/kids4-overlay.png";


export const SectionTwo = () => {
    return <>
        <div className="two">
            <h1 className="title" style={{ margin: "50px auto" }}>Teaching kids programming and digital skills is <span style={{ fontStyle: "italic" }}>More</span> than just writing code</h1>
            <div className="flex" style={{ justifyContent: "space-around" }}>
                <div className="relative">
                    <img className="kids-img" src={kids1} alt="kids-img1"/>
                    <div className="inner-image2"> 
                        <img className="kids-inner-image2" src={kids1_overlay} alt="kids-inner-img1"/>
                        <div>Promoting Creativity & Individuality</div>
                    </div>
                </div>
                <div className="relative">
                    <img className="kids-img" src={kids2} alt="kids-img2"/>
                    <div className="inner-image2" style={{cursor: "pointer"}}>
                        <img className="kids-inner-image2" src={kids2_overlay} alt="kids-inner-img2"/>
                        <div>Critical Thinking and Problem Solving</div>
                    </div>
                </div>
                <div className="relative">
                    <img className="kids-img" src={kids3} alt="kids-img3"/>
                    <div className="inner-image2" style={{cursor: "pointer"}}>
                        <img className="kids-inner-image2" src={kids3_overlay} alt="kids-inner-img2"/>
                        <div>Communication & Collaboration</div>
                    </div>
                </div>
                <div className="relative">
                    <img className="kids-img" src={kids4} alt="kids-img4"/>
                    <div className="inner-image2" style={{cursor: "pointer"}}>
                        <img className="kids-inner-image2" src={kids4_overlay} alt="kids-inner-img2"/>
                        <div>Technological Development & Future Focus</div>
                    </div>
                </div>
            </div>
            <div style={{ margin: "50px auto" }}>
                <h1 className="title">How our programme helps teachers and schools</h1>
                <div className="flex" style={{ justifyContent: "space-around" }}>
                    <button className="button">LEARNING PATHWAYS</button>
                    <button className="button">DIGITAL TECHNOLOGIES</button>
                    <button className="button">KEY COMPETENCIES</button>
                    <button className="button">IR4.0</button>
                </div>
            </div>
        </div>
    </>
};