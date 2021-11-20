import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
function Mentor() {
  const [data, setData] = React.useState([]);
  const [studentData, setStudentData] = React.useState([]);
  const [showStudent, setShowStudent] = React.useState(false);
  let { id } = useParams();
  React.useEffect(() => {
    fetchList();
  }, []);

  async function fetchList() {
    try {
      const response = await axios.get(
        `https://student-mentor-amrutesh.herokuapp.com/mentor/${id}/getStudents`
      );
      setData(response.data.students);
      console.log(response.data.students);
    } catch (error) {
      console.log(error);
    }
  }

  const handleRemove = async (studentId) => {
    console.log(studentId);
    try {
      const response = await axios.put(
        `https://student-mentor-amrutesh.herokuapp.com/mentor/removeStudent`,
        { id: id, studentId: studentId }
      );
      fetchList();
      setShowStudent(false);
    } catch (error) {
      console.log(error);
      alert("Error");
    }
  };

  const handleShowStudent = async () => {
    try {
      let response = await axios.get(
        `https://student-mentor-amrutesh.herokuapp.com/student/getStudent`
      );
      setStudentData(response.data);
      setShowStudent(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = async (studentId) => {
    console.log(studentId);
    try {
      let response = await axios.put(
        `https://student-mentor-amrutesh.herokuapp.com/mentor/addStudent`,
        { id: id, studentId: studentId }
      );
      fetchList();
      setShowStudent(false);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };
  return (
    <>
      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => {
                return (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => {
                          handleRemove(item._id);
                        }}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <h2> No Students</h2>
            )}
          </tbody>
        </Table>
      </div>
      <Button onClick={handleShowStudent}>
        Available Students for Mentor to Add
      </Button>

      {showStudent && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {studentData.length > 0 ? (
              studentData.map((item, index) => {
                return (
                  <>
                    <tr key={item._id}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>
                        <Button
                          variant="info"
                          onClick={() => {
                            handleAdd(item._id);
                          }}
                        >
                          Add
                        </Button>
                      </td>
                    </tr>
                  </>
                );
              })
            ) : (
              <h2>No Students</h2>
            )}
          </tbody>
        </Table>
      )}
    </>
  );
}

export default Mentor;
