import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

export const Menus = () => {
  return (
    <>
      <ListGroup>
        <Link className="list-group-item list-group-item-action" to="/" tag="a">
          Home
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          to="/add-course"
          tag="a"
        >
          Add Course
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          to="/view-course"
          tag="a"
        >
          View Course
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          to="#!"
          tag="a"
        >
          About
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          to="#!"
          tag="a"
        >
          Contact
        </Link>
      </ListGroup>
    </>
  );
};
