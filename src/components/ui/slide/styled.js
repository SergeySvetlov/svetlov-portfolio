import styled from "styled-components";
import Button from "../button/button.jsx";
import { Ul, Li } from "../../elements/index.js";
import Title from "../title/title.jsx";

export const SlideArticle = styled.article`
    margin: 0 auto;
    position: relative;
    max-width: 780px;
    vertical-align: top;

    & img {
        width: 100%;
        aspect-ratio: 780 / 882;
        object-fit: cover;
    }

    &:hover {
        opacity: 1;

        & h4 {
            background-color: transparent;
            top: 60px;
        }

        & div {
            opacity: 1;
        }
    }
    ${props => {    
        if (props.$focus) {
            return (
                `
                & h4 {
                    background-color: transparent;
                    top: 60px;
                }

                & div {
                    opacity: 1;
                }`
            )
    }}}

    @media (max-width: 1024px) {
        max-width: 268px;

        & img {
            aspect-ratio: 268 / 294;
        }

        &:hover {
            & h4 {
                bottom: 7%;
            }
        }
    }

    @media (max-width: 768px) {
        max-width: 100%;
        width: 78%;

        & img {
            width: 100%;
            aspect-ratio: 226 / 274;
        }

        &:hover {
            h4 {
                left: 1px;
                bottom: auto;
                top: 43px;
            }
        }

        &:focus {
            h4 {
                left: 1px;
                bottom: auto;
                top: 43px;
            }
        }
    }

`;

export const SlideTitle = styled(Title)`
    background-color: rgba(38, 12, 38, 0.7);
    color: ${props => props.theme.colorTextLight};
    margin: 0;
    z-index: 2;
    position: absolute;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    height: min-content;
    bottom: 7%;
    left: 0;

    @media (max-width: 768px) {
        top: auto;
    }
`;

export const SlideDescription = styled.div`
    box-sizing: border-box;
    width: 100%;
    aspect-ratio: 780 / 882;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    background-color: rgba(38, 12, 38, 0.7);
    padding: 75px 10px 60px 10px;
    height: 100%;

    & span {
        display: block;
        font-weight: 400;
        color: ${props => props.theme.colorTextLight};
        margin: 0 0 33px 0;
        text-align: center;
    }

    @media (max-width: 1024px) {
        aspect-ratio: 268 / 294;
    }

    @media (max-width: 768px) {
        width: 100%;
        aspect-ratio: 226 / 274;
        padding: 65px 10px 60px 10px;
    }
`;

export const SlideList = styled(Ul)`
    max-height: 65%;
    overflow-y: auto;
`;

export const SlideItem = styled(Li)`
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    margin: 0 0 13px 20px;
    list-style-type: disc;
    color: ${props => props.theme.colorTextLight};
`;

export const SlideLink = styled(Button)`
    position: absolute;
    bottom: 15px;
    right: 12px;
    max-width: 120px;
    padding: 5px 10px;
    border-radius: 10px;
    z-index: 1000;
`;