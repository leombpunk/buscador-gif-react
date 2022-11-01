import { useContext, useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";

export default function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  // const [gifs, setGifs] = useState([]);
  const {gifs, setGifs} = useContext(GifsContext);

  //efecto que se ejecuta cada vez que el componente se renderiza
  //se ejecuta cada vez que la [keyword] cambie
  useEffect(
    function() {
      setLoading(true);
      const keywordToUse = keyword || localStorage.getItem("lastKeyword") || "random";
      getGifs({ keyword: keywordToUse }).then(gifs => {
        setGifs(gifs);
        setLoading(false);
        localStorage.setItem("lastKeyword", keyword);
      });
    },
    [keyword, setGifs]
  );
  return { loading, gifs };
}
