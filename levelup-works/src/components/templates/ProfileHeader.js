import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export const ProfileHeader = () => {

    const { isAuthenticated } = useAuth0();

    return isAuthenticated && <div>
        <Link to="/account/user">
            <img style={{ width: "40px", height: "auto" }} src="images/profile_pic/bobby_brown.png" />
        </Link>
    </div>
}