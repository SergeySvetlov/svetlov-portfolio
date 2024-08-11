import React from "react";
import Container from "../../layout/container/container";
import { click } from "../../../assets/decor/index.js";
import { PortfolioSection, PortfolioTitle, PortfolioParagraph, PortfolioLink } from "./styled.js";
import Slider from "../../ui/slider/slider.jsx";

export default function Portfolio ({works}) {

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
        <PortfolioSection initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
            <Container>
                <PortfolioTitle custom={1} variants={textAnimation} id="portfolio" level={2} size={'medium'}>Мои работы</PortfolioTitle>
                <PortfolioParagraph custom={2} variants={textAnimation}>
                        Кстати, со структурой и кодом данной страницы вы можете ознакомиться
                    <PortfolioLink to={"https://github.com/SergeySvetlov/svetlov-portfolio"} icon={click}> тут</PortfolioLink>.
                </PortfolioParagraph> 
                <Slider works={works}/>          
            </Container>
        </PortfolioSection>
    )
}