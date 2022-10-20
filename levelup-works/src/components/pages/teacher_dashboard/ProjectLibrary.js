import "../../../styles/pages/homepage.css";
import { useProjectLibrary } from "../../Hooks/useProjectLibrary";
import { ProjectFilters } from "../../templates/ProjectFilters";
import { useEffect, useState } from "react";
import { Loading } from "../../templates/Loading";
import { Link } from "react-router-dom";

export const ProjectLibrary = () => {

    const {
        projectLibrary,
        fetchProjectLibrary,
        isChecked,
        setIsChecked,
        onChange,
        handleFilterChange,
        copyProjectLibrary,
        setCopyProjectLibrary,
    } = useProjectLibrary();

    useEffect(() => {
        fetchProjectLibrary();
    }, []);

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return <>
        {!projectLibrary ?
            <Loading />
            :
            <div className="project_page_layout">
                <div>
                    <h1 className="project_title">Projects</h1>
                    <h3 className="project_subtitle">Welcome to the Project Library. You can use the filter on the right to help you search for specific projects.</h3>
                </div>
                <div className="project_page_layout2">
                    <ProjectFilters
                        copyProjectLibrary={copyProjectLibrary}
                        setCopyProjectLibrary={setCopyProjectLibrary}
                        isChecked={isChecked}
                        setIsChecked={setIsChecked}
                        onChange={onChange}
                        handleFilterChange={handleFilterChange}
                        projectLibrary={projectLibrary}

                    />
                    <div className="projects">
                        {projectLibrary?.map((project, index) => {
                            return (
                                <div key={index} style={{ margin: "35px 50px 35px 0" }}>
                                    <Link style={{ textDecoration: "none" }} to={`/project_library/project/${project.projectID}`}>
                                        <img
                                            className="image"
                                            src={project.subject_matter3}
                                            alt={`project_${project.projectID}`}
                                        />
                                    </Link>
                                    <Link
                                        style={{ textDecoration: "none", color: "#717171" }}
                                        to={`/project_library/project/${project.projectID}`}>
                                        <h2 style={{ textAlign: "center", cursor: "pointer" }}>
                                            {project.subject_matter2}
                                        </h2>
                                    </Link >
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", margin: "100px 0 120px 0" }}>
                    <button
                        onClick={backToTop}
                        className="button-back-to-top">
                        BACK TO TOP
                    </button>
                </div>
            </div>
        }
    </>
};