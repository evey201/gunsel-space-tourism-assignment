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
    NavLink
} from './header.styled'

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
                        <NavLinkItem>
                            <NavLink to="/">
                                00 Home
                            </NavLink>
                        </NavLinkItem>
                        <NavLinkItem>
                            <NavLink to="/destination">
                                01 Destination
                            </NavLink>
                        </NavLinkItem>
                        <NavLinkItem>
                            <NavLink to="/crew">
                                02 Crew
                            </NavLink>
                        </NavLinkItem>
                        <NavLinkItem>
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