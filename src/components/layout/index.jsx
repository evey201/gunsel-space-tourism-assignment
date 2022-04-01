import React, { useState } from 'react';
import { Header, SideBar } from '../../components';
import { Main } from './Layout.styled';

export const Layout = ({ children, backgroundImage, mobileBgImage }) => {
	const [isSideBarOpen, toggleSidebar] = useState(false);
	console.log(isSideBarOpen);
	return (
		<Main backgroundImage={backgroundImage} mobileBgImage={mobileBgImage}>
			{/* <SideBar open={isSideBarOpen} close={() => toggleSidebar(false)} /> */}
			<Header toggle={() => toggleSidebar(!isSideBarOpen)} />
			{children}
		</Main>
	);
};
