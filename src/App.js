import SideBar from "./components/SideBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Courses from "./components/Courses";
import Students from "./components/Students";
import UserContext from "./components/Context/UserContext";
import Dashboard from "./components/Dashboard";
import EditStudent from "./components/EditStudent";

function App() {
  return (
    <>
      <BrowserRouter>
        <div id="wrapper">
          <UserContext>
            <SideBar />
          </UserContext>

          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <div className="container-fluid">
                <Routes>
                  <Route
                    path="/dashboard/:profile"
                    element={
                      <UserContext>
                        <NavBar />
                        <Dashboard />
                      </UserContext>
                    }
                  >
                    <Route path="mark" element={<Dashboard />} />
                    <Route path="zyan-cliph" element={<Dashboard />} />
                    <Route path="cilian-murphy" element={<Dashboard />} />
                    <Route path="drake-blue" element={<Dashboard />} />
                  </Route>
                  <Route path="/courses" element={<Courses />} />
                  <Route
                    path="/students"
                    element={
                      <UserContext>
                        <Students />
                      </UserContext>
                    }
                  />
                  <Route
                    path="/edit-student/:id"
                    element={
                      <UserContext>
                        <EditStudent />
                      </UserContext>
                    }
                  />
                  <Route
                    path="/*"
                    element={<Navigate to="/dashboard/mark" />}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
