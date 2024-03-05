import { useEffect } from "react";
import { Container, Button } from "reactstrap";

export const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <Container
        fluid
        className="text-center  py-5"
        style={{ backgroundColor: "#e2e2e2" }}
      >
        <h1>Welcome to CourseCrafter</h1>
        <p>
          This Application is build by React for the FrontEnd and SpringBoot for
          the Backend
        </p>
        <Button color="primary" outline>
          Start Using
        </Button>
      </Container>
    </>
  );
};
