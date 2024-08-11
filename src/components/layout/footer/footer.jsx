import React from "react";
import Container from "../../layout/container/container";
import { Li } from "../../elements/index.js";
import SocialList from "../../ui/social/social.jsx";
import Contact from "../../ui/contact/contact.jsx";
import { StyledFooter, ContactsList } from "./styled.js";

const Footer = React.forwardRef(({contacts, socials}, ref) =>  (
    <StyledFooter ref={ref}>
        <Container>
            <SocialList socials={socials}/>
            <ContactsList> 
                {
                    contacts && contacts.map((contact, i) => {
                        return (
                            <Li key={i}>
                                <Contact to={contact.link} icon={contact.icon}>{contact.name}</Contact>
                            </Li>                                
                        )
                    })
                }
            </ContactsList>
        </Container>
    </StyledFooter>
    )
)

export default Footer;