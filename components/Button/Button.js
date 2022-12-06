import React from "react";
import Link from "next/link";
import { Button as BSButton } from "react-bootstrap";

const Button = ({ children, href, ...props }) => {
  if (href)
    return (
      <Link href={href}>
        <BSButton {...props}>{children}</BSButton>
      </Link>
    );

  return <BSButton {...props}>{children}</BSButton>;
};

export default Button;
