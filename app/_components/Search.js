import { FaMagnifyingGlass } from "react-icons/fa6";

function Search({ search, setSearch }) {
  return (
    <form className="relative" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="shadow-lgtransition-all peer w-full rounded-md border-2 border-dark-gray border-opacity-10 px-3 py-2 placeholder:pl-11 placeholder:font-light placeholder:text-dark-gray focus:outline-none focus:ring-2 focus:ring-dark-gray focus:ring-opacity-40 sm:w-96 dark:bg-blue dark:text-white dark:placeholder:text-white"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a country"
      />
      {!search && (
        <FaMagnifyingGlass className="absolute left-7 top-1/2 -translate-y-1/2 text-sm text-dark-gray peer-focus:hidden dark:text-white" />
      )}
    </form>
  );
}

export default Search;
