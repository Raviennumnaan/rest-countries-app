import CountryCard from "@/app/_components/CountryCard";

function CountryList({ countries }) {
  return (
    <section className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {countries.map((country) => (
        <CountryCard country={country} key={country.name.official} />
      ))}
    </section>
  );
}

export default CountryList;
