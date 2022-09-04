import "../../../styles/pages/homepage.css";
import objective1 from "../../../images/pages/dashboard/student_dashboard/learning_objectives/objective1.png";
import objective2 from "../../../images/pages/dashboard/student_dashboard/learning_objectives/objective2.png";
import objective3 from "../../../images/pages/dashboard/student_dashboard/learning_objectives/objective3.png";
import objective1side from "../../../images/pages/dashboard/student_dashboard/learning_objectives/objective1side.png";
import objective2side from "../../../images/pages/dashboard/student_dashboard/learning_objectives/objective2side.png";
import objective3side from "../../../images/pages/dashboard/student_dashboard/learning_objectives/objective3side.png";



export const LearningObjectives = ({ tabSelected }) => {
    return <>
        <div className="dashboard-layout" style={{ display: tabSelected === 1 ? "block" : "none" }}>
            <div style={{ margin: "35px" }}>
                <div className="title-font">Explore Scratch Blocks</div>
                <div style={{ textAlign: "center" }}>Learn the basic function of some basic scratch blocks such as "say", "wait", "go to", and "hide".</div>
                <div className="teacher_pic">
                    <div>
                        <h2>Look Blocks</h2>
                        <img src={objective1} className="img-blocks" />
                    </div>
                    <img src={objective1side} className="img-blocks-side" />
                    <div>
                        <h2>Control Blocks</h2>
                        <img src={objective2} className="img-blocks" />
                    </div>
                    <img src={objective2side} className="img-blocks-side" />
                    <div>
                        <h2>Motion Blocks</h2>
                        <img src={objective3} className="img-blocks" />
                    </div>
                    <img src={objective3side} className="img-blocks-side" />
                </div>
            </div>
        </div>
    </>
}