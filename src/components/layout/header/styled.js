import styled from "styled-components";
import { Ul } from "../../elements/index";

export const StyledHeader = styled.header`
    background-color: transparent;
    width: 100%;
    position: absolute;
    top: 0;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 35px 0;

    @media (max-width: 768px) {
        padding: 15px 0;
        flex-direction: row-reverse;
    }
`;

export const ContactsList = styled(Ul)`
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 30px;
    max-width: 380px;

    @media (max-width: 768px) {
        grid-template-columns: auto;
        gap: 0;
        margin: 0 auto 0 0;
        z-index: 1;
    }
`;