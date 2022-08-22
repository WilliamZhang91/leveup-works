import "../../styles/pages/homepage.css";
import blue_square from "../../images/pages/homepage/blue-square.png";
import animation from "../../images/pages/homepage/animation.png";
import games from "../../images/pages/homepage/games.png";
import chatbot from "../../images/pages/homepage/chatbot.png";
import augmented_reality from "../../images/pages/homepage/augmented-reality.png";
import project1 from "../../images/pages/homepage/project1.png";

export const SectionOne = () => {
    return <>
        <div className="one">
            <div className="one-width">
                <h1 className="title">What we offer</h1>
                <p className="font-styling">The Createive Problem Solving programme is a series of digital creation projects aimed to encourage self-motivation and student agency, designed by New Zealand's leading IT industry experts and schools.</p>
                <h1 className="title">What will students create?</h1>
                <div className="flex">'
                    <div className="wrapper">
                        <div className="relative">
                            <img className="blue-square" src={blue_square} />
                            <div className="inner-image" >
                                <img className="inner-image-category" src={animation} />
                                <div style={{ cursor: "pointer" }}>Animation</div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="relative">
                            <img className="blue-square" src={blue_square}  />
                            <div className="inner-image" >
                                <img className="inner-image-category" src={games} />
                                <div style={{ cursor: "pointer" }}>Games</div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="relative">
                            <img className="blue-square" src={blue_square}  />
                            <div className="inner-image" >
                                <img className="inner-image-category" src={chatbot} />
                                <div style={{ cursor: "pointer" }}>Chatbot</div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="relative">
                            <img className="blue-square" src={blue_square}  />
                            <div className="inner-image" >
                                <img className="inner-image-category" src={augmented_reality} />
                                <div style={{ cursor: "pointer" }}>AR</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img className="project-img" src={project1} />
            </div>
        </div>
    </>
};