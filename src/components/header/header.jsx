import React from 'react';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { Logo } from '../Logo';
import {
	HeaderContainer,
	IconContainer,
	LogoContainer,
	MenuToggler,
	RightCorner,
	Divider,
	NavContainer,
	NavLinkItem,
	NavLink,
	NavNum
} from './header.styled';

const navLinks = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'Destination',
		path: '/destination',
	},
	{
		name: 'Crew',
		path: '/crew',
	},
	{
		name: 'Technology',
		path: '/technology',
	},
];

export const Header = ({ toggle }) => {
	// const { open, close } = props;
	return (
		<>
			<HeaderContainer>
				<IconContainer>
					<LogoContainer to='/'>
						<Logo />
					</LogoContainer>
					<MenuToggler onClick={toggle}>
						<MenuIcon />
					</MenuToggler>
				</IconContainer>
				<RightCorner>
					<Divider />
					<NavContainer>
						{navLinks.map((link, index) => (
							<NavLinkItem key={index + link.path}>
								<NavLink to={link.path}>
									{({ isActive }) => (
										<span
											style={
												isActive
													? {
															borderBottom:
																'2px solid #fff',
													  }
													: undefined
											}
										>
											<NavNum>{index.toString().padStart(2, 0)}{' '}</NavNum>
											{link.name}
										</span>
									)}
								</NavLink>
							</NavLinkItem>
						))}
					</NavContainer>
				</RightCorner>
			</HeaderContainer>
		</>
	);
};
