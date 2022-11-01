import React, {useState} from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from "../../components/ListOfGifs";
import useGifs from "../../hooks/useGifs";

const POPULAR_GIFS = ["Argentina", "League of legends", "Anime"];

export default function Home() {
  const [keyword, setKeyword] = useState('');

  //hook de wouter para navegar a otra pagina?
  // parametros una ruta y una funcion
  const [path, pushLocation] = useLocation();

  const { loading, gifs } = useGifs();
  //cuando se ejecuta el submit en el formulario
  const handleSubmit = event => {
    //navegar a otra ruta
    event.preventDefault();
    pushLocation(`/search/${keyword}`);
  }

  //para los cambios en el input, recuperar el dato?
  const handleChange = event => {
    setKeyword(event.target.value);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="Busque un gif aquí..." onChange={handleChange} type="text" value={keyword} />
      </form>
      <h3 className="App-title">Ultima busqueda</h3>
      <ListOfGifs gifs={gifs} />
      <h3 className="App-title">Los más buscados</h3>
      <ul>
        {POPULAR_GIFS.map(popularGif => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gif de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
