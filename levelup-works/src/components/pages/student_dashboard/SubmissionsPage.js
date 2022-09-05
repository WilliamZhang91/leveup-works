import React, { useState } from 'react';
import "../../../styles/pages/homepage.css";
import Axios from "axios";
import { FileUpload } from '../../templates/FileUpload';
import showTeacher from "../../../images/pages/dashboard/student_dashboard/submissions/showteacher.png";
import sendPhoto from "../../../images/pages/dashboard/student_dashboard/submissions/sendphoto.png";
import callTeacher from "../../../images/pages/dashboard/student_dashboard/submissions/callteacher.png";

export const SubmissionsPage = ({ tabSelected }) => {

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  console.log({ file: file })

  const fileUploadHandler = async () => {
    const formData = new FormData();
    formData.append("file", file);
    await Axios.post("http://localhost:8090/project/submit", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  return (
    <>
      <div className="dashboard-layout" style={{ display: tabSelected === 5 ? "block" : "none", color: "#7c7c83" }}>
        <div style={{ margin: "100px", display: "flex" }}>
          <div className="submissions" style={{ width: "50%" }}>
            <FileUpload
              file={file}
              setFile={setFile}
              preview={preview}
              setPreview={setPreview}
            />
            <h1>Submit Project Photo</h1>
            <h3>Take a screenshot of your finished project and upload it here.</h3>
            {
              file === null ?
                <button className="submissions-button">
                  <img src={sendPhoto} alt="send-photo" />
                  <div>Choose an image</div>
                </button>
                :
                <button className="submissions-button" onClick={fileUploadHandler}>
                  <img src={sendPhoto} alt="send-photo" />
                  <div>Send Photo</div>
                </button>
            }
          </div>
          <div className="line-in-middle"></div>
          <div className="notifactions" style={{ width: "50%" }}>
            <img src={showTeacher} className="submissions-img" alt="submissions" />
            <h1>Show your Teacher</h1>
            <h3>Click the button below to let the teacher know you are done.</h3>
            <button className="submissions-button">
              <img src={callTeacher} alt="call-teacher" />
              <div>Call Teacher</div>
            </button>
          </div>
        </div>
      </div>
    </>
  )
};
