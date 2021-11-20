import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <div className="text-center mt-1 row">
      <h1>Welcome to Mentor-Student</h1>
      <div className="mx-auto">
        <Link to={`/add/mentor`} style={{ textDecoration: "none" }}>
          <Button
            variant="primary"
            className=" mt-1 mx-1 col-lg-3"
            value="student"
          >
            Add a Mentor
          </Button>
        </Link>
        <Link to={`/add/student`} style={{ textDecoration: "none" }}>
          <Button
            variant="primary"
            className=" mt-1 mx-1 col-lg-3"
            value="mentor"
          >
            Add a Student
          </Button>
        </Link>
        <Link to={`/display/Mentor`} style={{ textDecoration: "none" }}>
          <Button
            variant="primary"
            className=" mt-1 mx-1 col-lg-3"
            value="mentor"
          >
            Display Mentors
          </Button>
          <Link to={`/display/Student`} style={{ textDecoration: "none" }}>
          <Button
            variant="primary"
            className=" mt-1 mx-1 col-lg-3"
            value="mentor"
          >
            Display Students
          </Button>
        </Link>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
