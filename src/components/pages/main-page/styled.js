import styled from "styled-components";
import { backgroundMobile, backgroundMobile2x, backgroundTablet, backgroundTablet2x, background, background2x } from "../../../assets/background/index"

export const MainPageWrapper = styled.div`
    padding-top: ${props => props.$paddingTop + "px"};
    padding-bottom: ${props => props.$paddingBottom + "px"};
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: top center;

    @media (min-resolution: 2dppx) {
        background-image: url(${background2x});
    }

    @media (max-width: 1024px) {
        background-image: url(${backgroundTablet});
        
        @media (min-resolution: 2dppx) {
            background-image: url(${backgroundTablet2x});
        }
    }

    @media (max-width: 768px) {
        background-image: url(${backgroundMobile});
        
        @media (min-resolution: 2dppx) {
            background-image: url(${backgroundMobile2x});
        }
    }
`