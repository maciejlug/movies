import React from "react";
import Default from "./default.jpg";
import { Link } from "react-router-dom";
import { Context } from "../context";

function ListboxItem({ props, setSearchState }) {
  const { Title, Poster, Year, Type, imdbID } = props;
  const { setSearchText } = React.useContext(Context);
  return (
    <Link
      to={`/${imdbID}`}
      onClick={() => {
        setSearchState(false);
        setSearchText("");
      }}
      onMouseDown={(event) => event.preventDefault()}
    >
      <div className="listbox-item">
        <img src={Poster === "N/A" ? Default : Poster} alt={Title} />
        <div className="listbox-item-info">
          <h3>{Title}</h3>
          <h5>
            {Year} {Type}
          </h5>
        </div>
      </div>
    </Link>
  );
}

export default ListboxItem;
