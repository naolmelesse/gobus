import { FROM_CITY_QUERY, TO_CITY_QUERY } from "@/lib/query";
import { useQuery } from "urql";

export function getFromCity(id){
    const cityQuery = FROM_CITY_QUERY(id);
    const [results] = useQuery({query: cityQuery});
    const {data, fetching, error} = results;
    if(fetching) console.log("wait...");
    if(error) console.log(error.message);
    if(data) return data.city.data.attributes;
}

export function getToCity(id){
    const cityQuery = TO_CITY_QUERY(id);
    const [results] = useQuery({query: cityQuery});
    const {data, fetching, error} = results;
    if(fetching) console.log("wait...");
    if(error) console.log(error.message);
    if(data) return data.city.data.attributes;
}

export function doTripsExist(fromCity, toCity){
    let tripsExist = false;
    const foundTrip = [];
    if(fromCity != undefined && toCity != undefined){
        const fromTrips = fromCity.trip_froms.data;
        const toTrips = toCity.trip_tos.data;
        fromTrips.forEach((tripFrom) => {
            toTrips.forEach((tripTo) => {
                if(tripFrom.id == tripTo.id) foundTrip.push(tripFrom);
            })
        })
    }
    if(foundTrip.length > 0) tripsExist = true;
    return {tripsExist, foundTrip};
}