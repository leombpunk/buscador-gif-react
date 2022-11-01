import React from "react";
import Spinner from "../../components/Spinner";
import ListOfGifs from "../../components/ListOfGifs";
import useGifs from "../../hooks/useGifs";

export default function SearchResults({ params }) {
  const { keyword } = params;

  const { loading, gifs } = useGifs({ keyword });

  //TODO ESTE CODIGO (comentado) FUE A UN CUSTOM HOOK -> useGifs
  // const [loading, setLoading] = useState(false);
  // const [gifs, setGifs] = useState([]);

  // //efecto que se ejecuta cada vez que el componente se renderiza
  // //se ejecuta cada vez que la [keyword] cambie
  // useEffect(
  //   function() {
  //     setLoading(true);
  //     getGifs({ keyword }).then(gifs => {
  //       setGifs(gifs);
  //       setLoading(false);
  //     });
  //   },
  //   [keyword]
  // );

  return <>{loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}</>;
}
