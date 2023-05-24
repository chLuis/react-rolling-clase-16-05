import { useSelector, useDispatch } from "react-redux";
import { getPokemons, searchPokemon } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const { pokemon, searchPokemon: buscarPokemon } = useSelector(
    (state) => state
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const traerData = () => {
    console.log("Me ejecute");
    dispatch(getPokemons());
  };
  const searchData = (event) => {
    console.log(event)
    dispatch(searchPokemon(pokemon));
    console.log("Busque ", buscarPokemon);
  };
  const changeRoute = () => {
    navigate("/create");
  };
  console.log(useSelector((pepe) => pepe))
  return (
    <div>
      {pokemon?.map((item, index) => {
        return <p key={index}>{item.name}</p>;
      })}
      <button onClick={traerData}>Traer</button>
      <input type="text" id="buscarPokemon" ></input>
      <button onClick={(event)=>searchData (event)}>Buscar</button>
      <button onClick={changeRoute}>llevame a crear un pokemon</button>
    </div>
  );
};
