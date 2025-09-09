import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home"); // default active link

  // Update active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "mywork", "contact"];
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          // Adjust sectionTop to account for the fixed navbar height and extra margin
          const sectionTop = section.offsetTop - 100; // Account for navbar height + buffer
          if (window.scrollY >= sectionTop) {
            current = id;
          }
        }
      });

      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="nav"
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center h-20 px-10 text-white backdrop-blur-md"
    >
     
      <div className="logo self-start">
        <img src={logo} alt="Logo" className="h-18 w-auto" />
      </div>

      {/* Links */}
      <ul className="hidden md:flex gap-10">
        <li>
          <AnchorLink
            href="#home"
            className={`cursor-pointer ${
              activeLink === "home" ? "text-pink-400" : "hover:text-pink-400"
            }`}
            onClick={() => setActiveLink("home")}
          >
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#about"
            className={`cursor-pointer ${
              activeLink === "about" ? "text-pink-400" : "hover:text-pink-400"
            }`}
            onClick={() => setActiveLink("about")}
          >
            About Me
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#mywork"
            className={`cursor-pointer ${
              activeLink === "mywork" ? "text-pink-400" : "hover:text-pink-400"
            }`}
            onClick={() => setActiveLink("mywork")}
          >
            My Work
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#contact"
            className={`cursor-pointer ${
              activeLink === "contact" ? "text-pink-400" : "hover:text-pink-400"
            }`}
            onClick={() => setActiveLink("contact")}
          >
            Contact
          </AnchorLink>
        </li>
      </ul>

      {/* Contact Button */}
      <div className="contact-me text-white px-5 py-2 rounded-full cursor-pointer hover:scale-105 translate-3 border-2 border-white">
        Contact with Me
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button className="text-white">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
