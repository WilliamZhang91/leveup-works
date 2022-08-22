import React from "react";
import "../../styles/template/template.css";
import { HelpRequests } from "../pages/teacher_dashboard/HelpRequests";
import { ProgressTracker } from "../pages/teacher_dashboard/ProgressTracker";
import { ProjectSubmissions } from "../pages/teacher_dashboard/ProjectSubmissions";
import { StudentProfiles } from "../pages/teacher_dashboard/StudentProfiles";

export const DashboardCard = ({ children }) => {
    return <>
        <div className="inner-card">
            {children}
        </div>
    </>
}