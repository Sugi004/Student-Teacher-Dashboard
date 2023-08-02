import React, { useContext } from "react";
import { UseContext } from "./Context/UserContext";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Students() {
  let { students, setStudents } = useContext(UseContext);
  let navigate = useNavigate();

  const handleDelete = (i) => {
    let newUsers = [...students];
    newUsers.splice(i, 1);
    setStudents(newUsers);
  };
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800" style={{ margin: "20px" }}>
          Student List
        </h1>
      </div>

      <div
        className="container card  shadow h-100 px-5 py-3 "
        style={{ marginBottom: "20px" }}
      >
        <Table variant="light" hover responsive style={{ marginTop: "20px" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Class</th>
              <th>Address</th>
              <th>Mentor</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.studentName}</td>
                  <td>{e.gender}</td>
                  <td>{e.grade}</td>
                  <td>{e.address}</td>
                  <td>{e.mentor}</td>
                  <td>
                    <i
                      className="fa-solid fa-pen-to-square"
                      style={{ color: "#17416d", cursor: "pointer" }}
                      onClick={() => {
                        navigate(`/edit-student/${i}`);
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

export default Students;
