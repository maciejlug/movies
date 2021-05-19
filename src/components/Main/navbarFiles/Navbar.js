import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Listbox from "./Listbox";
import Links from "./Links";

function Navbar({
  handleSumbit,
  setSearchText,
  searchText,
  focusSearch,
  setFocusSearch,
}) {
  return (
    <nav>
      <div className="logo">Movies</div>
      <Links />
      <form className="form-search" action="#">
        <input
          type="search"
          className="search-data"
          placeholder="Search"
          required
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          //onBlur={() => setFocusSearch(false)}
          onFocus={() => setFocusSearch(true)}
        />
        {searchText && focusSearch && <Listbox searchText={searchText} />}
        <button
          className="search-icon"
          type="submit"
          onClick={(e) => handleSumbit(e)}
        >
          <AiOutlineSearch />
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
