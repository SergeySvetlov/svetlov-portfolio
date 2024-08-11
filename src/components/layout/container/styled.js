import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    max-width: ${(props) => props.theme.pageWidth};
    margin: 0 auto;
    padding: 0 100px;

    @media (max-width: 1024px) {
        padding: 0 50px;
    }

    @media (max-width: 768px) {
        padding: 0 15px;
    }
`;