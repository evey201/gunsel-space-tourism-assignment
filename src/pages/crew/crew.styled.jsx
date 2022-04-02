import styled from 'styled-components'

export const Container = styled.section`

    display: flex;
    justify-content: space-evenly;
    padding: 7.5rem 10rem 0 9.5rem;
    color: #ffffff;

    @media (min-width: 400px) and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 4rem;
    row-gap: 4rem;
    height: 100vh;
    padding: 7.5rem 4rem 0;
  }

    @media (max-width: 380px) {
        padding: 5.5rem 2rem 0 3rem;
        display: flex;
        flex-direction: column;
        align-self: center;
        max-width: 380px;
        
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
        width: 300px;
        text-align: center;
    }

    @media (min-width: 400px) and (max-width: 800px) {
        text-align: start;
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
    max-width: 80%;
    
    @media (max-width: 380px) {
        display: flex;
        flex-direction: column;
        align-self: center;
        max-width: 80%;
        text-align: center;
    }

    @media (min-width: 400px) and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-self: center;
        text-align: center;
        margin: 0 auto;
	}
`

export const Role = styled.h4`
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 37px;

    text-transform: uppercase;

    color: #FFFFFF;

    mix-blend-mode: normal;
    opacity: 0.5;

    @media (min-width: 400px) and (max-width: 800px) {
        font-family: 'Bellefair';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        /* identical to box height */

        text-transform: uppercase;

        color: #FFFFFF;

        mix-blend-mode: normal;
        opacity: 0.5;
	}

    @media (max-width: 380px) {
        font-size: 16px;
        line-height: 18px;
        text-align: center;
        text-transform: uppercase;
        width: 300px;
    }
`

export const Name = styled.h2`
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 64px;
    text-transform: uppercase;
    width: max-content;

    @media (max-width: 380px) {
        font-family: 'Bellefair';
        font-size: 24px;
        line-height: 28px;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 10px;
        width: 300px;
    }

    @media (min-width: 400px) and (max-width: 800px) {
        font-size: 40px;
        line-height: 46px;
        text-align: center;
        padding-left: 90px;
        margin-bottom: 20px;
    }
`

export const Description = styled.p`
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    

    @media (max-width: 380px) {
        font-size: 15px;
        line-height: 25px;
        ${'' /* text-align: left; */}
        width:300px

    }

    @media (min-width: 400px) and (max-width: 800px) {
        font-size: 16px;
        line-height: 28px;
        text-align: center;
    }
`

export const BioData = styled.div`
    margin-bottom: 30px;
    @media (max-width: 380px) {
        display: flex;
        flex-direction: column;
        column-gap: 4px;
        align-items: center;
        text-align: center;
	}
`

export const Images = styled.img`
    align-self: center;
    max-width: 100%;

    @media (max-width: 380px){
        align-self: end;
        width: 400px;

        max-width: 100%;
    }
    @media  (max-width: 800px) {
        align-self: end;
        max-width: 100%;
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
        justify-self: end;
    }
`