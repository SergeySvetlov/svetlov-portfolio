import { motion } from "framer-motion";
import styled from "styled-components";
import { MTitle } from "../../ui/title/title.jsx";
import { P, A } from "../../elements/index.js";

export const AboutSection = styled(motion.section)`
    background-color: ${props => props.theme.colorBackgroundDefault};
    padding: 50px 0 0 0;
    box-shadow: 0px -40px 20px 10px ${props => props.theme.colorBackgroundDefault};
    @media (max-width: 1024px) {
        padding: 20px 0 0 0;
    }

    @media (max-width: 768px) {
    }
`;

export const AboutTitle = styled(MTitle)`
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

export const AboutImg = styled(motion.div)`
    position: relative;
    height: fit-content;
    width: fit-content;
    margin: 0 auto 32px auto;
    background-color: ${props => props.theme.colorBackgroundDefault};
    
    &::after {
        position: absolute;
        display: block;
        content: "";
        width: 100.5%;
        height: 100.5%;
        top: 0;
        left: 0;
        box-shadow: inset 0 0 20px 20px ${props => props.theme.colorBackgroundDefault};
    }

    & img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    @media (max-width: 1024px) {
        & img {
            max-width: 600px;
        }
    }

    @media (max-width: 768px) {
        & img {
            width: 100%;
        }
    }
`;

export const AboutSubTitle = styled(MTitle)`
    text-align: left;
    margin: 0 auto 12px auto;
    max-width: 800px;

    @media (max-width: 1024px) {
        margin: 0 auto 7px auto;
        max-width: 600px;
    }

    @media (max-width: 768px) {
    }
`;

export const AboutParagraph = styled(P)`
    margin: 0 auto 32px auto;
    max-width: 800px;
    
    @media (max-width: 1024px) {
        margin: 0 auto 22px auto;
        max-width: 600px;
    }

    @media (max-width: 768px) {
    }
`;

export const AboutLink = styled(A)`
    display: inline; 
    color: ${props => props.theme.colorDecor};
    transition: 1s;

    &:hover {
        opacity: 0.5;
    }
`;

export const AboutSertificate = styled.span`
    color: ${props => props.theme.colorDecor};
    transition: 1s;

    & + img {
        display: none;
        position: fixed;
        top: 5%;
        right: 5%;
    }

    &:hover {
        opacity: 0.5;
    }

    &:hover + img {
        display: block;
    }
`