import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #img-pokebola{
        display: none;
    }

    @media (max-width: 450px){
        #img-pokebola{
            	display: inline;
        }
    }
`

export const ImgStyle = styled.img`
    height: 70vh;
    max-width: 60vw;
    border-radius: 1rem;
    margin-bottom: 1rem;

    @media (max-width: 450px){
        margin-top: 3rem;
        max-width: 96%;
        height: 50vh;
    }
`