import React, { useEffect } from "react";
import "../../../styles/pages/homepage.css";
import { useStudentProfile } from "../../Hooks/useStudentProfiles";
import { useParams } from "react-router-dom";
import { useCredentials } from "../../Hooks/useCredentials";
import { Loading } from "../../templates/Loading";
import "../../../styles/pages/homepage.css";

export const UserProfile = () => {

    const { studentProfile, fetchStudentProfile } = useStudentProfile();
    const { getIdTokenStudent, studentIdToken, setStudentIdToken } = useCredentials();
    const params = useParams();
    const scope = 'read:user';

    useEffect(() => {
        (async () => {
            const data = await getIdTokenStudent(scope);
            console.log(data) //1
            fetchStudentProfile(data && data._app_metadata.studentid);
        })();
        return () => {
            console.log("exited")
        }
    }, []);

    //setTimeout(() => {
    //    fetchStudentProfile(studentIdToken && studentIdToken._app_metadata.studentid);
    //}, 2000);
    
    console.log({secondToLast: studentIdToken})

    return <>
        {
            Object.keys(studentProfile).length == 0 ? <Loading />
                :
                <div className="profile_page">
                    <div className="profile_page_layout">
                        <div className="profile_page_inner">
                            <div>
                                <img src={studentProfile.data && studentProfile.data.picture} alt={studentProfile.data && studentProfile.data.name} />
                            </div>
                            <div>
                                <div>
                                    <span>Name:</span><span>{studentProfile.data && studentProfile.data.name}</span>
                                </div>
                                <div>
                                    <span>ID:</span><span>{studentProfile.data && studentProfile.data.studentID}</span>
                                </div>
                                <div>
                                    <span>School:</span><span>{studentProfile.data && studentProfile.data.school}</span>
                                </div>
                                <div>
                                    <span>Email:</span><span>{studentProfile.data && studentProfile.data.email}</span>
                                </div>
                                <div>
                                    <span>Phone:</span><span>{studentProfile.data && studentProfile.data.phone}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        }
    </>
};