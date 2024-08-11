import styled from "styled-components";
import { A } from "../../elements/index";

export const StyledButton = styled(A)`
    color: ${(props) => props.theme.colorDecor};
    font-weight: 600;
    width: fit-content;
    display: block;
    max-width: 300px;
    padding: 10px 28px;
    background-position: center left;
    background-repeat: no-repeat;
    word-wrap: break-word;
    text-transform: uppercase;
    border: 2px solid ${(props) => props.theme.colorDecor};
    border-radius: 50px;
    transition: 1s;

    &:hover {
        background-color: ${(props) => props.theme.colorDecor};
        opacity: 1;
        color: ${(props) => props.theme.colorTextDark};
    }

    &:focus {
        background-color: ${(props) => props.theme.colorDecor};
        opacity: 1;
        color: ${(props) => props.theme.colorTextDark};
    }

    @media (max-width: 1024px) {
      font-weight: 400;
      font-size: 14px;
      max-width: 200px;
      padding: 7px 20px;
      border: 1px solid ${(props) => props.theme.colorDecor};
    }
`