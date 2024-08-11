import styled from "styled-components";
import { A } from "../../elements/index";

export const StyledLink = styled(A)`
    color: ${(props) => props.theme.colorDecor};
    width: fit-content;
    display: block;
    max-width: 300px;
    padding: 10px 10px 10px 28px;
    background-position: center left;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.icon});
    word-wrap: break-word;
    transition: 1s;

    &:hover {
        opacity: 0.7;
    }

    &:focus {
        opacity: 0.7;
    }

    @media (max-width: 1024px) {
        font-weight: 400;
        font-size: 14px;
        max-width: 200px;
    }
`