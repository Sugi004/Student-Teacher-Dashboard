import React, { useState, useEffect, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useNavigate, useParams } from "react-router-dom";
import { UseContext } from "./Context/UserContext";

let EditStudent = () => {
  let { profileImage, students, setStudents } = useContext(UseContext);
  let params = useParams();
  let navigate = useNavigate();

  let [studentName, setName] = useState("");
  let [grade, setClass] = useState("");
  let [gender, setGender] = useState("");
  let [address, setAddress] = useState("");
  let [mentor, setMentor] = useState("");
  let [id, setID] = useState("");

  let handleSave = () => {
    let newUsers = [...students];
    newUsers.splice(Number(params.id), 1, {
      studentName,
      grade,
      gender,
      address,
      mentor,
      id
    });

    setStudents(newUsers);
    navigate(`/dashboard/${profileImage}`);
  };

  useEffect(() => {
    if (params.id < students.length) {
      setName(students[params.id].studentName);
      setClass(students[params.id].grade);
      setGender(students[params.id].gender);
      setAddress(students[params.id].address);
      setMentor(students[params.id].mentor);
      setID(students[params.id].id);
    } else {
      alert("Invalid User ID");
      navigate(`/dashboard/${profileImage}`);
    }
  }, [params.id, students, navigate, profileImage]);

  return (
    <div className="container">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800" style={{ marginTop: "10px" }}>
          Edit Student
        </h1>
      </div>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={studentName}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Class</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Class"
            value={grade}
            onChange={(e) => setClass(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Mentor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Mentor"
            value={mentor}
            onChange={(e) => setMentor(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSave}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EditStudent;
