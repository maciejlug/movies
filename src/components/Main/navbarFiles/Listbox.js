import React from "react";
import ListboxItem from "./ListboxItem";
import { Context } from "../context";

function Listbox() {
  const { movies } = React.useContext(Context);

  return (
    <div
      className="listbox"
      style={movies ? { display: "block" } : { display: "none" }}
    >
      {movies &&
        movies.map((item) => <ListboxItem key={item.imdbID} props={item} />)}
    </div>
  );
}

export default Listbox;
