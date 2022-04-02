import styled from "styled-components";
// import { NavLink } from 'react-router-dom'

export const OrderedList = styled.li`
    list-style: none;
    display: flex;
    column-gap: 3.5rem;
    ${'' /* margin-bottom: 3rem; */}
    letter-spacing: 2.7px;
    padding-bottom: 20px;
    border: none;
    border-bottom: 3px solid transparent;
    cursor: pointer;
    transition: border-bottom 0.2s ease;

    &:active{
        border-color: #ffffff;
    }
    &:hover {
        border-color: #ffffff;
    }

    @media (max-width: 380px) {
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 2.3625px;
        width: 250px;
        column-gap: 2rem;
        align-self: center;
    }
    
`
export const Dots = styled.li`

    width: 2rem;
    height: 2rem;
    background-color: rgba(#FFFFFF, 0.17);
    border-radius: 2rem;
    cursor: pointer;
    transition: all 0.2s ease;

    @media only screen and (max-width: 380px) {
      width: 1rem;
      height: 1rem;
    }

  &:hover {
    background-color: rgba(#FFFFFF, 0.6);
  }

  &:active {
    background-color: rgba(#FFFFFF, 1);
  }
`

export const SmallDots = styled.ul`
    display: flex;
    background-color: rgba(#FFFFFF, 0.17);
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease;

    @media only screen and (max-width: 380px) {
      width: 1rem;
      height: 1rem;
    }

  &:hover {
    background-color: rgba(#FFFFFF, 0.6);
  }

  &:active {
    background-color: rgba(#FFFFFF, 1);
  }
`

export const UnOrderedList = styled.ul`
    list-style: none;
    display: flex;
    column-gap: 3.5rem;
    @media (max-width: 380px) {
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 2.3625px;
        width: 250px;
        column-gap: 2rem;
        align-self: center;
    }
    @media (min-width: 400px) and (max-width: 800px) {
		align-self: center;
	}
    ${'' /* margin-bottom: 3rem; */}
`
