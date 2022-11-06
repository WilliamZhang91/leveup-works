import React from "react";
import { Link } from "react-router-dom";

export const StudentProfiles = ({ tabSelected, studentProfiles }) => {

    return <>
        <div style={{ display: tabSelected === 2 ? "block" : "none" }}>
            <div className='flex-container'>
                {studentProfiles.data && studentProfiles.data.map((user, index) => (
                    <Link style={{textDecoration: "none"}} to={`profile/${user.studentID}`}  key={index}>
                        <div className='flex-item'>
                            <img className='profilePic' src={user.picture} alt={`user_${user.studentID}`}/>
                            <p className='userName'>{user.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </>
}