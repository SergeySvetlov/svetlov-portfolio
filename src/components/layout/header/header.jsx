import React from "react";
import Container from "../../layout/container/container";
import Nav from "../nav/nav.jsx";
import { Li } from "../../elements/index.js";
import Contact from "../../ui/contact/contact.jsx";
import { StyledHeader, HeaderWrapper, ContactsList} from "./styled.js";

const Header = React.forwardRef(({contacts, links}, ref) =>  (
    <StyledHeader ref={ref}>
        <Container>
            <HeaderWrapper>
                <Nav links={links}/>
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
            </HeaderWrapper>
        </Container>
    </StyledHeader>
    )
)

export default Header;