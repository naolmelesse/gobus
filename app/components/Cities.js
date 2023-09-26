import CityCard from "./city-card";

export default function Cities({cities}){

    return(
        <div className="w-3/5 sm:w-4/5">
            <h1 className="text-4xl">Plan your perfect trip</h1>
            <p className="my-4">Search buses to our popular destinations</p>
            <div className=" grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
                {cities.map((city) => <CityCard key={city.id} city={city.attributes}/>)}
            </div>
        </div>
        )
}