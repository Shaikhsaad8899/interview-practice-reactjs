  import React, { useState ,useEffect} from "react";
  import useDebounce from "../customHooks/UseDebounce";

  function SearchInput() {
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 2000);
    useEffect(() => {
      if (debouncedSearchTerm) {
        console.log("Fetching results for:", debouncedSearchTerm);
      }
    }, [debouncedSearchTerm]);

    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <p>Debounced Value: {debouncedSearchTerm}</p>
      </div>
    );
  }

  export default SearchInput;
