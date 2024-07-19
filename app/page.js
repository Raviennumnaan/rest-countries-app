import { getCountries, getCountriesByRegion } from "@/app/_data/data-service";
import CountryListWrapper from "./_components/CountryListWrapper";

async function Home({ searchParams }) {
  const { region } = searchParams;
  const countries =
    region === "all" || !region
      ? await getCountries()
      : await getCountriesByRegion(region);

  return <CountryListWrapper countries={countries} />;
}

export default Home;
