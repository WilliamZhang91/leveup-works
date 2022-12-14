import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Axios from "axios";

export const useStudentProfiles = () => {

    const [studentProfiles, setStudentProfiles] = useState({});
    const [errorMessage, setErrorMessage] = useState("");
    const { getAccessTokenSilently } = useAuth0();

    const fetchStudentProfiles = async () => {
        const accessToken = await getAccessTokenSilently({
            audience: process.env.REACT_APP_AUDIENCE,
            scope: 'read:teacher',
        });

        return await Axios.get(process.env.REACT_APP_FETCH_ALL_STUDENTS, {
            headers: {
                authorization: `Bearer ${accessToken}`
            },
        })
            .then(res => {
                setStudentProfiles(res);
            })
            .catch(err => {
                setErrorMessage("Unable to retrieve student profiles");
                throw new Error(err);
            });
    };

    return { 
        studentProfiles, 
        errorMessage, 
        fetchStudentProfiles 
    };
};

export const useStudentProfile = () => {

    const [studentProfile, setStudentProfile] = useState({});

    const fetchStudentProfile = async (id) => {
        return await Axios.get(`http://localhost:8090/student/${id}`)
            .then(res => {
                // console.log(res);
                // console.log("fetchStudentProfile called");
                setStudentProfile(res);
                return
            })
            .catch(err => {
                throw err
            });
    };

    return { 
        studentProfile, 
        fetchStudentProfile, 
    };

};