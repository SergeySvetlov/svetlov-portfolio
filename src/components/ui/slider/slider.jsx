import React, {useRef } from "react";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Slide from "../slide/slide.jsx";
import { SliderWrapper, StyledButton, StyledSlider } from "./styled";

function Slider({works}) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return works && works.length ? (
        <SliderWrapper>
            <StyledButton $left ref={navigationPrevRef} title="Назад"></StyledButton>
            <StyledButton $right ref={navigationNextRef} title="Вперёд"></StyledButton>     
            <StyledSlider
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                navigation={{
                    nextE1: navigationNextRef.current,
                    prevE1: navigationPrevRef.current
                }}
                breakpoints={{
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    1199: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                  }}
                >
                {works && works.length && works.map((work, i) => (
                    <SwiperSlide key={i}>
                        <Slide work={work}/>
                    </SwiperSlide>
                ))}
            </StyledSlider>
        </SliderWrapper>
  ) : null;
}

export default Slider;