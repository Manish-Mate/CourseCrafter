import { Card, CardBody } from "reactstrap";

export const Header = () => {
  return (
    <>
      <Card className="bg-warning">
        <CardBody>
          <h1 className="text-center my-3">Welcome to Courses Application</h1>
        </CardBody>
      </Card>
    </>
  );
};
