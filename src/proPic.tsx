import { Card, CardTitle, CardText, CardBody } from "reactstrap";
import "./proPic.css";
import shaheer from "./pic/shaheer.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faEnvelope,
  faHome,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const ProfilePic = () => {
  return (
    <div>
      <Card className="cards">
        <Card className="subCard">
          <img
            src={shaheer}
            alt="myPic"
            width="360px"
            height="440px"
            style={{ borderRadius: "5px" }}
          />
        </Card>
        <Card className="intro">
          <CardBody>
            <CardText className="introInit">HY EVERYBODY, I AM</CardText>
            <CardTitle className="introName">
              MUHAMMAD
              <br /> SHAHEER
            </CardTitle>
            <CardText className="introTitle">
              JUNIOR WEB APPLICATION DEVELOPER
            </CardText>
            <CardText className="introQuote">
              "I love what i do and i do what my clients love & work with great
              clients all over the world to create thoughtful and purposeful
              websites."
            </CardText>
            <CardText>
              <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
              <span style={{ paddingLeft: "20px", fontSize: "14px" }}>
                18-Mar-1996
              </span>
            </CardText>

            <CardText>
              <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
              <span style={{ paddingLeft: "20px", fontSize: "14px" }}>
                03323032532
              </span>
            </CardText>

            <CardText>
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              <span style={{ paddingLeft: "20px", fontSize: "14px" }}>
                shahir.umer100@gmail.com
              </span>
            </CardText>

            <CardText>
              <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
              <span style={{ paddingLeft: "20px", fontSize: "14px" }}>
                karachi, Pakistan
              </span>
            </CardText>

            <ul className="list">
              <li style={{ marginLeft: "-25px" }}>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                </a>
              </li>
              <li style={{ marginLeft: "20px" }}>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </a>
              </li>
              <li style={{ marginLeft: "20px" }}>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </CardBody>
        </Card>
      </Card>
    </div>
  );
};

export default ProfilePic;
