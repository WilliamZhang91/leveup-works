import React from "react";
import "../../styles/template/template.css";
import { useProjectLibrary } from "../Hooks/useProjectLibrary";

export const ProjectFilters = ({
    filters,
}) => {

    const {
        isChecked,
        handleFilterChange,
    } = useProjectLibrary();

    let categoryArray = ["course", "subscription", "subjectMatter1"];
    let courseCategory = [];
    let subscriptionCategory = [];
    let subjectCategory = [];

    const type = (() => {
        for (let i = 0; i < categoryArray.length; i++) {
            filters.data && filters.data.map(el => {
                courseCategory.push(el.course)
                subscriptionCategory.push(el.subscription)
                subjectCategory.push(el.subjectMatter1)
            });
        };
    })();

    let courseType = [...new Set(courseCategory)];
    let subscriptionType = [...new Set(subscriptionCategory)];
    let subjectType = [...new Set(subjectCategory)];
    return <>
        <div style={{ margin: "35px 50px 35px 0", width: "75%" }}>
            <div>
                <div style={{ textDecoration: "underline", margin: "0 0 12px 0" }}>SUBSCRIPTION</div>
                {subscriptionType.map((el, i) => {

                    return (
                        <div key={Math.random() * i}>
                            <input
                                type="checkbox"
                                checked={isChecked[el]}
                                name="subscription"
                                value={el}
                                onChange={(e) => handleFilterChange(e, i)}
                            />
                            <label style={{ margin: "0 0 0 10px" }}>{el.charAt(0).toUpperCase() + el.slice(1)}</label>
                        </div>
                    )
                })}
            </div>
            <div>
                <div style={{ textDecoration: "underline", margin: "15px 0 12px 0" }}>Difficulty</div>
                {courseType.map((el, i) => {
                    return (
                        <div key={Math.random() * i}>
                            <input
                                type="checkbox"
                                checked={isChecked[el]}
                                name="course"
                                value={el}
                                onChange={(e) => handleFilterChange(e, i)}
                            />
                            <label>
                                <span style={{ margin: "0 0 0 10px" }}>{el.charAt(0).toUpperCase() + el.slice(1)}</span>
                            </label>
                        </div>
                    )
                })}
            </div>
            <div>
                <div style={{ textDecoration: "underline", margin: "20px 0 12px 0" }}>SUBJECT</div>
                {subjectType.map((el, i) => {
                    return (
                        <div key={Math.random() * i}>
                            <input
                                type="checkbox"
                                checked={isChecked[el]}
                                name="subjectMatter1"
                                value={el}
                                onChange={(e) => handleFilterChange(e, i)}
                            />
                            <label style={{ margin: "0 0 0 10px" }}>{el.charAt(0).toUpperCase() + el.slice(1)}</label>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
};