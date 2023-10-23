import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FaceBookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <FaceBookIcon />
        <LinkedInIcon />
      </div>
    </div>
  );
};

export default Footer;
