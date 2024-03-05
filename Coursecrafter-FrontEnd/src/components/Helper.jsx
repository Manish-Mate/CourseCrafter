import { Col, Container, Row } from "reactstrap";
import { Header } from "./Header";
import { Menus } from "./Menus";
import { Home } from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes component
import { AddCourse } from "./AddCourse";
import { AllCourses } from "./AllCourses";

export const Helper = () => {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              {/* Wrap your Route components inside Routes component */}
              <Routes>
                <Route path="/" element={<Home />} exact />{" "}
                {/* Use element prop instead of component */}
                <Route path="/add-course" element={<AddCourse />} exact />
                <Route path="/view-course" element={<AllCourses />} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </>
  );
};
