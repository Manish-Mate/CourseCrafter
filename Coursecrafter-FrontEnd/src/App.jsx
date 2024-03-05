import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import { Home } from "./components/Home";
import { Course } from "./components/Course";
import { AllCourses } from "./components/AllCourses";
import { AddCourse } from "./components/AddCourse";

import { Helper } from "./components/Helper";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToastContainer />
      <Helper />
    </>
  );
}

export default App;
