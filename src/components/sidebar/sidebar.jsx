import React from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import { Routes } from '../../constants/routes';
import {
	SideBarContainer,
	CloseWrapperContainer,
	CloseWrapper,
	SideBarMenu,
	SidebarMenuItem,
	ItemLabel,
} from './sidebar.styled';

export const SideBar = (props) => {
	const { open, close } = props;
	const { pathname } = useLocation();
	return (
		<>
			<SideBarContainer open={open}>
				<CloseWrapper onClick={close}>
					<Close />
				</CloseWrapper>

				<SideBarMenu>
					{Routes?.map((route) => {
						const active = matchPath(
							pathname,
							route?.path
						)?.isExact;
						return (
							<Link
								to={route?.path}
								key={route?.title}
								onClick={close}
							>
								<SidebarMenuItem active={active}>
									<ItemLabel>{route?.title}</ItemLabel>
								</SidebarMenuItem>
							</Link>
						);
					})}
				</SideBarMenu>
			</SideBarContainer>
		</>
	);
};
