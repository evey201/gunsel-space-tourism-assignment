import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import { Routes } from '../../constants/routes';
import {
	SideBarContainer,
	CloseWrapper,
	SideBarMenu,
	SidebarMenuItem,
	ItemLabel,
} from './sidebar.styled';

export const SideBar = (props) => {
	const { open, close } = props;
	return (
		<>
			<SideBarContainer open={open}>
				<CloseWrapper onClick={close}>
					<Close />
				</CloseWrapper>

				<SideBarMenu>
					{Routes?.map((route) => {
						
						return (
							<NavLink
								to={route?.path}
								key={route?.title}
								onClick={close}
							>
								{({ isActive }) => (
									<SidebarMenuItem style={isActive ? {
										borderRight: '4px solid #fff'
									} : undefined}>
										<ItemLabel>{route?.title}</ItemLabel>
									</SidebarMenuItem>

								)}
							</NavLink>
						);
					})}
				</SideBarMenu>
			</SideBarContainer>
		</>
	);
};
