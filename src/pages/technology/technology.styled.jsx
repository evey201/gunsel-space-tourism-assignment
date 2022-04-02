import styled from 'styled-components'

export const Container = styled.section`
    ${'' /* display: flex;
    flex-direction: column;
    padding: 7.5rem 0 3rem 8rem; */}
    color: #ffffff;
    display: grid;
    grid-template-columns: min-content 1fr 1fr;
    grid-column-gap: 8rem;
    column-gap: 8rem;
    grid-row-gap: 2.6rem;
    row-gap: 2.6rem;
    padding: 7.5rem 0 3rem 8rem;

    @media (min-width: 400px) and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0 0 7rem;
    grid-row-gap: 5.6rem;
    row-gap: 5.6rem;
  }

  @media only screen and (max-width: 380px) {
    display:grid;
    grid-template-columns: 1fr;
    ${'' /* grid-row-gap: 5.6rem;
    row-gap: 5.6rem; */}
    padding: 0 0 7rem;
    
}
`

export const Header = styled.h1`
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 4.725px;
    margin-bottom: 20px;
        padding-left: 3.8rem;
        ${'' /* margin-top: 8rem; */}
        grid-column: 1/-1;

    @media (min-width: 400px) and (max-width: 800px) {
        padding-left: 3.8rem;
        margin-top: 8rem;
        grid-column: 1/-1;
        margin-bottom: 0px;
    }
    @media (max-width: 380px) {
        font-size: 16px;
        padding-left: 3.8rem;
        margin-top: 8rem;
        margin-bottom: 0px;
        line-height: 19px;
        letter-spacing: 2.7px;
        text-transform: uppercase;
        width: max-content;
        grid-column: 1/-1;
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
    ${'' /* display: flex; */}
    display: none;
    ${'' /* justify-content: space-between; */}
    @media (max-width: 800px) {
        display: grid;
    }
    @media only Screen and (max-width: 380px) {
        display: grid;
    }
`
export const Contents = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 380px) {
        ${'' /* display: grid; */}
        display: none;
    }
    @media (min-width: 400px) and (max-width: 800px) {
        display: grid;
        display: none;
        ${'' /* flex-direction: column; */}
    }
`

export const TechData = styled.div`
    ${'' /* width: 450px; */}
    margin-bottom: 30px;
    align-self: auto;
    @media (max-width: 380px) {
        text-align: center;
        padding: 0 2.5rem;
    }
    @media (min-width: 400px) and (max-width: 800px) {
        text-align: center;
        padding: 0 11.7rem;
    }
    
`

export const SubHeading = styled.h2`
    align-self: center;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    margin-bottom: 1rem;

    color: #D0D6F9;
    @media (max-width: 380px) {
        text-align: center;
        padding: 0 2.5rem;
        
    }
`

export const Name = styled.h3`
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 64px;
    text-transform: uppercase;
    width: 100%;
    text-align: left;

    @media (max-width: 380px) {
        font-family: 'Bellefair';
        font-size: 2rem;
        margin-bottom: 1.7rem;
        line-height: 28px;
        text-transform: uppercase;
        text-align: center;
    }

    @media (min-width: 400px) and (max-width: 800px) {
        font-size: 40px;
        line-height: 46px;
        text-align: center;
        margin-bottom: 6px;
    }
`

export const Description = styled.p`
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    margin-bottom: 30px;
    

    @media (max-width: 380px) {
        font-size: 15px;
        line-height: 25px;

    }

    @media (min-width: 400px) and (max-width: 800px) {
        font-size: 16px;
        line-height: 28px;
        text-align: center;
    }
`

export const Picture = styled.picture`
    justify-self: end;
    max-width: 100%;
    @media (max-width: 380px) {
        grid-column: 2/3;
        width: 100%;
    }

    @media (min-width: 400px) and (max-width: 800px) {;
        grid-column: 2/3;
        width: 100%;
    }
`
export const Source = styled.source`
    justify-self: end;
    max-width: 100%;

    @media (max-width: 380px) {
        grid-column: 2/3;
        width: 100%;
    }
    @media (min-width: 400px) and (max-width: 800px) {;
        grid-column: 2/3;
        width: 100%;
    }

`
export const Images = styled.img`
    justify-self: end;
    max-width: 100%;

    @media (max-width: 380px) {
        grid-column: 2/3;
        width: 100%;
    }

    @media (min-width: 400px) and (max-width: 800px) {;
        grid-column: 2/3;
        width: 100%;
    }
`