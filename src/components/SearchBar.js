import React from "react";
import { FaSearch } from "react-icons/fa"; // Pastikan impor dari react-icons

const SearchBar = () => {
  return (
    <div className="navbar navbar-white">
      <div className="container d-flex justify-content-center">
        {/* Form pencarian */}
        <form className="w-75 text-end position-relative">
          <input
            type="text"
            className="border ps-4 form-control"
            placeholder="Search Movies..."
            style={{ borderRadius: "20px" }}
          />
          <FaSearch
            id="search-icon"
            className="position-absolute"
            style={{
              top: "50%",
              left: "5px",
              transform: "translateY(-50%)",
              color: "#aaa",
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
