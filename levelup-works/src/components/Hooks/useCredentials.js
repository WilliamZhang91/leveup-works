import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Axios from "axios";

export const useCredentials = () => {

    const [studentIdToken, setStudentIdToken] = useState({});
    const [teacherIdToken, setTeacherIdToken] = useState({});
    const { getAccessTokenSilently, isAuthenticated } = useAuth0();

    const getIdTokenStudent = async (scope) => {
        try {
            const accessToken = await getAccessTokenSilently({
                audience: process.env.REACT_APP_AUDIENCE,
                scope: scope,
            });
            console.log(accessToken)
            const idToken = await Axios.get(process.env.REACT_APP_ID_TOKEN, {
                headers: {
                    authorization: `Bearer ${accessToken}`,
                }
            });
            console.log("getIdTokenStudent called")
            return idToken.data;
        } catch (error) {
            throw error;
        };
    };

    const getIdTokenTeacher = async (scope) => {
        try {
            const accessToken = await getAccessTokenSilently({
                audience: process.env.REACT_APP_AUDIENCE,
                scope: scope,
            });
            const idToken = await Axios.get(process.env.REACT_APP_ID_TOKEN, {
                headers: {
                    authorization: `Bearer ${accessToken}`,
                }
            });
            setTeacherIdToken(idToken.data)
            console.log(accessToken);
        } catch (error) {
            throw error
        };
    };

    const getIdToken = async (scope) => {
        if (isAuthenticated) {
            try {
                const accessToken = await getAccessTokenSilently({
                    audience: process.env.REACT_APP_AUDIENCE,
                    scope: scope,
                });
                const idToken = await Axios.get(process.env.REACT_APP_ID_TOKEN, {
                    headers: {
                        authorization: `Bearer ${accessToken}`,
                    }
                });
                return idToken;
            } catch (error) {
                throw error
            };
        };
    };

    return {
        getIdTokenStudent,
        studentIdToken,
        setStudentIdToken,
        getIdTokenTeacher,
        teacherIdToken,
        setTeacherIdToken,
        getIdToken,
    };
};