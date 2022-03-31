import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    color: #fff;
    align-items: center;
    z-index:1;
`

export const IconContainer = styled.div`
    ${'' /* padding-top: 20px; */}
    @media (max-width: 380px) {
        max-width: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 20px;
        padding-left: 15px;
    }

    @media (min-width: 400px) and (max-width: 800px) {
        padding-right: 250px;
    }
`

export const LogoContainer = styled(Link)`
`
export const MenuToggler = styled.button`
    height: 30px;
    width: 30px;
    border: none;
    background-color: inherit;
    outline: none;
    &:focus {
        outline: none;
        cursor: pointer
    }

    @media (min-width: 380px) {
        display: none;
    } 
`

export const RightCorner = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    ${'' /* height: 40px */}

    @media (max-width: 380px) {
        display: none;
    } 

`
export const Divider = styled.div`
    height: 1px;
    width: 700px;
    background: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.25;

    @media (max-width: 800px) {
        display: none;
    }
`

export const NavContainer = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-transform: uppercase;
    color: #fff;
    width: 100%;
    height: 40px;
    z-index:1;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);

    @media (max-width: 380px) {
        display: none;
    }
    @media (min-width: 400px) and (max-width: 800px) {
        height: 80px;
    }
    
`

export const NavLinkItem = styled.li`
    display: flex;
    height: 100%;
    align-items: center;
    font-family: 'Barlow Condensed';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    list-style: none;
    line-height: 17px;
    /* identical to box height */

    letter-spacing: 2.3625px;

    color: #FFFFFF;

    &:active {
        border-bottom: 1px solid #FFFFFF;
    }

    &: hover{
        cursor: pointer;
    }
`

export const NavLink = styled(Link)`
    color: #FFFFFF;
    text-decoration: none;
    &:nth-child() {
        @media (min-width: 400px) and (max-width: 800px) {
            display:none;
        }
    }
`