"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter({ setSearch }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeFilter = searchParams.get("region") ?? "all";

  function handleFilter(e) {
    const region = e.target.value ?? "all";
    const params = new URLSearchParams(searchParams);
    params.set("region", region);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    setSearch("");
  }

  return (
    <form>
      <select
        name="filter"
        id="filter"
        className="cursor-pointer rounded-md border-2 border-dark-gray border-opacity-10 px-5 py-3 shadow-lg focus:outline-none focus:ring-1 focus:ring-dark-gray dark:bg-blue dark:text-white"
        value={activeFilter}
        onChange={handleFilter}
      >
        <option value="all">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </form>
  );
}

export default Filter;
