import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

function Courses() {
  let [courses, setCourses] = useState([]);

  const getCourseData = async () => {
    try {
      let res = await axios.get(
        "https://api.data.gov.in/resource/309b4575-9823-4bd8-a47a-48275dcfd702?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json"
      );
      setCourses(res.data.records);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(courses);
  useEffect(() => {
    getCourseData();
  }, []);
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800" style={{ marginTop: "10px" }}>
          Courses
        </h1>
      </div>

      <div
        className="container card  shadow h-100 px-5 py-3 "
        style={{ marginBottom: "20px" }}
      >
        <Table
          variant="light"
          hover
          responsive
          style={{ marginTop: "20px", textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Class</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.class}</td>
                  <td>{e.subject_with_code}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Courses;
