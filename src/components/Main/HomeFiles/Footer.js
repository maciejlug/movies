import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons";
function Footer() {
  return (
    <footer>
      <div className="links-container">
        <ul>
          <li>
            <a href="#">Lorem</a>
          </li>
          <li>
            <a href="#">Lorem</a>
          </li>
          <li>
            <a href="#">Lorem</a>
          </li>
          <li>
            <a href="#">Lorem</a>
          </li>
        </ul>
      </div>
      <IconContext.Provider value={{ color: "#fff", size: "30px" }}>
        <div className="icons-container">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
        </div>
      </IconContext.Provider>
      <p className="copyright">
        Copyright <span>&copy;</span> <span className="logo">Movies</span>
      </p>
    </footer>
  );
}

export default Footer;
