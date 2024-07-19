import { getCountry } from "@/app/_data/data-service";
import Country from "@/app/_components/Country";
import Link from "next/link";
import { FaLeftLong } from "react-icons/fa6";

export async function generateMetadata({ params }) {
  const { countryCode } = params;
  const country = await getCountry(countryCode);

  return {
    title: country.name.common,
  };
}

async function CountryDetailPage({ params }) {
  const { countryCode } = params;
  const country = await getCountry(countryCode);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-14 px-7 py-14 dark:text-white">
      <Link
        className="flex w-24 items-center justify-center gap-2 rounded-md border border-dark-gray border-opacity-10 px-3 py-2 text-dark-gray shadow-md transition-all hover:bg-dark-blue hover:text-white dark:bg-blue dark:text-white dark:hover:bg-very-dark-blue"
        href="/"
      >
        <span>
          <FaLeftLong />
        </span>
        Back
      </Link>
      <Country country={country} />
    </div>
  );
}

export default CountryDetailPage;
