import styled from "styled-components";
import { Ul } from "../../elements/index.js";

export const StyledFooter = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    margin: auto 0 0 0;
    background-color: rgba(38, 12, 38, .7);
    padding: 35px 0;

    & div {
        display: flex;
        justify-content: space-between;
    }

    @media (max-width: 1024px) {
        padding: 25px 0;
    }

    @media (max-width: 768px) {
        & div {
            flex-direction: column;
        }

        & ul {
            margin-bottom: 25px;
        }
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
        margin: 0 auto 0 auto;
        z-index: 1;
    }
`;

