type City = string;

type State = {
  name: string;
  cities: City[];
};

type Country = {
  name: string;
  states: State[];
};

export const getStateOptions = (
  countryData: Country[],
  selectedCountry: string,
): string[] => {
  const currentCountry = countryData.find(c => c.name === selectedCountry);
  return currentCountry?.states.map(s => s.name) || [];
};

export const getCityOptions = (
  countryData: Country[],
  selectedCountry: string,
  selectedState: string,
): string[] => {
  const currentCountry = countryData.find(c => c.name === selectedCountry);
  const currentState = currentCountry?.states.find(
    s => s.name === selectedState,
  );
  return currentState?.cities || [];
};
