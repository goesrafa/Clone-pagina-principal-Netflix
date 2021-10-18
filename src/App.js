import React, { useEffect, useState } from "react";

import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";

export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      //Mostrando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);
  /**3º Header
      2º Destaque
      1º As listas
      4º Rodapé basico
   */
  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  )
}