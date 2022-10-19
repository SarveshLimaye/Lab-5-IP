import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.linkedin.com/in/sarvesh-limaye-7a922620b/" style={{'text-decoration-lines':'none'}}><LinkedInIcon /></a>
          <a href="https://twitter.com/SarveshLimaye05"><TwitterIcon /></a>
          <a href="https://github.com/SarveshLimaye"><GithubIcon /></a>
      </div>
      <p> &copy; 2022 Sarvesh Limaye</p>
    </div>
  );
}

export default Footer;