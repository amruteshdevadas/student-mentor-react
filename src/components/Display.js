import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
function Display() {
  let { id } = useParams();
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetchList();
  }, []);

  async function fetchList() {
    try {
      const response = await axios.get(`https://student-mentor-amrutesh.herokuapp.com/${id}/get${id}`);
      setData(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      Diplaying {id}
      {data ? (
        <Table bordered="true">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              {id === "Mentor" && <th>Students</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={item._id}>
                  <td>{index + 1}</td>

                  {id === "Mentor" && (
                    <Link
                      to={`/mentor/${item._id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <td>{item.name}</td>
                    </Link>
                  )}

                  {id === "Student" && <td>{item.name}</td>}

                  {item.students && <td>{item.students.length}</td>}
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <h1> No {id}</h1>
      )}
    </div>
  );
}

export default Display;
