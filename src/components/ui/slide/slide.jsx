import React, {useRef, useState } from "react";
import { SlideArticle, SlideTitle, SlideDescription, SlideList, SlideItem, SlideLink } from "./styled.js";

export default function Slide ({ work }) {
    const slideRef = useRef(null);
    const btnRef = useRef(null);

    const [focus, setFocus] = useState(false);

    return (          
        <SlideArticle ref={slideRef} $focus={focus}>
            <SlideTitle level={4} size="extra-small">{work.name}</SlideTitle>
            <picture>
                <source type="image/webp" srcSet={`${work.img.webp}, ${work.img.webp2x} 2x`}></source>
                <img src={work.img.jpg} width="780" srcSet={`${work.img.jpg2x} 2x`} alt="Скриншот проекта"/>
            </picture>
            <SlideDescription>
                <span>{work.subtitle}</span>
                <SlideList>
                    {
                        work.features && work.features.map((feature, i) => <SlideItem key={i}>{feature}</SlideItem>)
                    }
                </SlideList>
                <SlideLink ref={btnRef} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} link={work.link}>Посмотреть</SlideLink>
            </SlideDescription>
        </SlideArticle>        
    )
}