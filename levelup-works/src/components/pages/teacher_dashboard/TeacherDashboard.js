import React, { useEffect } from "react";
import "../../../styles/pages/homepage.css";
import { DashboardCard } from "../../templates/DashboardCard";
import { useTab } from "../../Hooks/useTab";
import { useStudentProfiles } from "../../Hooks/useStudentProfiles";
import { useProjectLibrary } from "../../Hooks/useProjectLibrary";
import { Link } from "react-router-dom";
import { HelpRequests } from "./HelpRequests";
import { ProgressTracker } from "./ProgressTracker";
import { ProjectSubmissions } from "./ProjectSubmissions";
import { StudentProfiles } from "./StudentProfiles";
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useAuth0 } from "@auth0/auth0-react";
import help_request from "../../../images/pages/dashboard/help_requests.png";
import progress_tracker from "../../../images/pages/dashboard/progress_tracker.png"
import project_library from "../../../images/pages/dashboard/project_library.png";
import project_submissions from "../../../images/pages/dashboard/project_submissions.png";
import student_profiles from "../../../images/pages/dashboard/student_profiles.png"

export const TeacherDashboard = ({ setIsDashboardOpen }) => {

    const { tabSelected, toggleTab } = useTab();
    const { isAuthenticated } = useAuth0();

    const {
        studentProfiles,
        errorMessage,
        fetchStudentProfiles
    } = useStudentProfiles();

    useEffect(() => {
        setIsDashboardOpen(true);
        return () => {
            setIsDashboardOpen(false);
        };
    }, []);

    return <>
        <div className="dashboard-layout">
            <div className="sidebar">
                <div className="tabs">
                    <section className="teacher_pic">
                        <img src="./images/profile_pic/teacher_1.png" alt="profile_pic" />
                    </section>
                    <div onClick={() => toggleTab(1)}
                        className={tabSelected === 1 ? "tab-selected" : null}>
                        <div>
                            <img src={progress_tracker} alt="progress_tracker_tab" />
                            <p data-testid="progress-tracker">PROGRESS TRACKER</p>
                        </div>
                    </div>
                    <div onClick={() => {
                        toggleTab(2);
                        fetchStudentProfiles();
                    }}
                        className={
                            tabSelected === 2 ?
                                "tab-selected"
                                :
                                null
                        }
                    >
                        <div>
                            <img src={student_profiles} alt="student_profiles_tab" />
                            <p>STUDENT PROFILES</p>
                        </div>
                    </div>
                    <div onClick={() => toggleTab(3)} className={tabSelected === 3 ? "tab-selected" : null}>
                        <div>
                            <img src={help_request} alt="help_request_tab" />
                            <p>HELP REQUESTS</p>
                        </div>
                    </div>
                    <div onClick={() => toggleTab(4)} className={tabSelected === 4 ? "tab-selected" : null}>
                        <div>
                            <img src={project_submissions} alt="project_submissions_tab" />
                            <p>PROJECT SUBMISSIONS</p>
                        </div>
                    </div>
                    <div onClick={() => toggleTab(5)} className={tabSelected === 5 ? "tab-selected" : null}>
                        <div>
                            <img src={project_library} alt="project_library_tab" />
                            <Link
                                to="/project_library"
                                style={{
                                    textDecoration: "none",
                                    color: "white"
                                }}
                            >
                                <p>PROJECT LIBRARY</p>
                            </Link>
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
                <DashboardCard tabSelected={tabSelected} studentProfiles={studentProfiles}>
                    <ProgressTracker tabSelected={tabSelected} />
                    <StudentProfiles tabSelected={tabSelected} studentProfiles={studentProfiles} />
                    <HelpRequests tabSelected={tabSelected} />
                    <ProjectSubmissions tabSelected={tabSelected} />
                </DashboardCard>
            </div>
        </div>
    </>
}