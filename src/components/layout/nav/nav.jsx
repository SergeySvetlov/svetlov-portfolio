import React, { useState } from "react";
import { Li } from "../../elements/index";
import StyledButton from "../../ui/button/button";
import { NavListWrapper, NavWrapper, NavBurger, NavList } from "./styled";

export default function Nav ({links}) {

    const [open, setOpen] = useState(false);
    return (
      <NavWrapper>
        <NavBurger onClick={() => setOpen(!open)}/>
        <NavListWrapper open={open}>
            <NavList>
                {
                    links && links.map((link, index) => {
                        return (
                            <Li key={index}>
                                <StyledButton smooth={true} link={link.href}>{link.name}</StyledButton>
                            </Li>                                        
                        )                    
                    })
                }
            </NavList>
        </NavListWrapper>
      </NavWrapper>
    );
} 