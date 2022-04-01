import React from 'react'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg'
import { Logo } from '../Logo'
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
    TabNavLink
} from './header.styled'

export const Header = ({ toggle }) => {
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
                        <NavLinkItem>
                            <TabNavLink to="/">
                                Home
                            </TabNavLink>
                            <NavLink to="/">
                                00 Home
                            </NavLink>
                        </NavLinkItem>
                        <NavLinkItem>
                            <TabNavLink to="/destination">
                                Destination
                            </TabNavLink>
                            <NavLink to="/destination">
                                01 Destination
                            </NavLink>
                        </NavLinkItem>
                        <NavLinkItem>
                            <TabNavLink to="/crew">
                                crew
                            </TabNavLink>
                            <NavLink to="/crew">
                                02 Crew
                            </NavLink>
                        </NavLinkItem>
                        <NavLinkItem>
                            <TabNavLink to="/tecnology">
                                technology
                            </TabNavLink>
                            <NavLink to="/technology">
                                03 technology
                            </NavLink>
                        </NavLinkItem>
                    </NavContainer>
                </RightCorner>
            </HeaderContainer>
        </>
    )
}