import styled from "styled-components";
import Burger from "../../ui/burger/burger";
import { Ul } from "../../elements/index";

export const NavWrapper = styled.div`
    @media (max-width: 768px) {
        position: relative;
    }
`;

export const NavBurger = styled(Burger)`
    display: none;

    @media (max-width: 768px) {
        display: block;
        margin: 30px 0 0 auto;
    }
`;

export const NavListWrapper = styled.div`
    @media (max-width: 768px) {
        position: absolute;
        right: -15px;
        bottom: -110px;
        height: 100%;
        overflow: hidden;
        width: 0;
        transition: 1s;
        ${(props) => props.open ? `
            width: 100vw;
            ` : null
        }; 
    }
`;

export const NavList = styled(Ul)`
    display: grid;
    margin: 0 0 0 auto;
    grid-template-columns: auto auto;
    column-gap: 30px;
    row-gap: 5px;

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: auto;
        gap: 0;
        position: absolute;
        bottom: 0;
        width: 100vw;
    
        & li {
            background-color: rgba(38, 12, 38, .7);
            border: 1px solid #fea18d;
            border-radius: 5px;
        }

        & a {
            min-width: 200px;
            max-width: 100%;
            width: 100%;
            text-align: center;
            border: 0;
            border-radius: 0;
            padding: 7px;
        }
    }
`;
