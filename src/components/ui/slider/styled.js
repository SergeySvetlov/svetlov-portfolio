import styled from "styled-components";
import { Swiper } from "swiper/react";
import { arrow, arrowDark } from "../../../assets/svg/index.js";

export const SliderWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    z-index: 3;
`;

export const StyledButton = styled.button`
  position: absolute;
  z-index: 10;
  bottom: 40%;
  margin: auto;
  left: ${(props) => (props.$left ? "-90px" : "auto")};
  right: ${(props) => (props.$right ? "-90px" : "auto")};
  background-color: transparent;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: 55% 50%;
  transform: ${(props) => (props.$left ? `rotate(180deg)` : `rotate(0deg)`)};
  width: 64px;
  height: 64px;
  border: 1px solid ${(props) => props.theme.colorDecor};
  border-radius: 50%;
  padding: 3px;
  line-height: 1;
  padding: 0;
  transition: 0.5s;

    &:hover {
      background-image: url(${arrowDark});
      background-color: ${(props) => props.theme.colorDecor};
    }

    &:focus {
      background-image: url(${arrowDark});
      background-color: ${(props) => props.theme.colorDecor};
    }

    @media (max-width: 1024px) {
      width: 44px;
      height: 44px;
      left: ${(props) => (props.$left ? "-45px" : "auto")};
      right: ${(props) => (props.$right ? "-45px" : "auto")};
    }

    @media (max-width: 768px) {
      left: ${(props) => (props.$left ? "-10px" : "auto")};
      right: ${(props) => (props.$right ? "-10px" : "auto")};
    }
`;

export const StyledSlider = styled(Swiper)`
    margin: 0 auto 24px auto;
`;