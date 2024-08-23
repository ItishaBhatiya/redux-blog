import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../Redux/User/Action";

const Navbar = () => {
  let data = useSelector((store) => store);
  let dispatch = useDispatch();

  return (
    <div id="navbar">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/product">
        Product
      </Link>
      {data.islogin ? (
        <p
          onClick={() => dispatch(logoutUser())}
          style={{ cursor: "pointer" }}
          className="link"
        >
          Logout
        </p>
      ) : (
        <Link className="link" to="/login">
          Login
        </Link>
      )}
      <Link className="link" to="/signup">
        {data.islogin ? data.user.username : "SignUp"}
      </Link>
    </div>
  );
};

export default Navbar;
