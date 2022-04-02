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

    width: 3rem;
    height: 3rem;
    background-color: transparent;
    opacity:0.5;
    border-radius: 2rem;
    cursor: pointer;
    transition: all 0.2s ease;

    @media only screen and (max-width: 380px) {
      width: 1rem;
      height: 1rem;
    }

  &:hover {
    background-color: rgba(#FFFFFF);
    opacity: 1;
  }

  &:active {
    background-color: rgba(#FFFFFF, 1);
  }
`

export const SmallDots = styled.ul`
    display: flex;
    cursor: pointer;
    transition: all 0.2s ease;
    padding-left: 40px;

    @media (max-width: 380px) {
      column-gap: 2rem;
      align-self:center;
    }

    @media (min-width: 400px) and (max-width: 800px) {
      column-gap: 2rem;
      align-self: center;
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

export const Circles = styled.li`

    width: 4rem;
    height: 4rem;
    background-color: transparent;
    border: 1px solid #FFFFFF;
    opacity:0.5;
    font-size: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4rem;
    margin-bottom: 15px;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:active {
      background-color: #FFFFFF;
      opacity: 1;
      color: #333
    }
    &:hover {
      background-color: #FFFFFF;
      opacity: 0.1;
      color: #333
    }

    @media only screen and (max-width: 380px) {
      width: 3rem;
      height: 3rem;
      border-radius: 1.5rem;
      font-size: 16px;
    }
    
`

export const BigDots = styled.ul`
    column-gap: 3.5rem;
    ${'' /* align-self: flex-start; */}
    @media only screen and (min-width: 400px) and (max-width: 800px) {
      display: flex;
      grid-column-gap: 1.6rem;
      column-gap: 1.6rem;
      justify-content: center;
    }

    @media only screen and (max-width: 380px) {
      display: flex;
      grid-column-gap: 1.6rem;
      column-gap: 1.6rem;
      justify-content: center;
    }
    align-self: auto;
`

