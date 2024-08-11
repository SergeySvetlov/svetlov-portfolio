import React from "react";
import Container from "../../layout/container/container";
import {HeroSection, HeroTitle, HeroSubTitle} from "./styled.js";

export default function Hero () {

    const textAnimation = {
        hidden: {
          x: -100,
          opacity: 0,
        },
        visible: custom => ({
          x: 0,
          opacity: 1,
          transition: { delay: custom * 0.2 }, 
        }),
    }



    return (
        <HeroSection initial="hidden" whileInView="visible">
            <Container>
                <HeroTitle custom={1} variants={textAnimation} level={1} size={'big'}>Светлов Сергей</HeroTitle>
                <HeroSubTitle custom={2} variants={textAnimation}>Junior фронтенд-разработчик</HeroSubTitle>                
            </Container>
        </HeroSection>
    )
}