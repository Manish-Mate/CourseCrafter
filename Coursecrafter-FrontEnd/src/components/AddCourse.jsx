import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../api/Bootapi";
import { toast } from "react-toastify";

export const AddCourse = () => {
  useEffect(() => {
    document.title = "Add Course";
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    postDataToServer(course);
    console.log(course);
  };

  const postDataToServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
        toast.success("course added successfully");
        setCourse({});
      },
      (error) => {
        console.log(error);
        console.log("error");
        toast.error("Error!! Something went wrong");
      }
    );
  };

  const [course, setCourse] = useState({});
  return (
    <>
      <h1 className="text-center my-3">Fill Course Detial</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <Label for="userId">Course Id</Label>
          <Input
            type="text"
            placeholder="Enter here"
            name="userId"
            id="userId"
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="title">Course Title</Label>
          <Input
            type="text"
            placeholder="Enter here"
            name="title"
            id="title"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Course Description</Label>
          <Input
            type="textarea"
            placeholder="Enter description here"
            name="description"
            id="description"
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          />
          <Container className="text-center">
            <Button type="submit" color="success">
              Add Course
            </Button>
            <Button type="reset" className=" ms-3" color="warning">
              Clear
            </Button>
          </Container>
        </FormGroup>
      </Form>
    </>
  );
};
