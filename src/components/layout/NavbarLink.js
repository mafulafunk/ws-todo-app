import React from "react";
import { Link } from "react-router-dom";

export function NavbarLink(props) {
  return (
    <Link
      to={props.target}
      style={{
        width: "120px",
        borderRadius: "6px",
        letterSpacing: "1.5px"
      }}
      className="btn waves-effect hoverable white black-text">
      {props.name}
    </Link>
  );
}
