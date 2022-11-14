import React, { useEffect } from "react";
import "../../../styles/pages/homepage.css";
import { DashboardCard } from "../../templates/DashboardCard";
import { useTab } from "../../Hooks/useTab";
import { LearningObjectives } from "./LearningObjectives";
import { InstructionsPage } from "./InstructionsPage";
import { ProjectsPage } from "./ProjectsPage";
import { SubmissionsPage } from "./SubmissionsPage";
import { TutorialPage } from "./TutorialPage";
import { useParams } from "react-router-dom";
import { useProjectLibrary } from "../../Hooks/useProjectLibrary";
import instructions from "../../../images/pages/dashboard/instructions.png";
import objectives from "../../../images/pages/dashboard/objectives.png"
import submit from "../../../images/pages/dashboard/submit.png";
import video from "../../../images/pages/dashboard/video.png";
import preview from "../../../images/pages/dashboard/project.png";

export const StudentDashboard = ({ setIsDashboardOpen, isLoggedInStudent }) => {

    const { tabSelected, toggleTab } = useTab();
    const { fetchProject, project } = useProjectLibrary();
    const params = useParams(); //params.id

    useEffect(() => {
        setIsDashboardOpen(true);
        return () => {
            setIsDashboardOpen(false);
        };
    })

    return <>
        <div className="dashboard-layout">
            <div className="sidebar">
                <div className="tabs">
                    <section className="teacher_pic">
                        <img src="/images/profile_pic/teacher_1.png" alt="profile_pic" />
                    </section>
                    <div onClick={() => toggleTab(1)}
                        className={tabSelected === 1 ? "tab-selected" : null}>
                        <div data-testid="aim">
                            <img src={objectives} alt="objectives" />
                            <p>AIM</p>
                        </div>
                    </div>
                    <div onClick={() => toggleTab(2)}
                        className={tabSelected === 2 ? "tab-selected" : null}>
                        <div data-testid="guide">
                            <img src={instructions} alt="instructions" />
                            <p>GUIDE</p>
                        </div>
                    </div>
                    <div onClick={() => toggleTab(3)} className={tabSelected === 3 ? "tab-selected" : null}>
                        <div data-testid="tutorial">
                            <img src={video} alt="tutorial" />
                            <p>TUTORIAL</p>
                        </div>
                    </div>
                    <div onClick={() => toggleTab(4)} className={tabSelected === 4 ? "tab-selected" : null}>
                        <div data-testid="project">
                            <img src={preview} alt="project" />
                            <p>PROJECT</p>
                        </div>
                    </div>
                    <div onClick={() => toggleTab(5)} className={tabSelected === 5 ? "tab-selected" : null}>
                        <div data-testid="submit">
                            <img src={submit} alt="submit" />
                            <p>SUBMIT</p>
                        </div>
                    </div>
                </div>
                <div className="links">
                    <div>
                        <p>Profile</p>
                    </div>
                    <div>
                        <p>Settings</p>
                    </div>
                    <div>
                        <p>Log out</p>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-buttons">
                    <button className="button-1">Take Screenshot</button>
                    <button className="button-2">Help Centre</button>
                    <button className="button-3">More Projects</button>
                </div>
                <DashboardCard tabSelected={tabSelected}>
                    <LearningObjectives tabSelected={tabSelected} />
                    <InstructionsPage tabSelected={tabSelected} />
                    <TutorialPage tabSelected={tabSelected} />
                    <ProjectsPage tabSelected={tabSelected} />
                    <SubmissionsPage
                        tabSelected={tabSelected}
                        student_id={params.id}
                        project_id={project.projectID}
                        isLoggedInStudent={isLoggedInStudent}
                    />
                </DashboardCard>
            </div>
        </div>
    </>
}