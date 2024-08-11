import React from "react";
import { StyledLink } from "./styled.js";

export default function Contact ({className, children, link, icon, ...props}) {

    return <StyledLink className={className} link={link} icon={icon} {...props}>{children}</StyledLink>
}