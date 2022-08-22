import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../../styles/pages/homepage.css";
import { useStudentProfile } from "../../Hooks/useStudentProfiles";

export const ProfilePage = () => {

    const params = useParams();
    const { studentProfile, fetchStudentProfile } = useStudentProfile();

    useEffect(() => {
        fetchStudentProfile(+params.id);
    }, []);

    return <>
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
    </>
}