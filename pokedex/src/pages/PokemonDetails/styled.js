import styled from "styled-components"

export const CardPokemonDetail = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items:center;
    width: 100%;
    margin-bottom: 2rem;

    img {
        width: 90vw;
        max-width: 350px;
    }
`

export const TypeContainer = styled.div`
    display: flex ;
    justify-content: center;
`

export const CardStatsPoke = styled.div`
    background-color: white;
    border-radius: 2rem;
    padding: 2em;
    width: 70vw;
`

export const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 1rem 0;
    column-gap: 1rem;

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;

        button {
            margin: 0.5rem 0;
        }
    }
`

export const SkillContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 450px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`