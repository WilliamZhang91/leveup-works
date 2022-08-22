import React from "react";
import "../../styles/template/template.css";

const loadingImage = "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg"

export const Loading = () => {

    return <div className="spinner">
        <img className="spinner_svg" src={loadingImage} alt="loading..."/>
    </div>
};