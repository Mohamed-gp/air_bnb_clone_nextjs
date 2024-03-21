import countries from "world-countries";

const formatedCountries = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  flag: country.flag,
  region: country.region,
  latlng: country.latlng, // lattidude and longitud
}));

const useCountries = () => {
  const getAll = () => formatedCountries;
  const getByValue = (value: string) =>
    formatedCountries.find((country) => country.value === value);
  return { getAll, getByValue };
};

export default useCountries;
