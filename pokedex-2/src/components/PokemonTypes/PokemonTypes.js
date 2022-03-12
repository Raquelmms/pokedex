import { Badge } from '@mantine/core';
import { useEffect, useState } from 'react';

const PokemonTypes = (props) => {
    const [color, setColor] = useState("gray")

    const typeColor = () => {
        switch (props.element) {
            case 'fire':
                return setColor("red")
            case 'water':
                return setColor("blue")
            case 'grass':
                return setColor("green")
            case 'poison':
                return setColor("grape")
            case 'electric':
                return setColor("yellow")
            case 'flying':
                return setColor("cyan")
            case 'ghost':
                return setColor("violet")
            case 'dark':
                return setColor("dark")
            case 'fighting':
                return setColor("orange")
            case 'fairy':
                return setColor("pink")
            case 'normal':
                return setColor("gray")
            case 'bug':
                return setColor("lime")
            case 'dragon':
                return setColor("indigo")
            case 'ground':
                return setColor("orange")
            case 'psychic':
                return setColor("pink")
            case 'ice':
                return setColor("blue")
            case 'rock':
                return setColor("yellow")
            case 'ground':
                return setColor("gray")
            default:
                return setColor("gray")
        }
    }
    useEffect(() => {
        typeColor()
    }, [])

    return <Badge ml={5} mr={5} size='xl' variant="filled" color={color}>{props.element}</Badge>
}

export default PokemonTypes