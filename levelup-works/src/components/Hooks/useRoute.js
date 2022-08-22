import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const useRoute = () => {

    const [isLoggedInStudent, setIsLoggedInStudent] = useState(false);
    const [isLoggedInTeacher, setIsLoggedInTeacher] = useState(false);
    const { isAuthenticated, user } = useAuth0();

    const checkLogin = () => {
        if (isAuthenticated) {
            if (user && user._app_metadata.role === 1) {
                setIsLoggedInTeacher(true);
                console.log({ studentIsLoggedIn: isLoggedInStudent });
                console.log({ teacherIsLoggedIn: isLoggedInTeacher });
            } else if (user && user._app_metadata.role === 2) {
                setIsLoggedInStudent(true);
                console.log({ studentIsLoggedIn: isLoggedInStudent });
                console.log({ teacherIsLoggedIn: isLoggedInTeacher });
            } else {
                return;
            };
        };
    };

    return {
        isLoggedInStudent,
        setIsLoggedInStudent,
        isLoggedInTeacher,
        setIsLoggedInTeacher,
        checkLogin
    };
};