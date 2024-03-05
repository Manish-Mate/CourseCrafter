import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
import PropTypes from "prop-types";
import axios from "axios";
import base_url from "../api/Bootapi";
import { toast } from "react-toastify";

function UpdateModel({ course, put }) {
  const [modal, setModal] = useState(false);
  const [editedTitle, setEditedTitle] = useState(course.title);
  const [editedDescription, setEditedDescription] = useState(
    course.description
  );

  const toggle = () => setModal(!modal);

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    const updatedCourse = {
      ...course,
      title: editedTitle,
      description: editedDescription,
    };

    console.log(updatedCourse);
    postDataToServer(updatedCourse);
    toggle();
  };

  const postDataToServer = (data) => {
    axios.put(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
        toast.success("course Updated successfully");
        put();
      },
      (error) => {
        console.log(error);
        console.log("error");
        toast.error("Error!! Something went wrong");
      }
    );
  };

  return (
    <div>
      <Button color="warning" onClick={toggle} id="btn">
        Update
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <Input
            type="text"
            value={editedTitle}
            name="title"
            id="title"
            onChange={handleTitleChange}
          />
        </ModalHeader>
        <ModalBody>
          <Input
            type="textarea"
            value={editedDescription}
            name="description"
            id="description"
            onChange={handleDescriptionChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleForm}>
            Save
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

UpdateModel.propTypes = {
  className: PropTypes.string,
};

export default UpdateModel;
