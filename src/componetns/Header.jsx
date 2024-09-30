import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink
        to={"/"}
        style={({ isActive }) =>
          isActive ? { backgroundColor: "red" } : {backgroundColor:"black"}
        }
      >
        HOME
      </NavLink>

      <NavLink
        to={"/about"}
        style={({ isActive }) =>
            isActive ? { backgroundColor: "red" } : {backgroundColor:"black"}
          }
      >
        ABOUT
      </NavLink> 
    </div>
  );
};

export default Header;
