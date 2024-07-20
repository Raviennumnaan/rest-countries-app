import Image from "next/image";
import BorderCountryButton from "@/app/_components/BorderCountryButton";
import { getBorderCountry } from "@/app/_data/data-service";

async function Country({ country }) {
  const name = country.name.common;
  const flag = country.flags.png;
  const capital = country.capital.at(0);
  const topLevelDomain = country.tld.at(0);
  const { population, region, subregion } = country;
  const nativeName =
    Object.keys(country.name.nativeName).length !== 0
      ? country.name.nativeName[Object.keys(country.name.nativeName).at(0)]
          .official
      : "No Name";

  const currencies =
    Object.keys(country.currencies).length !== 0
      ? country.currencies[Object.keys(country.currencies).at(0)].name
      : "No Currency";
  const languages = Object.values(country.languages).join(", ");
  const borderCountryCodes = country.borders;
  const borderCountries = await Promise.all(
    borderCountryCodes.map((code) => getBorderCountry(code)),
  );

  return (
    <section className="mb-10 flex flex-col items-center justify-between gap-20 sm:flex-row">
      <div className="relative h-80 w-80 sm:h-[25rem] sm:w-[25rem]">
        <Image
          className="object-cover"
          src={flag}
          alt={country.flags.alt ? country.flags.alt : country.name.official}
          fill
        />
      </div>
      <div>
        <h3 className="mb-7 text-3xl font-bold">{name}</h3>
        <div className="flex flex-col justify-between gap-10 text-sm sm:flex-row sm:items-center">
          <div className="space-y-2 sm:space-y-1">
            <p className="space-x-3 sm:space-x-2">
              <span className="font-medium">Native Name:</span>
              <span className="font-thin">{nativeName}</span>
            </p>
            <p className="space-x-3 sm:space-x-2">
              <span className="font-medium">Population:</span>
              <span className="font-thin">{population}</span>
            </p>
            <p className="space-x-3 sm:space-x-2">
              <span className="font-medium">Region:</span>
              <span className="font-thin">{region}</span>
            </p>
            <p className="space-x-3 sm:space-x-2">
              <span className="font-medium">Sub Region:</span>
              <span className="font-thin">{subregion}</span>
            </p>
            <p className="space-x-3 sm:space-x-2">
              <span className="font-medium">Capital:</span>
              <span className="font-thin">{capital}</span>
            </p>
          </div>

          <div className="max-w-52 space-y-2 sm:space-y-1">
            <p className="space-x-3 sm:space-x-2">
              <span className="font-medium">Top Level Domain:</span>
              <span className="font-thin">{topLevelDomain}</span>
            </p>
            <p className="space-x-3 sm:space-x-2">
              <span className="font-medium">Currencies:</span>
              <span className="font-thin">{currencies}</span>
            </p>
            <p className="space-x-3 sm:space-x-2">
              <span className="font-medium">Languages:</span>
              <span className="font-thin">{languages}</span>
            </p>
          </div>
        </div>
        {borderCountries.length > 0 && (
          <div className="mt-7 flex gap-4 text-sm">
            <h4 className="translate-y-2 font-medium">Border Countries:</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3">
              {borderCountries.map((country) => (
                <BorderCountryButton country={country} key={country.cca3} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Country;
