import React from "react";
import { Layout, Gallery } from "../../components";
import { useTabs } from "../../hooks";
import { Data } from "../../constants/data.js";
import { Container, Content, Header, Num, Role, Name, Description, BioData, Images } from "./crew.styled";

import DestopImage from "../../assets/crew/background-crew-desktop.jpg";
import MobileImage from "../../assets/crew/background-crew-tablet.jpg";

export const Crew = () => {
  const { crew } = Data;
  console.log(crew.length)
  const { activeTab, onTabChangeHandler } = useTabs(0);
  return (
    <Layout backgroundImage={DestopImage} mobileBgImage={MobileImage}>
      <Container>
          <Header>
            <Num>02</Num> Meet your crew
          </Header>
          <Content>
            <BioData>
                <Role>{crew[activeTab].role}</Role>
                <Name>{crew[activeTab].name}</Name>
                <Description>{crew[activeTab].bio}</Description>
            </BioData>
            <Gallery
                // className="Crew__dots-component"
                value={activeTab}
                data={new Array(crew.length).fill(' ')}
                onChange={onTabChangeHandler}
                // tabClassName="crew__dot"
            />
          </Content>
        <Images 
            src={crew[activeTab].images.png}
            alt="crewMember"
        />
      </Container>
    </Layout>
  );
};
