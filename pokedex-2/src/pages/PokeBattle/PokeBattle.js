import Typography from '@mui/material/Typography';
import PokeBattleCard from './PokeBattleCard';
import { PageContainer, BattleContainer } from './styled'
import { useEffect, useState } from 'react'

const PokeBattle = () => {
    const [pokeNameRight, setPokeNameRight] = useState("")
    const [pokeNameLeft, setPokeNameLeft] = useState("")
    const [totalRight, setTotalRight] = useState(0)
    const [totalLeft, setTotalLeft] = useState(0)
    const [winner, setWinner] = useState("")

    const compareStats = () => {
        if (totalLeft && totalRight) {
            if (totalRight > totalLeft) {
                setWinner(pokeNameRight.charAt(0).toUpperCase() + pokeNameRight.slice(1))
            } else if (totalLeft > totalRight) {
                setWinner(pokeNameLeft.charAt(0).toUpperCase() + pokeNameLeft.slice(1))
            } else {
                setWinner("Empate!")
            }
        }
    }

    useEffect(() => {
        compareStats()
    }, [totalLeft, totalRight])

    return (
        <PageContainer>
            <Typography variant='h4' color='#5F5950' sx={{ margin: '25px 0' }} >Escolha os Pokémons</Typography>
            <BattleContainer>
                <PokeBattleCard
                    pokeName={pokeNameLeft}
                    setPokeName={setPokeNameLeft}
                    setTotal={setTotalLeft}
                />
                <div id='middle-container'>
                    <Typography variant='h5' color='#5F5950'><strong>VS</strong></Typography>
                    {(totalLeft && totalRight) && (totalLeft !== totalRight) ?
                        <Typography variant='h5' color='#5F5950'>Pokémon Vitorioso:</Typography> : <></>
                    }
                    <Typography variant='h5' color='#5F5950'>{winner}</Typography>
                </div>
                <PokeBattleCard
                    pokeName={pokeNameRight}
                    setPokeName={setPokeNameRight}
                    setTotal={setTotalRight}
                />
            </BattleContainer>
        </PageContainer>)
}

export default PokeBattle