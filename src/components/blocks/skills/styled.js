import { motion } from "framer-motion";
import styled from "styled-components";
import { MTitle } from "../../ui/title/title.jsx";
import visuallyHidden from "../../../util/visually-hidden.js";
import { Ul } from "../../elements/index.js";

export const SkillsSection = styled(motion.section)`
    width: 100%;
    padding: 0 0 50px 0;
    
    @media (max-width: 1024px) {
        padding: 0 0 20px 0;
    }

    @media (max-width: 768px) {
    }
`;

export const SkillsTitle = styled(MTitle)`
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

export const SkillsList = styled(Ul)`
    max-width: 800px;
    margin: 0 auto;

    @media (max-width: 1024px) {
        max-width: 600px;
    }

    @media (max-width: 768px) {
    }    
`;

export const SkillsName = styled.span`
    display: block;
    background-image: url(${(props) => props.$icon});
    background-repeat: no-repeat;
    background-position: left;
    padding: 0 0 0 32px;
`;

export const SkillsBlock = styled.div`
    margin: 4px 0 16px;
    padding: 0;
    height: 14px;
    font-size: 0;
    border: 1px solid ${props => props.theme.colorBackground};
    border-radius: 8px;
`;
export const SkillsLevel = styled.div`
    margin: 1px;
    height: 12px;
    background-color: ${props => props.theme.colorDecor};
    border-radius: 6px;
    width: ${props => props.$level}%;

    & span {
        ${visuallyHidden}
    }
`;
