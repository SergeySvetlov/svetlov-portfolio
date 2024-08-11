import React, { useState } from "react";
import { StyledButton, Span } from "./styled";

export default function Burger ({className, onClick}) {
    const [checked, setChecked] = useState(false);
    return (
        <StyledButton className={className} onClick={() => {onClick(); setChecked(!checked)}} checked={checked}><Span>{ checked ? 'Закрыть меню' : 'Открыть меню'}</Span></StyledButton>
    )
}