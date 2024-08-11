import styled from "styled-components";
import { H1 } from "../../elements/index";

export const StyledTitle = styled(H1)`
    font-family: "AlumniSans", "Arial", sans-serif;
    word-wrap: break-word;
    font-size: ${(props) => {
        if (props.size) {
            if (props.size === "big") {
                    return "120px";
            } else if (props.size === "medium") {
                    return "90px";
            } else if (props.size === "small") {
                    return "50px";
            } else if (props.size === "extra-small") {
                    return "18px";
            } return "18px";
        }
    }};
    line-height: 1;
    font-weight: 700;

    @media (max-width: 1024px) {
        font-size: ${(props) => {
            if (props.size) {
                if (props.size === "big") {
                        return "90px";
                } else if (props.size === "medium") {
                        return "50px";
                } else if (props.size === "small") {
                        return "35px";
                } else if (props.size === "extra-small") {
                        return "18px";
                } return "18px";
            }
        }};
    }

    @media (max-width: 768px) {
        font-size: ${(props) => {
            if (props.size) {
                if (props.size === "big") {
                        return "70px";
                } else if (props.size === "medium") {
                        return "40px";
                } else if (props.size === "small") {
                        return "22px";
                } else if (props.size === "extra-small") {
                    return "18px";
                } return "18px";
            }
        }};
    }
`;