import React from "react";
import "./NoFound.scss";
import { Title, Button } from "components";
import { Link } from "react-router-dom";

const NoFound = () => {
  return (
    <div className="no-found__container">
      <h1>404</h1>
      <Title tag={"h2"} dark text={"There's nothing here ..."} />
      <p>.. maybe the page you're looking is not found or never exit</p>
      <Link to="/">
        <Button text={"go home"} />
      </Link>
    </div>
  );
};

export default NoFound;
