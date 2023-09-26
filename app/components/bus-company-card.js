import { VscPass } from "react-icons/vsc";
import {AiFillStar} from "react-icons/ai";
import {BiSolidCity} from "react-icons/bi";

export default function BusCompanyCard({bus}){
    return(
        <div className="flex flex-col drop-shadow-xl px-2 py-4 bg-[#fefefe] rounded-xl">
                <img
                    className="w-[90%] mx-[auto] rounded-2xl"
                    src={bus.bus_image.data.attributes.formats.small.url}
                    alt={bus.bus_provider_name}
                />
            <div className="flex flex-col sm:flex-row justify-between sm:items-center px-4 py-1">
                <div>
                    <h3 className="text-2xl font-medium">{bus.bus_provider_name}</h3>
                    <p className="py-1 font-light flex items-center gap-1" ><AiFillStar className="text-gray-600 inline"/> {bus.rating} </p>
                </div>
                <div className="flex justify-between sm:block">
                    <p>Verified <VscPass style={{color: "green", display: "inline"}}/></p>
                    <p><BiSolidCity style={{ display: "inline"}} /> {bus.cities.data.length} cities</p>
                </div>
            </div>
        </div>
    )
}