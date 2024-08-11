import React from "react";
import { Li } from "../../elements/index.js";
import { StyledList, StyledLink } from "./styled.js";

export default function SocialList ({socials}) {

    return (
        <StyledList>
            {
                socials && socials.map((social, i) => {
                    return (
                        <Li key={i}>
                            <StyledLink to={social.link} icon={social.icon}><span>{social.name}</span></StyledLink>                        
                        </Li>
                    )
                })
            }
        </StyledList>
    )
}