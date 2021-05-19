import React, { useState } from "react";
import Navbar from "./navbarFiles/Navbar";
import MobileNavbar from "./navbarFiles/MobileNavbar";
import { Context } from "../Main/context";
function NavbarSecond({ size, handleSumbit, setSearchText, searchText }) {
  const [focusSearch, setFocusSearch] = useState(false);
  const { searchState, setSearchState } = React.useContext(Context);
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
