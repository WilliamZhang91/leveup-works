import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { Header } from './components/templates/Header';
import { Footer } from './components/templates/Footer';
import { Homepage } from './components/pages/Homepage';
import { TeacherDashboard } from "./components/pages/teacher_dashboard/TeacherDashboard";
import { StudentDashboard } from "./components/pages/student_dashboard/StudentDashboard";
import { ProfilePage } from "./components/pages/teacher_dashboard/ProfilePage";
import { ProjectLibrary } from "./components/pages/teacher_dashboard/ProjectLibrary";
import { ProjectDashboard } from "./components/pages/teacher_dashboard/ProjectDashboard";
import { UserProfile } from "./components/pages/student_profile/UserProfile";
import { useCredentials } from "./components/Hooks/useCredentials";
import { PrivateRouteTeacher } from "./components/templates/PrivateRouteTeacher";
import { PrivateRouteStudent } from "./components/templates/PrivateRouteStudent";
import { useRoute } from "./components/Hooks/useRoute";
import { getIdTokenTeacher, getIdTokenStudent, studentIdToken } from "./components/Hooks/useCredentials";
import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const { isAuthenticated, user } = useAuth0();
  const {
    isLoggedInStudent,
    isLoggedInTeacher,
    setIsLoggedInStudent,
    setIsLoggedInTeacher,
    checkLogin
  } = useRoute();
  const {
    getIdToken,
    getIdTokenStudent,
    getIdTokenTeacher,
    setStudentIdToken,
    studentIdToken,
    setTeacherIdToken,
    teacherIdToken
  } = useCredentials();

  useEffect(() => {
    checkLogin();
  }, [checkLogin]);

  return (
    <div className="App">
      <Header setIsDashboardOpen={setIsDashboardOpen} isDashboardOpen={isDashboardOpen} />
      <main>

        <Routes>
          <Route path="/" element={<Homepage />} />

          {/*teacher routes*/}
          <Route element={<PrivateRouteTeacher isLoggedInTeacher={isLoggedInTeacher} />}>
            <Route
              path="teacher_account/teacher_dashboard"
              element={
                <TeacherDashboard
                  isDashboardOpen={isDashboardOpen}
                  setIsDashboardOpen={setIsDashboardOpen}
                />}
            />
            <Route path="teacher_account/teacher_dashboard/profile/:id" element={<ProfilePage />} />
          </Route >

          {/*project routes*/}
          <Route path="project_library" element={<ProjectLibrary />} />
          <Route
            path="project_library/project_dashboard"
            element={
              <ProjectDashboard setIsDashboardOpen={setIsDashboardOpen}
              />}
          />

          {/*user routes*/}
          <Route element={<PrivateRouteStudent isLoggedInStudent={isLoggedInStudent} />}>
            <Route path="account/user" element={<UserProfile />} />
            <Route
              path="student_dashboard"
              element={
                <StudentDashboard
                  isDashboardOpen={isDashboardOpen}
                  setIsDashboardOpen={setIsDashboardOpen}
                />}
            />
          </Route>
        </Routes>

      </main>
      <Footer isDashboardOpen={isDashboardOpen} />
    </div>
  );
}

export default App;
