import Image from "next/image";
import Link from "next/link";

function CountryCard({ country }) {
  return (
    <Link
      href={`/${country.cca3}`}
      className="mx-auto flex w-72 cursor-pointer flex-col rounded-md shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:w-64 md:w-52 dark:bg-blue dark:text-white"
    >
      <div className="relative h-36 w-full">
        <Image
          className="rounded-md object-cover"
          src={country.flags.svg}
          alt={country.name.common}
          fill
        />
      </div>
      <div className="px-4 py-3">
        <h3 className="mb-3 text-lg font-bold">{country.name.common}</h3>
        <p className="text-base font-light">
          <span className="mr-2 font-semibold">Population:</span>
          {country.population}
        </p>
        <p className="text-base font-light">
          <span className="mr-2 font-semibold">Region:</span>
          {country.region}
        </p>
        <p className="text-base font-light">
          <span className="mr-2 font-semibold">Capital:</span>
          {country.capital.at(0)}
        </p>
      </div>
    </Link>
  );
}

export default CountryCard;
