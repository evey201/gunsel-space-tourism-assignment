import React from 'react'
import { Layout, Tabs } from '../../components'
import { useTabs } from '../../hooks'
import { 
    Container,
    LeftSide,
    Header,
    Num,
    Content,
    Images,
    ImageWrapper,
    Description,
    Name,
    Divider,
    KeyValues,
    Label,
    Travel
} from './destination.styled';

import {Data} from '../../constants/data.js'
import DestopImage from '../../assets/destination/background-destination-desktop.jpg'
import MobileImage from '../../assets/destination/background-destination-tablet.jpg'

export const Destination = () => {
    const { destinations } = Data;
    // console.log(destinations);
    const { activeTab, onTabChangeHandler } = useTabs(0);
    return (
        <>
            <Layout backgroundImage={DestopImage} mobileBgImage={MobileImage}>
                <Container>
                    <Header>
                       <Num>01</Num> Pick your destination
                    </Header>
                    <LeftSide>
                        <ImageWrapper>
                        <Images
                            src={destinations[activeTab].images.png}
                            alt="planet"
                            className='destination__image'
                        />
                        </ImageWrapper>
                        <Content>
                            <Tabs 
                                value={activeTab}
                                data={destinations.map((dest) => dest.name)}
                                onChange={onTabChangeHandler}
                                // className="tab-btn"
                            />
                            <Name>
                                {destinations[activeTab].name}
                            </Name>
                            <Description>
                                {destinations[activeTab].description}
                            </Description>
                            <Divider />
                            <KeyValues>
                                <div>
                                    <Label>
                                        AVG.DISTANCE
                                    </Label>
                                    <Travel>
                                        {destinations[activeTab].distance}
                                    </Travel>
                                </div>
                                <div>
                                    <Label>
                                        Est. travel time
                                    </Label>
                                    <Travel>
                                        {destinations[activeTab].travel}
                                    </Travel>
                                </div>
                            </KeyValues>
                        </Content>
                    </LeftSide>
                    
                </Container>
            </Layout>
        </>
    )
}