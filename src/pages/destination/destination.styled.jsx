import styled from 'styled-components'

export const Container = styled.section`
    color: #ffffff;
    padding: 112px;
    display: flex;
	flex-direction: column;
	justify-content: space-between;
    overflow-y: hidden;

    @media (max-width: 380px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: min(90%, 2000px);
        margin: 1.5rem auto 2rem;
        align-items: center;
    }

    @media (min-width: 400px) and (max-width: 800px) {
    padding: 7.5rem 4rem;
    height: 100vh;
    overflow-y: scroll;
  }
`
export const LeftSide = styled.div`
    display: flex;
    ${'' /* flex-wrap: wrap; */}
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: 40px;

    @media (max-width: 380px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: min(90%, 2000px);
        margin: 1.5rem auto 2rem;
        align-items: center;
    }
    
    @media (min-width: 400px) and (max-width: 800px) {
        display: flex;
		justify-content: space-between;
		flex-direction: column;
		align-items: center;
		margin-top: 0;
	}

`

export const Header = styled.h1`
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 4.725px;
    margin-bottom: 20px;

    @media (max-width: 380px) {
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
        text-transform: uppercase;
        width: max-content;
    }
`

export const Num = styled.span`
   color: #ffffff;
   opacity: 0.25;
   @media (max-width: 380px) {
       font-size: 16px;
       width: max-content;
   }
`

export const Content = styled.div`
    display: flex;
    flex: 1 1 0px;
    flex-direction: column;
    padding-top: 50px;
    padding-left: 100px;
    padding-right: 100px;
    max-width: 700px;
    width: 400px;
    @media (max-width: 380px) {
        display: flex;
        margin: 0px;
        padding-left: 0;
        padding-right: 0;
        text-align: center;
        align-self: center;
        max-width: 380px;
        width:300px;
    }
    @media (min-width: 400px) and (max-width: 800px) {
		text-align: center;
		width: 573px;
        margin: 0px auto;
        padding-left: 0;
        padding-right: 0;
	}
`
export const Images = styled.img`
    align-self: center;
    width: 350px;
    height: auto;

    @media (max-width: 380px){
        width: 170px;
        height: auto;
    }
`
export const ImageWrapper = styled.div`
    padding-right: 200px;
    padding-top: 3.3rem;
    @media (max-width: 380px) {
        margin: 0;
        padding-top: 0;
        padding-right: 0px;
    }
    @media (min-width: 400px) and (max-width: 800px) {
        margin: 5rem 0px 4rem;
        padding-right: 0px;
    }
`
export const Description = styled.p`
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    word-wrap: break-word;
    margin-bottom: 30px;

    @media (max-width: 380px){
        font-size: 15px;
        line-height: 25px;
    }
`

export const Name = styled.h2`
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 100px;
    text-transform: uppercase;
    line-height: 115px;

    @media (max-width: 380px) {
        font-family: 'Bellefair';
        font-size: 56px;
        text-transform: uppercase;
        line-height: 64px;
        text-align: center;
    }
`



export const Divider = styled.div`
	height: 1px;
	width: 400px;
	background: #ffffff;
	mix-blend-mode: normal;
	opacity: 1;

    @media (min-width: 400px) and (max-width: 800px) {
        margin-top: 20px;
        margin-bottom: 20px;
        width: inherit;
    }

`;

export const KeyValues = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 20px;

    @media only screen and (max-width: 380px) {
      grid-template-columns: 1fr;
      row-gap: 3rem;
    }
`
export const Label = styled.label`
    display: inline-block;
    margin-bottom: 1rem;
    font-family: 'Barlow Condensed';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #D0D6F9;
    text-transform: uppercase;
`
export const Travel = styled.h6`
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;
    /* identical to box height */

    text-transform: uppercase;

    color: #FFFFFF;
`