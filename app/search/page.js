'use client'
import SearchFilter from "./search-filters";
import SearchNav from "./searchNav";
import Trips from "./trips";
import { useSearchParams } from 'next/navigation';
import { getFromCity, getToCity, doTripsExist } from "@/utils/searchTrips";

export default function Search(){
    const searchParams = useSearchParams();
    const search = {
        from: searchParams.get('from'),
        fromID:  searchParams.get('fromID'),
        to: searchParams.get('to'),
        toID:  searchParams.get('toID'),
        traveldate: searchParams.get('traveldate')
        };
    const fromData = getFromCity(search.fromID);
    const toData = getToCity(search.toID);
    const {foundTrip, tripsExist} = doTripsExist(fromData, toData);
    return(
        <div>
            <SearchNav search={search}/>
            <div className="flex">
                <SearchFilter/>
                <Trips buses={foundTrip} tripsExist={tripsExist} tripData={search}/>
            </div>
        </div>
    )
}