const Search = ({ search, searchValue }) => {
     return (
          <input
               className="search"
               placeholder="Search..."
               value={searchValue}
               onChange={(e) => {
                    search(e);
               }}
          />
     );
};

export default Search;
