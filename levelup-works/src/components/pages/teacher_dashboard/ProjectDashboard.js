import "../../../styles/pages/homepage.css";
import { DashboardCard } from "../../templates/DashboardCard";
import { useTab } from "../../Hooks/useTab";
import { useEffect } from "react";

export const ProjectDashboard = ({ setIsDashboardOpen }) => {

    const { tabSelected, toggleTab } = useTab();

    useEffect(() => {
        setIsDashboardOpen(true);
        return () => {
            setIsDashboardOpen(false);
        };
    });

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
                            <p>LEARNING OBJECTIVES</p>
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
                            <p>VIDEO TUTORIAL</p>
                        </div>
                    </div>
                    <div onClick={() => toggleTab(4)} className={tabSelected === 4 ? "tab-selected" : null}>
                        <div>
                            <img src="images/pages/dashboard/project_submissions.png" />
                            <p>PREVIEW PROJECT</p>
                        </div>
                    </div>
                    <div onClick={() => toggleTab(5)} className={tabSelected === 5 ? "tab-selected" : null}>
                        <div>
                            <img src="images/pages/dashboard/project_library.png" />
                            <p>CHECK SUBMISSIONS</p>
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

                </DashboardCard>
            </div>
        </div>
    </>

}