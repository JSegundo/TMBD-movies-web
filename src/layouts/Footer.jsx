import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
// import { fa } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-right">
        <a href="/#">
          <FontAwesomeIcon
            icon={faArrowAltCircleUp}
            inverse
            className="favoriteIcon"
            size="2x"
            id="corazon-icon"
          />
        </a>
        {/* <a href="#">
          <i class="fa fa-twitter"></i>
        </a>
        <a href="#">
          <i class="fa fa-linkedin"></i>
        </a>
        <a href="#">
          <i class="fa fa-github"></i>
        {/* </a> */}
      </div>

      <div className="footer-left">
        <p className="footer-links">
          <a className="link-1" href="/#">
            Home
          </a>

          <a
            href="https://www.linkedin.com/in/segundo-juan-41887a218/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>

          <a
            href="https://github.com/JSegundo"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>

          <a href="/#">Contact</a>
        </p>

        <p>Segundo Juan &copy; 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
