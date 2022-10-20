import "../../../styles/pages/homepage.css";
import { DashboardCard } from "../../templates/DashboardCard";
import { InstructionsPage } from "../student_dashboard/InstructionsPage";
import { LearningObjectives } from "../student_dashboard/LearningObjectives";
import { TutorialPage } from "../student_dashboard/TutorialPage";
import { ProjectsPage } from "../student_dashboard/ProjectsPage";
import { SubmissionsPage } from "../student_dashboard/SubmissionsPage";
import { useTab } from "../../Hooks/useTab";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProjectLibrary } from "../../Hooks/useProjectLibrary";

export const ProjectDashboard = ({ setIsDashboardOpen }) => {

    const { tabSelected, toggleTab } = useTab();
    const { fetchProject, project } = useProjectLibrary();
    const params = useParams(); //params.id

    useEffect(() => {
        setIsDashboardOpen(true);
        fetchProject(params.id)
        return () => {
            setIsDashboardOpen(false);
        };
    }, []);

    // console.log({projectDashboard: project.projectID})

    return <>
        <div className="dashboard-layout">
            <div className="sidebar">
                <div className="tabs">
                    <section className="teacher_pic">
                        <img src="./images/profile_pic/teacher_1.png" />
                    </section>
                    <div onClick={() => toggleTab(1)} className={tabSelected === 1 ? "tab-selected" : null}>
                        <div>
                            <img src="images/pages/dashboard/progress_tracker.png" />
                            <p>GOAL</p>
                        </div>
                    </div>
                    <div onClick={() => { toggleTab(2) }}
                        className={tabSelected === 2 ? "tab-selected" : null}>
                        <div>
                            <img src="images/pages/dashboard/student_profiles.png" />
                            <p>INSTRUCTIONS</p>
                        </div>
                    </div>
                    <div onClick={() => toggleTab(3)} className={tabSelected === 3 ? "tab-selected" : null}>
                        <div>
                            <img src="images/pages/dashboard/help_requests.png" />
                            <p>TUTORIAL</p>
                        </div>
                    </div>
                    <div onClick={() => toggleTab(4)} className={tabSelected === 4 ? "tab-selected" : null}>
                        <div>
                            <img src="images/pages/dashboard/project_submissions.png" />
                            <p>PREVIEW</p>
                        </div>
                    </div>
                    <div onClick={() => toggleTab(5)} className={tabSelected === 5 ? "tab-selected" : null}>
                        <div>
                            <img src="images/pages/dashboard/project_library.png" />
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
                    />
                </DashboardCard>
            </div>
        </div>
    </>

}