import React, { useEffect } from "react";
import "../../styles/template/template.css";
import { ProjectNode } from "./ProjectNode";
import { useProjectLibrary } from "../Hooks/useProjectLibrary";
import { useStudentProfiles } from "../Hooks/useStudentProfiles";
import { Loading } from "./Loading";

export const ProgressCard = () => {

    let array = [];
    for (let i = 1; i < 16; i++) {
        array.push(i)
    }

    const {
        fetchProjectLibrary,
        projectLibrary,
        fetchProgressHistory,
        progressHistory,
    } = useProjectLibrary();

    const {
        fetchStudentProfiles,
        studentProfiles,
    } = useStudentProfiles();

    useEffect(() => {
        fetchProjectLibrary();
        fetchStudentProfiles();
        fetchProgressHistory();
    }, []);

    //console.log({ projectLibrary: projectLibrary && projectLibrary })
    const groupByKey = () => Object.values(
        progressHistory && progressHistory.reduce((res, item) => {
            const id = item["studentID"]
            const student = item["student"]
            const existing = res[id] || { ["studentID"]: id, ["student"]: student, data: [] }
            return {
                ...res,
                [id]: {
                    ...existing,
                    data: [...existing.data, item]
                }
            }
        }, {})
    );

    const groupByKeyResult = groupByKey(progressHistory && progressHistory, "studentID");
    console.log(groupByKeyResult)

    return <>
        {
            groupByKeyResult.length === 0 ? null
                :
                groupByKeyResult.map((progress) => {
                    return <>
                        <div className="progress-tracker-card">
                            <div style={{ width: "15%" }}>{progress.student}</div>

                            {
                                array.map((value) => {
                                    return progress.data.map((data) => {
                                        // value === data.projectID ? (
                                        //     <span className="project-number highlight">x</span>
                                        // ) : (
                                        //     <span className="project-number">{value}</span>
                                        // )
                                        // {
                                        return (() => {
                                            if (value === data.projectID) {
                                                console.log(`value: ${value} is equal to studentID: ${data.studentID}, projectID: ${data.projectID}`)
                                                return (
                                                    <span className="project-number highlight">{data.projectID}</span>
                                                )
                                            } else {
                                                return <span className="project-number">{value}</span>
                                            }

                                        })()
                                    })
                                })
                            }

                        </div>
                    </>
                })
        }
    </>
};