import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        {/* <img width="300" height="100" src={logo} alt="Logo" /> */}
        <ul>
          <li>
            <Link to="/posts"> Posts</Link>
          </li>
          <li>
            <Link to="/create-post"> New Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
