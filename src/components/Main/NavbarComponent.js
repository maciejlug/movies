import React, { useState } from "react";
import Navbar from "./navbarFiles/Navbar";
import MobileNavbar from "./navbarFiles/MobileNavbar";

function NavbarSecond({ size, handleSumbit, setSearchText, searchText }) {
  const [searchState, setSearchState] = useState(false);
  const [focusSearch, setFocusSearch] = useState(false);

  return (
    <>
      {size > 792 && (
        <Navbar
          handleSumbit={handleSumbit}
          setSearchText={setSearchText}
          searchText={searchText}
          focusSearch={focusSearch}
          setFocusSearch={setFocusSearch}
        />
      )}
      {size <= 792 && (
        <MobileNavbar
          searchState={searchState}
          setSearchState={setSearchState}
          setSearchText={setSearchText}
          searchText={searchText}
          focusSearch={focusSearch}
          setFocusSearch={setFocusSearch}
          size={size}
        />
      )}
    </>
  );
}

export default NavbarSecond;
