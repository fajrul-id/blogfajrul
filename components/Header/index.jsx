import React from "react";
import Searchbar from "./Searchbar";
import Menu from "./Menu";

const Header = () => {
  return (
    <nav className="w-full sticky top-0">
      <div className="bg-white w-full flex justify-between items-center mx-auto px-8 h-20 shadow relative">
        {/* logo */}
        <div className="w-2/3">
          <img src="/logo.png" className="h-16" />
        </div>
        {/* end logo */}
        <div className="flex justify-end w-full">
          {/* Menu And SearchBar */}
          <Menu />
          <Searchbar className="hidden md:flex max-w-xs " />
          <Searchbar className="md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:-translate-x-1/3" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
