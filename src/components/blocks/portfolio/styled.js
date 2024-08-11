import { motion } from "framer-motion";
import styled from "styled-components";
import { MTitle } from "../../ui/title/title.jsx";
import { P, A } from "../../elements/index.js";

export const PortfolioSection = styled(motion.section)`
    background-color: ${props => props.theme.colorBackgroundDefault};
    padding: 50px 0 50px 0;

    @media (max-width: 1024px) {
        padding: 20px 0 20px 0;
    }

    @media (max-width: 768px) {
    }
`;

export const PortfolioTitle = styled(MTitle)`
    text-align: center;
    margin: 0 auto 56px auto;
    max-width: 710px;

    @media (max-width: 1024px) {
        margin: 0 auto 30px auto;
        max-width: 400px;
    }

    @media (max-width: 768px) {
        margin: 0 auto 20px auto;
        max-width: 320px;
    }
`;

export const PortfolioParagraph = styled(P)`
    margin: 0 auto 50px auto;
    max-width: 800px;
    
    @media (max-width: 1024px) {
        margin: 0 auto 40px auto;
        max-width: 600px;
    }

    @media (max-width: 768px) {
    }
`;

export const PortfolioLink = styled(A)`
    display: inline;
    position: relative;
    color: ${props => props.theme.colorDecor};
    transition: 1s;
    
    &:after {
        position: absolute;
        content:"";
        bottom: -40px;
        left: 15px;
        width: 50px;
        height: 50px;
        background-image: url(${props => props.icon});
        background-repeat: no-repeat;
        background-size: contain;
    }

    &:hover {
        opacity: 0.5;
    }
`;
