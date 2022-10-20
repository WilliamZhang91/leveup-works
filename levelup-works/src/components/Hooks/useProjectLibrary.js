import React, { useState, useEffect } from "react";
import Axios from "axios";

export const useProjectLibrary = () => {

    const [project, setProject] = useState({});
    const [projectLibrary, setProjectLibrary] = useState([]);
    const [progressHistory, setProgressHistory] = useState([]);
    const [copyProjectLibrary, setCopyProjectLibrary] = useState([])
    const [filterValues, setFilterValues] = useState({
        name: "",
        value: "",
        checked: true,
    });

    const [isChecked, setIsChecked] = useState({
        advanced: true,
        beginner: true,
        intermediate: true,
        computer_science: true,
        maths: true,
        language: true,
        art: true,
        music: true,
        free: true,
        premium: true,
    });

    const [filterCategories, setFilterCategories] = useState(
        {
            course: ["advanced", "beginner", "intermediate"],
            subjectMatter1: ["computer_science", "maths", "language", "art", "music"],
            subscription: ["free", "premium"],
        },
    );

    useEffect(() => {
    }, [isChecked]);

    const handleFilterChange = (e) => {
        const { name, value, checked } = e.target;
        setFilterValues(() => ({
            name: name,
            value: value,
            checked: checked,
        }))
        setIsChecked((prevState) => ({ ...isChecked, [value]: !prevState[value] }));
        if (!isChecked[value]) {
            setFilterCategories((prevState) => ({
                ...prevState,
                [name]: [...prevState[name], value]
            }));
        } else {
            setFilterCategories((prevState) => ({
                ...prevState,
                [name]: filterCategories[name].filter((val) => val !== value),
            }));
        };
    };

    const fetchProjectLibrary = () => {
        Axios.get(process.env.REACT_APP_FETCH_PROJECT_LIBRARY)
            .then(res => {
                setProjectLibrary(res.data);
                setCopyProjectLibrary(res.data)
            })
            .catch(err => {
                throw err;
            });
    };

    const fetchProject = (project_id) => {
        Axios.get(`http://localhost:8090/project/${project_id}`)
            .then(res => {
                console.log({project: res.data})
                setProject(res.data)
            })
            .catch(err => {
                throw err;
            })
    };

    const fetchProgressHistory = async () => {
        await Axios.get(process.env.REACT_APP_FETCH_PROGRESS_HISTORY)
            .then(res => {
                setProgressHistory(res.data);
            })
            .catch(err => {
                throw err
            });
    };

    const filter = () => {
        let query = {};
        for (let keys in filterCategories) {
            if (filterCategories[keys].constructor && Array && filterCategories[keys].length > 0) {
                query[keys] = filterCategories[keys];
            };
        };
        return query;
    };

    const filterData = async (query) => {
        const filtered = copyProjectLibrary?.filter((item) => {
            for (let key in query) {
                if (item[key] === undefined || !query[key].includes(item[key])) {
                    return false;
                }
            }
            return true;
        });
        setProjectLibrary(filtered);
        return filtered;
    };

    useEffect(() => {
        filter();
        filterData(filter());
    }, [isChecked]);

    return {
        project,
        projectLibrary,
        fetchProject,
        fetchProjectLibrary,
        isChecked,
        handleFilterChange,
        fetchProgressHistory,
        progressHistory,
        filterCategories,
        setProjectLibrary,
        filter,
        filterData,
        copyProjectLibrary,
        setCopyProjectLibrary
    };
};