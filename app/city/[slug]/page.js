'use client'
import { GET_CITY_QUERY } from "@/lib/query";
import { fetchDataBySlug } from "@/utils/fetchData";

export default function Page({ params }){
    const city = fetchDataBySlug(GET_CITY_QUERY, params.slug);
    if(city)  
    return(
        <div className="w-4/5 h-[60vh] py-10 mx-[auto] flex gap-[5rem]">
           <div>
                <img 
                    src={city.cities.data[0].attributes.image.data.attributes.formats.thumbnail.url}
                    alt={city.cities.data[0].attributes.name}
                />
           </div>
           <div>
               <h1 className="text=gray-800 text-2xl">{city.cities.data[0].attributes.name}, {city.cities.data[0].attributes.country}</h1>
               <br />
               <p>{city.cities.data[0].attributes.description}</p>
           </div>
        </div>
    )
}