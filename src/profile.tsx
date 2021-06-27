import { Container, Row, Col } from "reactstrap";
import Project from "./proCard";
import ship from "./pic/ship.png";
import luxe from "./pic/luxe.jpg";
import kizen from "./pic/kizen.png";

const Profile = () => {
  var images = [ship, luxe, kizen];
  var data = {
    a: "Greek Holidays",
    b: "Stand out from the crowd",
    c: "The customer relationship platform",
  };
  return (
    <div>
      <Container>
        <Row>
          {images.map((i, id) => (
            <Col xs="6" sm="4" key={id}>
              <Project
                image={i}
                title={
                  i === ship
                    ? data.a
                    : null || i === luxe
                    ? data.b
                    : null || i === kizen
                    ? data.c
                    : null
                }
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
