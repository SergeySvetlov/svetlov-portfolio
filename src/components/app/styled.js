import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body,
html {
    margin: 0;
}

html {
    height: 100%;
}

body {
    position: relative;
    min-height: 100%;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: ${(props) => props.theme.lineHeight};
    font-weight: ${(props) => props.theme.fontWeight};
    color: ${(props) => props.theme.colorTextLight};
    background-color: ${(props) => props.theme.colorBackgroundDefault};

    @media (max-width: 1024px) {
        font-size: 14px;
    }
}`;