import "../../../styles/pages/homepage.css";
import { useProjectLibrary } from "../../Hooks/useProjectLibrary";
import { ProjectFilters } from "../../templates/ProjectFilters";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const ProjectLibrary = () => {

    const {
        projectLibrary,
        fetchProjectLibrary,
        isChecked,
        setIsChecked,
        filterCategories,
        setFilterCategories,
        onChange,
        selectFilter,
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
        <div className="project_page_layout">
            <div>
                <h1 className="project_title">Projects</h1>
                <h3 className="project_subtitle">Welcome to the Project Library. You can use the filter on the right to help you search for specific projects.</h3>
            </div>
            <div className="project_page_layout2">
                <ProjectFilters
                    filters={projectLibrary && projectLibrary}
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                    onChange={onChange}
                />
                <div className="projects">
                    {projectLibrary.data && projectLibrary.data.map((project, index) => {
                        return (
                            <div key={index} style={{ margin: "35px 50px 35px 0" }}>
                                <Link style={{ textDecoration: "none" }} to="/teacher_dashboard/project_library/project_dashboard">
                                    <img
                                        className="image"
                                        src={project.subject_matter3}
                                        alt={`project_${project.projectID}`}
                                    />
                                </Link>
                                <Link style={{ textDecoration: "none", color: "#717171" }} to="/teacher_dashboard/project_library/project_dashboard">
                                    <h2 style={{ textAlign: "center", cursor: "pointer" }}>{project.subject_matter2}</h2>
                                </Link >
                            </div>
                        );
                    })};
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", margin: "100px 0 120px 0" }}>
                <button onClick={backToTop} className="button-back-to-top">BACK TO TOP</button>
            </div>
        </div>
    </>
};