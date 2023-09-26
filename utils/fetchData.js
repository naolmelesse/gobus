import { useQuery } from "urql";
import { CITY_QUERY, BUS_PROVIDERS_QUERY } from "@/lib/query";

export function fetchCityData(){
    const [results] = useQuery({query: CITY_QUERY});
    const {data, fetching, error} = results;
    if(fetching) console.log("wait...");
    if(error) console.log(error.message);
    if(data) return data.cities.data;
}

export function fetchBusData(){
    const [results] = useQuery({query: BUS_PROVIDERS_QUERY});
    const {data, fetching, error} = results;
    if(fetching) console.log("wait...");
    if(error) console.log(error.message);
    if(data) return data.busOperators.data;
}

export function fetchDataBySlug(query, slug){
    const [result] = useQuery({query: query, variables: {slug: slug}});
    const {data, fetching, error} = result;
    if(fetching) console.log("loading... specific data");
    if(error) console.log(error.message);
    if(data) return data;

}