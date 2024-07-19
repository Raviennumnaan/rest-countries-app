export async function getCountries() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital,cca3",
  );

  const data = await res.json();
  return data;
}

export async function getCountriesByRegion(region) {
  const res = await fetch(
    `https://restcountries.com/v3.1/region/${region}?fields=name,flags,region,population,capital,cca3`,
  );

  const data = await res.json();
  return data;
}

export async function getCountry(code) {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}?fields=name,flags,capital,tld,population,region,subregion,currencies,languages,borders`,
  );
  const data = await res.json();
  return data;
}

export async function getBorderCountry(code) {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}?fields=name,cca3`,
  );
  const data = await res.json();
  return data;
}
