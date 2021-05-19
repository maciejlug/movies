import React from "react";
import { Link } from "react-router-dom";

function Links({ setMenuState, size }) {
  const changePage = (size) => {
    if (size <= 992) {
      setMenuState(false);
    }
  };

  return (
    <div className="nav-items">
      <li>
        <Link onClick={() => changePage(size)} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link onClick={() => changePage(size)} to="/movies">
          Movies
        </Link>
      </li>
      <li>
        <Link onClick={() => changePage(size)} to="/series">
          Series
        </Link>
      </li>
    </div>
  );
}

export default Links;
