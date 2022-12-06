import React from "react";
import { Button as BSButton } from "react-bootstrap";

const Button = ({ children, ...props }) => {
  return <BSButton {...props}>{children}</BSButton>;
};

export default Button;
