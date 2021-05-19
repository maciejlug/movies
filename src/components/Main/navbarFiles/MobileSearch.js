import React from "react";
import { CgClose } from "react-icons/cg";
import Listbox from "./Listbox";
function MobileSearch({
  searchState,
  setSearchState,
  setSearchText,
  searchText,
  focusSearch,
  setFocusSearch,
}) {
  return (
    <>
      <form className="mobile-search-form" action="#" autoFocus>
        <input
          className="search-data-mobile"
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          onBlur={() => setFocusSearch(false)}
          onFocus={() => setFocusSearch(true)}
        />
        {searchText && focusSearch && <Listbox searchText={searchText} />}

        <button
          className="search-mobile"
          onClick={() => setSearchState(!searchState)}
        >
          <CgClose />
        </button>
      </form>
    </>
  );
}

export default MobileSearch;
