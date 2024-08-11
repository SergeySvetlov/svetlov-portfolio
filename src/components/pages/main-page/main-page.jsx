import React from "react";
import Hero from "../../blocks/hero/hero.jsx";
import About from "../../blocks/about/about.jsx";
import Skills from "../../blocks/skills/skills.jsx";
import Portfolio from "../../blocks/portfolio/portfolio.jsx";
import { MainPageWrapper } from "./styled.js";

export default function MainPage ({paddingTop, paddingBottom, skills, works}) {
    return (
        <MainPageWrapper $paddingTop={paddingTop} $paddingBottom={paddingBottom}>
            <Hero/>
            <About/>
            <Skills skills={skills}/>
            <Portfolio works={works}/>
        </MainPageWrapper>
    )
}