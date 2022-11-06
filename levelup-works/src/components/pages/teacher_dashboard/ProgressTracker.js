import React, { useEffect } from "react";
import { ProgressCard } from "../../templates/ProgressCard";
import { useProjectLibrary } from "../../Hooks/useProjectLibrary";
import { useStudentProfiles } from "../../Hooks/useStudentProfiles";

export const ProgressTracker = ({ tabSelected }) => {

    const {
        fetchProjectLibrary,
        fetchProgressHistory,
        progressHistory,
    } = useProjectLibrary();

    const {
        fetchStudentProfiles,
    } = useStudentProfiles();

    useEffect(() => {
        fetchProjectLibrary();
        fetchStudentProfiles();
        fetchProgressHistory();
    }, []);

    let array = [];
    for (let i = 1; i < 16; i++) {
        array.push(i);
    }

    const newProgressHistory = progressHistory && progressHistory.map((el) => {
        return {
            name: el.studentName,
            studentID: el.id.student_id,
            projectID: el.id.project_id,
            completed: true,
        }
    });

    const progress = newProgressHistory.reduce((acc, row) => {
        const existing = acc.find(e => e.studentID === row.studentID);
        if (!existing) return [...acc, { ...row }];

        if (Array.isArray(existing.projectID)) {
            existing.projectID.push(row.projectID);
        } else {
            existing.projectID = [existing.studentID, row.projectID]
        }
        return acc;
    }, []);

    return <>
        <div
            style={{
                display: tabSelected === 1 ? "block" : "none",
                width: "70%",
                height: "50%",
                paddingTop: "50px",
                margin: "auto"
            }}>
            {
                progress.map((el) => {
                    return <React.Fragment key={el.studentID}>
                        <ProgressCard el={el} />
                    </React.Fragment>
                })
            }
        </div>
    </>
}