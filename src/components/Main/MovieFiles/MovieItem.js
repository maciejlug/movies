import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context";
import Default from "../navbarFiles/default.jpg";

function Item() {
  const { setSearchId, movie, isLoading } = React.useContext(Context);
  const { imdbID } = useParams();

  useEffect(() => {
    setSearchId(imdbID);
  }, [imdbID]);

  if (isLoading) {
    return <div>loading</div>;
  }
  const {
    Title,
    Actors,
    Poster,
    Country,
    Released,
    Genre,
    Runtime,
    BoxOffice,
    Plot,
    Director,
    Writer,
  } = movie;

  return (
    <main className="movieItem">
      <section className="content">
        <div className="movie-item">
          <img src={Poster === "N/A" ? Default : Poster} alt={Title} />
          <div className="movie-info">
            <p className="title">{Title}</p>
            <p className="info">
              <span>Director: </span>
              {Director}
            </p>
            <p className="info">
              <span>Writers: </span>
              {Writer}
            </p>
            <p className="info">
              <span>Stars: </span>
              {Actors}
            </p>
            <p className="info">
              <span>Released in:</span> {Released}
            </p>
            <p className="info">
              <span>Country: </span>
              {Country}
            </p>
            <p className="info">
              <span>Genre: </span>
              {Genre}
            </p>
            <p className="info">
              <span>Duration: </span>
              {Runtime}
            </p>
            <p className="info">
              <span>BoxOffice: </span>
              {BoxOffice}
            </p>
            <p className="info">
              <span>Plot: </span>
              {Plot}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Item;
