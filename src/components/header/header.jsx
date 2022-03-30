import React from 'react'
import { Logo } from '../Logo'
import {
    HeaderWrapper,
    LogoContainer,
    Divider,
    NavContainer
} from './header.styled'

export const Header = () => {
    return (
        <>
            <HeaderWrapper>
                <LogoContainer to='/'>
                    <Logo />
                </LogoContainer>
                <Divider />
                <NavContainer>fdjkfj</NavContainer>
            </HeaderWrapper>
        </>
    )
}