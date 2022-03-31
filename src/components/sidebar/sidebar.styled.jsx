import styled from "styled-components";
import { Link } from "react-router-dom";

export const SideBarContainer = styled.nav`
    display: none;
    @media(max-width: 400px) {
        position: absolute;
        display: flex;
        flex-direction: column;
        color: #FFFFFF;
        background: rgba(255, 255, 255, 0.04);
        height: 100%;
        width: 65%;
        transition: all 0.2s;
        transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
        right: ${({ open }) => (open ? '0' : '-100vw')};
        backdrop-filter: blur(81.5485px);
        z-index: 100;
    
    }
`

export const CloseWrapperContainer = styled.div`
    padding-top: 30px;
    padding-left: 200px;
`
export const CloseWrapper = styled.button`
    ${'' /* display: none; */}
    @media(max-width: 400px) {
        background: inherit;
        outline: none;
        border: 0;
    }
`
export const SideBarMenu = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    text-transform: uppercase;
    width: 100%;
    padding-top: 20px;
`

export const SidebarMenuItem = styled.li`
    display: flex;
    height: 20px;
    width: 100%;
    align-items: center;
    padding: 10px;
    ${'' /* padding-left: 30px; */}
    ${'' /* background: ${(props) => (props.active ? '#EDE1F6' : '')}; */}
    border-right-style: ${(props) => (props.active ? 'solid' : '')};
    border-right-width: ${(props) => (props.active ? '4px' : '')};
    border-right-color: ${(props) => (props.active ? '#FFFFF' : '')};
    transition: all 0.1s;
    &:hover {
        cursor: pointer;
    }
    margin-bottom: 10px;
    color: #FFFFFF;
    text-decoration: none;
`
export const ItemLabel = styled.p`
    font-family: 'Barlow Condensed';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    text-align: left;
`