import React from "react";
import { useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import { Alert } from "react-bootstrap";
function Add() {
  const { id } = useParams();
  const [formData, setFormData] = React.useState({
    name: "",
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const [message, setMessage] = React.useState("");
  const [variant , setVariant] = React.useState("danger");
  const [alert, setAlert] = React.useState(false);

const handleSubmit = async (e)=>{
  e.preventDefault();
  console.log(formData.name);
  if(formData.name === ""){
    setMessage("Name is required");
    setVariant("warning")
    setAlert(true);
  }
  else{
  await axios.post(`https://student-mentor-amrutesh.herokuapp.com/${id}/create`, {name:formData.name})
  .then((response)=>{

    setMessage("Successfully added");
    setVariant("success");
    setAlert(true);
    setTimeout(()=>{
      navigate(`/`);
    },1000)
    
  })
  .catch((error)=>{
    setMessage(error.response.data.message);
    setAlert(true);
  }) 
}
}

  return (
    <div className="row mt-2 ">
      {alert &&
        <Alert variant={variant}>{message}</Alert>
      }
      
      <h1 className="text-center">Add {id}</h1>
      <Form className="col-lg-4 col-md-6 col-lg-sm-10 m-auto" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name ="name" placeholder="Enter Name" value={formData.name} onChange={handleChange}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Add;
