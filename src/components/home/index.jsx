import { useSelector, useDispatch } from 'react-redux'
import { getPokemons, searchPokemon } from '../../redux/actions'

export const Home = () => {
    const {pokemon, searchPokemon: buscarPokemon} = useSelector(state => state)

    const dispatch = useDispatch()
    const traerData = () => {
        console.log("Me ejecute")
        dispatch(getPokemons())
    }
    const searchData = () => {
        dispatch(searchPokemon(pokemon))
        console.log("Busque ", buscarPokemon)
        
    }

    console.log(useSelector(state => state.pokemon))
    return (
        <div>
        {pokemon?.map((item, index) => {return (
            <p key={index}>{item.name}</p>
        )})}
        <button onClick={traerData}>Traer</button>
        <button onClick={searchData}>Buscar</button>
        </div>
    )
}
