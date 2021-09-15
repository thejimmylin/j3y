const SearchBar = ({ useTextSearch }) => {
  const [textSearched, setTextSearched] = useTextSearch;
  return (
    <div className="flex items-center max-w-xs bg-paper dark:bg-night-light transition-bg p-4 shadow-sm rounded-md">
      <span className="text-pencil dark:text-moonlight mx-4">
        <i className="fas fa-search"></i>
      </span>
      <input
        className="text-xl text-ink dark:text-light bg-paper dark:bg-night-light transition-bg placeholder-pencil dark:placeholder-moonlight w-full outline-none"
        value={textSearched}
        onChange={(e) => setTextSearched(e.target.value)}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
