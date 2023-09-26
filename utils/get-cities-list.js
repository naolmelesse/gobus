
export function getCityList(cities){
    const fetchedCities = [];
    cities.map((city) => fetchedCities.push({ label: city.attributes.name, id: city.id}));
    let departures = fetchedCities;
    let destinations = fetchedCities.slice(1);
    return [departures, destinations];
}