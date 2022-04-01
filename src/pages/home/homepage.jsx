import React from 'react';
import { Layout } from '../../components';
import {
	Container,
	Text,
	Flex,
	Content,
	Button,
	Bold,
} from './homepage.styled';
import DesktopImage from '../../assets/images/desktop-home-bg.svg';
import MobileImage from '../../assets/images/mobile-home-bg.png';

export const HomePage = () => {
	return (
		<Layout backgroundImage={DesktopImage} mobileBgImage={MobileImage}>
			<Container>
				<Flex>
					<Content>
						<Text title>So, you want to travel to</Text>
						<Bold>Space</Bold>
						<Text>
							Let’s face it; if you want to go to space, you might
							as well genuinely go to outer space and not hover
							kind of on the edge of it. Well sit back, and relax
							because we’ll give you a truly out of this world
							experience!
						</Text>
					</Content>
					<Button>explore</Button>
				</Flex>
			</Container>
		</Layout>
	);
};
