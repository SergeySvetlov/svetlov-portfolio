import styled from "styled-components";
import { HashLink as Link } from 'react-router-hash-link';
//import { Link } from "react-router-dom";

const A = styled(Link)`
    display: block;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
`;

export default A;