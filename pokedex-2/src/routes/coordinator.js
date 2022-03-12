export const goToHome = (navigate) => {
    navigate("/")
}

export const goToPokedex = (navigate) => {
    navigate("/pokedex")
}

export const goToPokemonDetail = (navigate, id) => {
    navigate(`/pokemon/${id}`)
}

export const goToBattle = (navigate) => {
    navigate("/battle")
}