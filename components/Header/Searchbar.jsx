"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import "./header.css";
const Searchbar = ({ className }) => {
  const clearInput = () => {
    const input = document.getElementsByTagName("input")[0];
    input.value = "";
  };
  return (
    <div className={"flex items-center p-1 " + className}>
      <form className="searchBar hover:border-gray-200 hover:border-4 valid:hover:w-[200px] hover:w-[200px] hover:md:w-[400px]">
        <input className="searchBarInput" type="search" required />
        <FaSearch className="fa" />
        <a className="searchButton" id="clear-btn">
          Clear
        </a>
      </form>
    </div>
  );
};

export default Searchbar;
