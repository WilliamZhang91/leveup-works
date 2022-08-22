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
                audience: 'https://levelupworks.sample',
                scope: scope,
            });
            console.log(accessToken)
            const idToken = await Axios.get(`https://dev-qbmp2m5w.us.auth0.com/v2/userinfo`, {
                headers: {
                    authorization: `Bearer ${accessToken}`,
                }
            });
            console.log("getIdTokenStudent called")
            return idToken.data;
        } catch (error) {
            console.log(error.message)
            return null;
        };
    };

    const getIdTokenTeacher = async (scope) => {
        try {
            const accessToken = await getAccessTokenSilently({
                audience: 'https://levelupworks.sample',
                scope: scope,
            });
            const idToken = await Axios.get(`https://dev-qbmp2m5w.us.auth0.com/v2/userinfo`, {
                headers: {
                    authorization: `Bearer ${accessToken}`,
                }
            });
            setTeacherIdToken(idToken.data)
            console.log(accessToken);
        } catch (error) {
            console.log(error.message)
        };
    };

    const getIdToken = async (scope) => {
        if (isAuthenticated) {
            try {
                const accessToken = await getAccessTokenSilently({
                    audience: 'https://levelupworks.sample',
                    scope: scope,
                });
                const idToken = await Axios.get(`https://dev-qbmp2m5w.us.auth0.com/v2/userinfo`, {
                    headers: {
                        authorization: `Bearer ${accessToken}`,
                    }
                });
                return idToken;
            } catch (error) {
                console.log(error.message)
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