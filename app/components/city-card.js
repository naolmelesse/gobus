import { useRouter } from "next/navigation";
export default function CityCard({city}){
    const route = useRouter();

    return(
        <div className=" flex drop-shadow-lg p-4 cursor-pointer rounded-xl items-center bg-[#fefefe]" onClick={() => route.push(`/city/${city.slug}`)}>
                <img
                className=" w-[5rem] h-[5rem] rounded-xl"
                    src={`${city.image.data.attributes.formats.thumbnail.url}`}
                    alt={city.name}
                />
            <div className="ml-5">
                <h2>{city.name}</h2>
                {/* <p>bus providers</p> */}
            </div>
        </div>
    )
}