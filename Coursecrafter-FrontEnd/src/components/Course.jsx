import axios from "axios";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
} from "reactstrap";
import base_url from "../api/Bootapi";
import { toast } from "react-toastify";
import UpdateModel from "./UpdateModel";
import { useEffect } from "react";

export const Course = ({ course, update, put }) => {
  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        console.log(response);
        console.log("success");
        toast.success("course delete successfully");
        update(id);
      },
      (error) => {
        console.log(error);
        console.log("error");
        toast.error("Error!! Something went wrong");
      }
    );
  };

  return (
    <>
      <Card>
        <CardBody>
          <CardSubtitle className="font-weight-bold">
            {course.title}
          </CardSubtitle>
          <CardText>{course.description}</CardText>
          <Container className="text-center">
            <Button
              color="danger"
              onClick={() => {
                deleteCourse(course.id);
              }}
            >
              Delete
            </Button>
            {/* <Button
              color="warning ms-3"
              onClick={() => {
                <UpdateModel />;
              }}
            >
              Update
            </Button> */}
            <UpdateModel course={course} put={put} />
          </Container>
        </CardBody>
      </Card>
    </>
  );
};
