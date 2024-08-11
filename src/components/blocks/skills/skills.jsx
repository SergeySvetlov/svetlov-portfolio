import React from "react";
import Container from "../../layout/container/container";
import {Li} from "../../elements/index.js"
import {SkillsSection, SkillsTitle, SkillsList, SkillsName, SkillsBlock, SkillsLevel} from "./styled.js";

export default function Skills ({skills}) {

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
        <SkillsSection initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
            <Container>
                <SkillsTitle custom={1} variants={textAnimation} level={2} size={'small'}>Мои навыки</SkillsTitle>
                <SkillsList>
                    {
                        skills && skills.map((skill, i) => {
                            return (
                                <Li key={i}>
                                    <SkillsName $icon={skill.icon}>{skill.name}</SkillsName>
                                    <SkillsBlock>
                                        <SkillsLevel $level={skill.level}><span>{skill.level}%</span></SkillsLevel>
                                    </SkillsBlock>
                                </Li>
                            )
                        })
                    }                       
                </SkillsList>        
            </Container>
        </SkillsSection>
    )
}