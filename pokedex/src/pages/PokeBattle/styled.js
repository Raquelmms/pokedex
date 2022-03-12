import styled from 'styled-components'

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const TypeContainer = styled.div`
    display: flex ;
    justify-content: center;
`

export const BattleContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 300px 1fr;
    width: 95vw;

    #middle-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0;

    div {
        width: 100%;
    }

    img {
        width: 20vw;
        min-width: 250px;
    }
`

export const Select = styled.select`
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 20px;
`