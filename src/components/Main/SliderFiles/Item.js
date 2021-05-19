import React from "react";
import { Link } from "react-router-dom";

function Item({ props, index, active }) {
  return (
    <div
      className={
        index === active
          ? "slide"
          : active < index
          ? "slide next"
          : "slide prev"
      }
    >
      {props.map((item) => {
        const { imdbID, Poster } = item;
        return (
          <Link to={`/${imdbID}`} key={imdbID} className="item">
            <article>
              <img src={Poster} alt="" />
            </article>
          </Link>
        );
      })}
    </div>
  );
}

export default Item;
