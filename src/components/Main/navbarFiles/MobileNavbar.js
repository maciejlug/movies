import React, { useState } from "react";
import Links from "./Links";
import MobileSearch from "./MobileSearch";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";

function MobileNavbar({
  handleSumbit,
  setSearchText,
  searchState,
  setSearchState,
  searchText,
  focusSearch,
  setFocusSearch,
  size,
}) {
  const [menuState, setMenuState] = useState(false);
  return (
    <>
      <nav className="nav-mobile">
        {!searchState && (
          <>
            <div onClick={() => setMenuState(!menuState)} className="menu-icon">
              {menuState ? <CgClose /> : <FaBars />}
            </div>
            <div className="logo">Movies</div>
            <button
              onClick={() => setSearchState(!searchState)}
              className="mobile-search"
            >
              <AiOutlineSearch className="mobile-search" />
            </button>
            <div
              className="side-menu"
              style={
                menuState
                  ? { transform: "translate(0%)" }
                  : { transform: "translate(-100%)" }
              }
            >
              <Links setMenuState={setMenuState} size={size} />
            </div>
          </>
        )}
        {searchState && (
          <MobileSearch
            searchState={searchState}
            setSearchState={setSearchState}
            setSearchText={setSearchText}
            searchText={searchText}
            focusSearch={focusSearch}
            setFocusSearch={setFocusSearch}
          />
        )}
      </nav>
    </>
  );
}

export default MobileNavbar;
