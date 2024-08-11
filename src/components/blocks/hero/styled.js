import { motion } from "framer-motion";
import styled from "styled-components";
import { MTitle } from "../../ui/title/title.jsx";
import { P } from "../../elements/index.js";

export const HeroSection = styled(motion.section)`
    width: 100%;
    padding: 100px 0 450px;
    
    @media (max-width: 1024px) {
        padding: 70px 0 250px;
    }

    @media (max-width: 768px) {
        padding: 70px 0 100px;
    }
`;

export const HeroTitle = styled(MTitle)`
    background: -webkit-gradient(linear, left top, left bottom, color-stop(33%, ${props => props.theme.colorTextLight}), color-stop(66%, ${props => props.theme.colorDecorSecond}), to(${props => props.theme.colorDecor}));
    background: linear-gradient(${props => props.theme.colorTextLight} 33%, ${props => props.theme.colorDecorSecond} 66%, ${props => props.theme.colorDecor});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1;
    text-align: center;
    margin: 0 auto;
    width: 100%;
    max-width: 630px;

    @media (max-width: 1024px) {
        max-width: 470px;
    }

    @media (max-width: 768px) {
        max-width: 370px;
    }
`;

export const HeroSubTitle = styled(P)`
    font-family: "AlumniSans", "Arial", sans-serif;
    font-size: 35px;    
    color: ${props => props.theme.colorDecorSecond};
    margin: 0 auto;
    max-width: 630px;
    word-wrap: break-word;
    text-align: center;

    @media (max-width: 1024px) {
        font-size: 25px;
        max-width: 470px;
    }

    @media (max-width: 768px) {
        font-size: 16px;
        max-width: 370px;
    }
`;