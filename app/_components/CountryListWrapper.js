"use client";
import Search from "@/app/_components/Search";
import Filter from "@/app/_components/Filter";
import CountryList from "@/app/_components/CountryList";
import { useEffect, useState } from "react";
import Message from "@/app/_components/Message";

function CountryListWrapper({ countries }) {
  const [search, setSearch] = useState("");
  const [searchedCountries, setSearchedCountries] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setErr("");
    async function getCountries() {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${search}?fields=name,flags,region,population,capital,cca3`,
          { signal: controller.signal },
        );

        const countries = await res.json();
        if (countries.status === 404) return setErr("Invalid Country :)");
        setSearchedCountries(countries);
      } catch (error) {
        if (error.name === "AbortError") return;
      }
    }

    if (search === "") setSearchedCountries([]);
    else getCountries();

    return () => {
      controller.abort();
    };
  }, [search]);

  return (
    <div className="mx-auto mb-10 max-w-5xl space-y-8 px-7 py-4">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <Search search={search} setSearch={setSearch} />
        <Filter setSearch={setSearch} />
      </div>
      {err === "" ? (
        <CountryList
          countries={
            searchedCountries.length > 0 ? searchedCountries : countries
          }
        />
      ) : (
        <Message message={err} />
      )}
    </div>
  );
}

export default CountryListWrapper;
