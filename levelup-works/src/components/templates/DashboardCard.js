import React from "react";
import "../../styles/template/template.css";

export const DashboardCard = ({ children }) => {
    return <>
        <div className="inner-card">
            {children}
        </div>
    </>
}