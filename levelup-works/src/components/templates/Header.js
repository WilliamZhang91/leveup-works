import React, { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { LoginButton } from "./LoginButton";
import { SignUpButton } from "./SignUpButton";
import { ProfileHeader } from "./ProfileHeader";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "./LogoutButton";
import { Link } from "react-router-dom";
import { useStudentProfile } from "../Hooks/useStudentProfiles";
import "../../styles/template/template.css";
import star from "../../images/star.png";
import star2 from "../../images/star2.png";
import Axios from "axios";
import emptyAvatar from "../../images/empty_avatar.png"

export const Header = ({ isDashboardOpen }) => {

    const [showModal, setShowModal] = useState(false);
    const { getAccessTokenSilently, isAuthenticated } = useAuth0();

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const avatar =
        <img
            className="avatar"
            src={emptyAvatar}
            style={{ width: "40px", height: "auto", margin: "auto" }}
        />

    const getPrivateRoute = async () => {
        try {
            const accessToken = await getAccessTokenSilently({
                audience: process.env.REACT_APP_AUDIENCE,
                scope: 'read:user', //need to use single quotes
            });
            const response = await Axios.get(process.env.REACT_APP_GET_PRIVATE_TOKEN, {
                headers: {
                    authorization: `Bearer ${accessToken}`
                },
            });
            const idToken = await Axios.get(process.env.REACT_APP_ID_TOKEN, {
                headers: {
                    authorization: `Bearer ${accessToken}`,
                },
            });
            console.log({ response: response });
            console.log({ idToken: idToken })
            console.log({ idTokenData: idToken.data })
            console.log(accessToken);

        } catch (error) {
            console.log(error.message)
        }
    };

    return <>
        {
            showModal ? <Modal toggleModal={toggleModal} /> : null
        }
        <div className={`${isDashboardOpen ? "width white-background" : "width"}`}>
            <div className="header" data-testid="home-header">
                {
                    isDashboardOpen ?
                        <Link to="/">
                            <img
                                className="logo"
                                src={star2}
                                alt="star-logo1"
                                data-testid="dashboard-open-star"
                            />
                        </Link>
                        :
                        <Link to="/">
                            <img
                                className="logo"
                                src={star}
                                alt="star-logo2"
                                data-testid="dashboard-closed-star"
                            />
                        </Link>
                }
                <div className="nav">
                    <Link to="/" style={{ textDecoration: "none", color: "white", margin: "auto 15px" }}>
                        <h3 className="links" onClick={getPrivateRoute}>HOME</h3>
                    </Link>
                    <Link to="project_library" style={{ textDecoration: "none", color: "white", margin: "auto 15px" }}>
                        <h3 className="links">PROJECTS</h3>
                    </Link>
                    {
                        isAuthenticated ?
                            <Link to="/teacher_account/teacher_dashboard" style={{ textDecoration: "none", color: "white", margin: "auto 15px" }}>
                                <h3 className="links">TEACHERS</h3>
                            </Link>
                            :
                            <div className="links" style={{ fontSize: "19px" }}>
                                <LoginButton login={"TEACHER"} />
                            </div>
                    }
                </div>
                <div>
                    <div className={`${isDashboardOpen ? "nav none" : "nav"}`}>
                        <h3 data-testid="login" className="login">
                            <LoginButton login={avatar} data-testid="empty-avatar" />
                            <ProfileHeader />
                        </h3>
                        <h3>|</h3>
                        <h3 data-testid="register" className="login">
                            <LogoutButton />
                            <SignUpButton />
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </>
};