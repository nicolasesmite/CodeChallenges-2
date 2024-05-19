type Registry = {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
};

export function continentesRepresentados(array: Registry[]): boolean {
  const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const visitingContinents = new Set();

  for (const { continent } of array) {
    visitingContinents.add(continent);

    if (continents.length === visitingContinents.size) return true;
  }

  return false;
}

export function europeJsDevelopers(array: Registry[]): number {
  return array.filter(
    (registry) =>
      registry.continent === "Europe" && registry.language === "JavaScript"
  ).length;
}
