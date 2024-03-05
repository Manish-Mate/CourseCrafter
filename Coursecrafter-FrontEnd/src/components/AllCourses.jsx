import { useEffect, useState } from "react";
import { Course } from "./Course";
import axios from "axios";
import base_url from "../api/Bootapi";
import { toast } from "react-toastify";
export const AllCourses = () => {
  useEffect(() => {
    document.title = "All Course";
  }, []);
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        console.log(response.data);
        setCourses(response.data); // Update state with fetched courses
      },
      (error) => {
        console.log(error);
        toast.error("something went wrong", {
          position: "bottom-center",
        });
      }
    );
  };

  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  const [courses, setCourses] = useState([]);

  const updateCourse = (id) => {
    setCourses(courses.filter((c) => c.id != id));
  };

  return (
    <>
      {courses.length > 0
        ? courses.map((item) => (
            <Course
              key={item.id1}
              course={item}
              update={updateCourse}
              put={getAllCoursesFromServer}
            />
            // <Course key={item.id} course={item} updateCourse={updateCourse} />
          ))
        : "No course available"}
    </>
  );
};
