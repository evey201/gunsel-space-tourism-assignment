import React from "react";
import { Layout, Circle } from "../../components";
import { useTabs } from "../../hooks";
import { Data } from "../../constants/data.js";
import {
    Container,
    Header,
    Num,
    Content,
    TechData,
    SubHeading,
    Name,
    Description,
    Picture,
    Source,
    Images,
    Contents
} from './technology.styled'

import DestopImage from "../../assets/technology/background-technology-desktop.jpg";
import MobileImage from "../../assets/technology/background-technology-tablet.jpg";

export const Technology = () => {
    const { technology } = Data;
    // console.log(crew.length)
    const { activeTab, onTabChangeHandler } = useTabs(0);
    return (
        <Layout backgroundImage={DestopImage} mobileBgImage={MobileImage}>
            <Container>
            <Header>
                <Num>03</Num> SPACE LAUNCH 101
            </Header>
            <Content>
            <Picture>
                <Source 
                    srcSet={technology[activeTab].images.portrait}
                    media="(min-width: 800px)"
                />
                <Images
                    className="technology__term-photo"
                    src={technology[activeTab].images.landscape}
                    alt="term"
                />
            </Picture>
            </Content>
            <Circle
                value={activeTab}
                data={[1, 2, 3]}
                onChange={onTabChangeHandler}
            />
            <TechData>
                <SubHeading>The Terminology...</SubHeading>
                <Name> {technology[activeTab].name}</Name>
                <Description>{technology[activeTab].description}</Description>
            </TechData>
            <Contents>
            <Picture>
                <Source 
                    srcSet={technology[activeTab].images.portrait}
                    media="(min-width: 800px)"
                />
                <Images
                    className="technology__term-photo"
                    src={technology[activeTab].images.landscape}
                    alt="term"
                />
            </Picture>
            </Contents>
            </Container>
        </Layout>
    )
}