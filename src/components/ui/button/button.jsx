import React, { forwardRef } from "react";
import { StyledButton } from "./styled.js";

const Button = forwardRef(({className, children, link, onClick, ...props}, ref) => {

    return <StyledButton ref={ref} onClick = {onClick} className={className} {...( link ? {to: link} : {as: 'button', type: 'button'})} {...props}>{children}</StyledButton>
})

export default Button;