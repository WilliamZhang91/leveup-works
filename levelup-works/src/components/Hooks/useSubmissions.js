import React, { useState } from "react";
import Axios from "axios";

export const useSubmissions = () => {

    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [showModal, setShowModal] = useState({
        display: false,
        success: false,
    });

    const fileUploadHandler = async () => {
        const formData = new FormData();
        formData.append("file", file);
        await Axios.post("http://localhost:8090/project/submit", formData)
            .then((res) => {
                console.log(res)
                alert("File uploaded!")
            })
            .catch((err) => {
                alert("File upload failed")
                throw err
            });
    };

    const options = {
        headers: { "content-type": "application/json" }
    }

    const uploadHandler = async (student_id, project_id) => {
        await Axios.post(
            `http://localhost:8090/students/submit?student_id=${student_id}&project_id=${project_id}`,
            options)
            .then((res) => {
                alert("File uploaded!");
                return res;
            })
            .catch((err) => {
                alert("File not uploaded");
                return err;
            });
    };

    return {
        file,
        setFile,
        preview,
        setPreview,
        showModal,
        setShowModal,
        fileUploadHandler,
        uploadHandler
    };
};