import React, { useState, useEffect } from "react";
import Axios from "axios";

export const useProjectLibrary = () => {

    const [projectLibrary, setProjectLibrary] = useState({});
    const [progressHistory, setProgressHistory] = useState([]);
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

    const handleFilterChange = (e, index) => {
        const { value, checked, name } = e.target;
        const selection = { ...filterCategories };
        let newSelection;
        let newSelectionAdd;
        const addSelection = (category, value) => {
            const selection = { ...filterCategories };
            newSelectionAdd = value
        }
        const removeSelection = (category, value) => {
            const selection = { ...filterCategories };
            newSelection = selection[category].filter((val) => {
                return val !== value
            });
        };
        if (checked) {
            if (name === "subjectMatter1") { //maths, science, art, etc
                setIsChecked((prevState) => {
                    return { ...prevState, [value]: true }
                });
                addSelection(name, value);
                setFilterCategories((prevState) => ({
                    ...prevState,
                    [name]: [...prevState[name], newSelectionAdd]
                }));
                console.log(filterCategories)
            } else if (name === "subscription") { //free, premium
                setIsChecked((prevState) => {
                    return { ...prevState, [value]: true }
                });
                addSelection(name, value);
                setFilterCategories((prevState) => ({
                    ...prevState,
                    [name]: [...prevState[name], newSelectionAdd]
                }));
                console.log(filterCategories)
            } else if (name === "course") { //beginner, advanced, etc
                setIsChecked((prevState) => {
                    return { ...prevState, [value]: true }
                });
                addSelection(name, value);
                setFilterCategories((prevState) => ({
                    ...prevState,
                    [name]: [...prevState[name], newSelectionAdd]
                }));
                console.log(filterCategories)
            }
        } else {
            if (name === "subjectMatter1") { //maths, science, art, etc
                setIsChecked((prevState) => {
                    return { ...prevState, [value]: false }
                });
                removeSelection(name, value);
                setFilterCategories((prevState) => ({
                    ...prevState,
                    [name]: newSelection,
                }));
                console.log(filterCategories)
            } else if (name === "subscription") { //free, premium
                setIsChecked((prevState) => {
                    return { ...prevState, [value]: false }
                });
                removeSelection(name, value);
                setFilterCategories((prevState) => ({
                    ...prevState,
                    [name]: newSelection,
                }));
                console.log(filterCategories)
            } else if (name === "course") { //beginner, advanced, etc
                setIsChecked((prevState) => {
                    return { ...prevState, [value]: false }
                });
                removeSelection(name, value);
                setFilterCategories((prevState) => ({
                    ...prevState,
                    [name]: newSelection,
                }));
                console.log(filterCategories)
            }
        }
    };

    const fetchProjectLibrary = async () => {
        await Axios.get(process.env.REACT_APP_FETCH_PROJECT_LIBRARY)
            .then(res => {
                console.log({projectLibrary: res});
                setProjectLibrary(res);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const fetchProgressHistory = async () => {
        await Axios.get(process.env.REACT_APP_FETCH_PROGRESS_HISTORY)
            .then(res => {
                setProgressHistory(res.data);
                console.log({progressHistory: progressHistory})
                //res.data.map()
            })
            .catch(err => {
                console.log(err)
            });
    };

    return {
        projectLibrary,
        fetchProjectLibrary,
        isChecked,
        handleFilterChange,
        fetchProgressHistory,
        progressHistory,
    };
};