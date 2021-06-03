import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Todo'ist</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/completed"
          style={{
            color: "white",
            backgroundColor: "green",
            borderRadius: "8px",
          }}
        >
          Completed
        </Link>
        <Link
          to="/trash"
          style={{
            color: "black",
            backgroundColor: "#F1356D",

            borderRadius: "8px",
          }}
        >
          Trash
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
