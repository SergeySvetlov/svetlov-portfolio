import styled from "styled-components";
import {Button} from "../../elements/index";
import visuallyHidden from "../../../util/visually-hidden";

export const StyledButton = styled(Button)`
    position: relative;
    width: 21px;
    height: 20px;
    border: 0;
    background-color: transparent;
    transition: 1s;

    &::after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 20px;
        height: 2px;
        background-color: ${(props) => props.theme.colorDecor};
        box-shadow: 0 6px 0 0 ${(props) => props.theme.colorDecor}, 0 12px 0 0 ${(props) => props.theme.colorDecor};
        transition: 1s;
    }

    &::before {
        transition: 1s;
    }

    ${(props) => props.checked ? ` 
        &::after {
            position: absolute;
            content: "";
            top: 8px;
            left: 0;
            width: 20px;
            height: 2px;
            transform: rotate(45deg);
            background-color: ${props.theme.colorDecor};
            box-shadow: none;  
        } 
        
        &::before {
            position: absolute;
            content: "";
            top: 8px;
            left: 0;
            width: 20px;
            height: 2px;
            transform: rotate(-45deg);
            background-color: ${props.theme.colorDecor};
        }
    ` : null
    }
`;

export const Span = styled.span`
    ${visuallyHidden};
`