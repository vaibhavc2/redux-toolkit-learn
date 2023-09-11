import React from "react";
import { Link } from "react-router-dom";

const Header = ({}) => {
  return (
    <nav className="sticky mb-10 flex h-10 justify-between">
      <Link className="mx-5 py-5" to={"/"}>
        Home
      </Link>
      <Link className="mx-5 py-5" to={"/about"}>
        About
      </Link>
      <Link className="mx-5 py-5" to={"/contact"}>
        Contact
      </Link>
    </nav>
  );
};

export default Header;
