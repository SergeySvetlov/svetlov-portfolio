import styled from "styled-components";
import visuallyHidden from "../../../util/visually-hidden";
import { Ul, A } from "../../elements/index";

export const StyledList = styled(Ul)`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0;
    max-width: 104px;

    
    @media (max-width: 768px) {
        margin: 0 auto;
    }
`

export const StyledLink = styled(A)`
    width: 28px;
    aspect-ratio: 1;
    background-image: url(${(props) => props.icon});
    background-repeat: no-repeat;
    transition: 1s;

    & span {
        ${visuallyHidden}
    }
    &:hover {
        opacity: 0.5;
    }
`