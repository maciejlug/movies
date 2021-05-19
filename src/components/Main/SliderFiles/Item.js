import React from "react";
import { Link } from "react-router-dom";

function Item({ props, index, active, toRender }) {
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
          <Link
            to={`/${imdbID}`}
            key={imdbID}
            className="item"
            style={{ width: ` calc(100% / ${toRender})` }}
          >
            <img src={Poster} alt="" />
          </Link>
        );
      })}
    </div>
  );
}

export default Item;
