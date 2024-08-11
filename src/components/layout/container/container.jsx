import React from "react";
import { StyledContainer } from "./styled.js";

export default function Container ({className, children}) {
    return <StyledContainer className={className}>{children}</StyledContainer>
}