import Link from "next/link";

function BorderCountryButton({ country }) {
  return (
    <Link
      className="rounded-md border border-dark-gray border-opacity-10 px-3 py-2 shadow-md transition-all hover:bg-dark-blue hover:text-white dark:bg-blue dark:hover:bg-very-dark-blue"
      href={country.cca3}
    >
      {country.name.common}
    </Link>
  );
}

export default BorderCountryButton;
