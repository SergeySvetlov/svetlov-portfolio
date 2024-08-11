import React from "react";
import { motion } from "framer-motion";
import Container from "../../layout/container/container";
import { main, main2x, mainWebp, main2xWebp, certificate } from "../../../assets/content/index.js";
import { AboutSection, AboutTitle, AboutImg, AboutSubTitle, AboutParagraph, AboutLink, AboutSertificate } from "./styled.js";

export default function About () {

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

    const imgAnimation = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          scale: [0.1, 0.2, 0.5, 0.7, 1],
          rotate: [0, 30, 60, 240, 360], 
        },
      }

    return (
        <AboutSection>
            <Container>
                <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
                    <AboutTitle custom={1} variants={textAnimation} id={"about"} level={2} size={'medium'}>Давайте познакомимся</AboutTitle>
                    <AboutImg variants={imgAnimation}>
                        <picture>
                            <source type="image/webp" srcSet={`${mainWebp}, ${main2xWebp} 2x`}></source>
                            <img src={main} width="711" height="536" srcSet={`${main2x} 2x`} alt="Фотография" />
                        </picture>
                    </AboutImg>                    
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
                    <AboutSubTitle custom={1} variants={textAnimation} level={3} size={'small'}>Пара слов о себе</AboutSubTitle>
                    <AboutParagraph custom={2} variants={textAnimation}>
                        Здравствуйте. Имею высшее техническое образование, долгое время занимался предпринимательством,
                        владел розничным магазином гик-аниме тематики. Люблю гитару и спорт. Сейчас осваиваю фронтенд.
                        Успешно защитил все проекты по курсу от 
                        <AboutLink to={"https://htmlacademy.ru/"}> htmlacademy</AboutLink>:
                        профессия «Фронтенд-разработчик». Имею 
                        <AboutSertificate> сертификат </AboutSertificate>
                        <img src={certificate} width="200" alt="Сертификат"/>                         
                        об окончании годового обучения. 
                        С 2023 года прохожу стажировку в 
                        <AboutLink to={"https://ligaa.agency/"}> Лиге А </AboutLink>.
                        Основное моё качество - техническое образование в сочетании с творческим складом ума.
                    </AboutParagraph>                    
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
                    <AboutSubTitle custom={1} variants={textAnimation} level={3} size={'small'}>Чем могу быть полезен</AboutSubTitle>
                    <AboutParagraph custom={2} variants={textAnimation}>
                        Имею опыт командной разработки: чтение ТЗ, роудмап, отчёты по работе, совещания в discord. Знаком с адаптивной версткой, резиновой версткой, методологией БЭМ. Работал с CSS-препроцессорами (SASS, Less), шаблонизатором Pug. Умею работать с сервисом Figma и системой контроля версий Git. Знаю JS, могу решать основные задачи создания интерфейса опираясь на накопившиеся паттерны. Есть базовые знания React. Знаком с библиотеками Swiper и jQuery.
                    </AboutParagraph>                       
                </motion.div>             
            </Container>
        </AboutSection>
    )
}