import React, { useContext } from "react";
import { SearchContext } from "./../context/SearchContext";

function IndexPage() {
  const { searchQuery, setSearchContext } = useContext(SearchContext);
  return (
    <div>
      Index
      {console.log("searchQuery", searchQuery)}
    </div>
  );
}

export default IndexPage;
