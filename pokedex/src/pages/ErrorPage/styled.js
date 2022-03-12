import styled from "@emotion/styled";

export const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 78px);
`

export const ImgStyled = styled.img`
    height: 70vh;
    border-radius: 1rem;

    @media (max-width: 450px){
        max-width: 96%;
        max-height: 50%;
    }
`