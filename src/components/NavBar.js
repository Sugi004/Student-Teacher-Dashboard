import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Form } from "react-bootstrap";
import { UseContext } from "./Context/UserContext";

function NavBar() {
  let { profileImage, setImage, currentImage } = useContext(UseContext);
  return (
    <>
      <Navbar className=" bg-body-tertiary  ">
        <Container>
          <Navbar.Toggle />
          <Form style={{ marginLeft: "30px" }}>
            <input
              type="text"
              placeholder="Search"
              style={{
                width: "15rem",
                outline: "none",
                borderRadius: "40px",
                paddingLeft: "20px",
                border: "none",
                fontSize: "15px"
              }}
            />
            &nbsp;&nbsp;
            <i className="fa-solid fa-search" />
          </Form>
          <Navbar.Collapse className="justify-content-end">
            <i className="fa-solid fa-bell" style={{ marginRight: "10px" }} />
            &nbsp;&nbsp;
            <Navbar.Text style={{ fontFamily: "Arial", fontSize: "15px" }}>
              Signed in as: &nbsp;&nbsp;&nbsp;
              <img
                src={currentImage}
                style={{ height: "40px", width: "40px", borderRadius: "50%" }}
                alt="profile"
              />
              <select
                className="selector"
                onChange={(e) => {
                  setImage(e.target.value);
                }}
                defaultValue={profileImage}
              >
                <option value="mark">Mark</option>
                <option value="zyan">Zyan Cliph</option>
                <option value="cilian">Cilian Murphy</option>
                <option value="drake">Drake Blue</option>
              </select>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
