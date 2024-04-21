import { useEffect } from "react";
import { scroll_, stickyNav } from "../utilits";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTiktok } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { BsFolder2Open } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { LuContact } from "react-icons/lu";


const Header = ({ dark }) => {
  useEffect(() => {
    // window.addEventListener("scroll", stickyNav);
    // window.addEventListener("scroll", scroll_);
  });
  return (
    <div className="aali_tm_header">
      <div className="container">
        <div className="inner">
          {dark ? (
            <div className="logo">
              <a href="#">
                <img src="img/logo/logo.png" alt="" />
              </a>
            </div>
          ) : (
            <div className="logo">
              <a className="light" href="#">
                <img src="img/logo/logo.png" alt="aali image" />
              </a>
              <a className="dark" href="#">
                <img src="img/logo/dark.png" alt="aali image" />
              </a>
            </div>
          )}

        </div>
      </div>
          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home"><IoHomeOutline /></a>
              </li>
              <li>
                <a href="#about"><MdGroups/></a>
              </li>
              <li>
                <a href="#portfolio"><BsFolder2Open/></a>
              </li>
              <li>
                <a href="#service"><MdMiscellaneousServices/></a>
              </li>
              {/* <li>
                <a href="#testimonial">Testimonial</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li> */}
              <li>
                <a href="#contact"><LuContact/></a>
              </li>
            </ul>
          </div>
    </div>
  );
};

export default Header;
