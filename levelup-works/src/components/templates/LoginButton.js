import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = ({ login }) => {

    const {
        loginWithRedirect,
        isAuthenticated,
    } = useAuth0();

    return !isAuthenticated && <div style={{ height: "100%" }} onClick={() => loginWithRedirect()}>
        <div>{login}</div>
    </div>
};