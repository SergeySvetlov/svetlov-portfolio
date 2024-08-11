import { forwardRef } from "react";
import React from "react";
import { motion } from "framer-motion";
import { StyledTitle } from "./styled.js";

const Title = forwardRef(({children, size, level, ...props}, ref) => {
    return <StyledTitle ref={ref} {...props} {...(level ? {as: `h${level}`} : "")} size={size}>{children}</StyledTitle>
})

export const MTitle = motion(Title);

export default Title;
