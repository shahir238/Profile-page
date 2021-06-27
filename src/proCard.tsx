import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { useState } from "react";

const Project = (props: any) => {
  let cardStyle = {
    marginTop: "50px",
  };
  const [pay, setPay] = useState(false);

  return (
    <div>
      <Card style={cardStyle}>
        <CardImg
          top
          width="100%"
          height="300px"
          src={props.image}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {" "}
            {props.subTitle}
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button onClick={() => setPay(!pay)}>view</Button>
          {pay === true ? (
            <span style={{ color: "red" }}>This appartunity comming soon</span>
          ) : null}
        </CardBody>
      </Card>
    </div>
  );
};

export default Project;
