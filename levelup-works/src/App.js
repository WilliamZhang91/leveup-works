import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from './components/templates/Header';
import { Footer } from './components/templates/Footer';
import { Homepage } from './components/pages/Homepage';
import { TeacherDashboard } from "./components/pages/teacher_dashboard/TeacherDashboard";
import { StudentDashboard } from "./components/pages/student_dashboard/StudentDashboard";
import { ProfilePage } from "./components/pages/teacher_dashboard/ProfilePage";
import { ProjectLibrary } from "./components/pages/teacher_dashboard/ProjectLibrary";
import { UserProfile } from "./components/pages/student_profile/UserProfile";
import { PrivateRouteTeacher } from "./components/templates/PrivateRouteTeacher";
import { useRoute } from "./components/Hooks/useRoute";

function App() {

  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const { isLoggedInStudent, isLoggedInTeacher, checkLogin } = useRoute();

  useEffect(() => {
    checkLogin();
    setTimeout(() => {
      console.log(isLoggedInStudent)
    })
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
          <Route path="account/user" element={<UserProfile />} />
          <Route
            path="project_library/project/:id"
            element={
              <StudentDashboard
                isLoggedInStudent={isLoggedInStudent}
                isDashboardOpen={isDashboardOpen}
                setIsDashboardOpen={setIsDashboardOpen}
              />}
          />
          {/* </Route> */}
        </Routes>

      </main>
      <Footer isDashboardOpen={isDashboardOpen} />
    </div>
  );
}

export default App;
