import Cards from "./Cards";
import { useNavigate } from "react-router-dom";
import user1 from "../images/user1.jpg";
import user2 from "../images/user2.jpeg";
import user3 from "../images/user3.jpg";
import user4 from "../images/user4.jpeg";
import { UseContext } from "./Context/UserContext";
import { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function Dashboard() {
  let {
    mentor1,
    mentor2,
    mentor3,
    mentor4,
    profileImage,
    setCurrent,
    students,
    setStudents
  } = useContext(UseContext);

  let [mentorData, setMentor] = useState([]);
  let navigate = useNavigate();
  let [studentDetails, setStudentDetails] = useState([]);

  useEffect(() => {
    if (profileImage === "zyan") {
      setCurrent(user2);
      setMentor(mentor2);
      setStudentDetails(students.filter((el) => el.mentor === "Zyan Cliph"));
      navigate("/dashboard/zyan-cliph");
    } else if (profileImage === "cilian") {
      setCurrent(user3);
      setMentor(mentor3);
      setStudentDetails(students.filter((el) => el.mentor === "Cilian Murphy"));
      navigate("/dashboard/cilian-murphy");
    } else if (profileImage === "drake") {
      setCurrent(user4);
      setMentor(mentor4);
      setStudentDetails(students.filter((el) => el.mentor === "Drake Blue"));
      navigate("/dashboard/drake-blue");
    } else {
      setCurrent(user1);
      setMentor(mentor1);
      setStudentDetails(students.filter((el) => el.mentor === "Mark"));
      navigate("/dashboard/mark");
    }
  }, [
    profileImage,
    mentor1,
    mentor2,
    mentor3,
    mentor4,
    navigate,
    students,
    setCurrent
  ]);

  const handleDelete = (i) => {
    const studentToDelete = studentDetails[i];

    setStudentDetails((prevStudentDetails) =>
      prevStudentDetails.filter((index) => index !== i)
    );

    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== studentToDelete.id)
    );
  };
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>
      <div className="row">
        {mentorData.map((e, i) => {
          return (
            <Cards
              key={i}
              title={e.title}
              value={e.value}
              color={e.color}
              icon={e.icon}
              isProgress={e.isProgress}
            />
          );
        })}
      </div>
      <div className="container card  shadow h-100 px-5 py-3 ">
        <h3>My Students</h3> &nbsp;
        <Table variant="light" hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Class</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {studentDetails.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.studentName}</td>
                  <td>{e.gender}</td>
                  <td>{e.grade}</td>
                  <td>{e.address}</td>
                  <td>
                    <i
                      className="fa-solid fa-pen-to-square"
                      style={{ color: "#17416d", cursor: "pointer" }}
                      onClick={() => {
                        navigate(`/edit-student/${e.id - 1}`);
                      }}
                    ></i>
                    &nbsp; &nbsp;
                    <i
                      className="fa-solid fa-trash"
                      style={{ color: "#17416d", cursor: "pointer" }}
                      onClick={() => handleDelete(i)}
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Dashboard;
