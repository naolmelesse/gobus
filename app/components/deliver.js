import { FiGift } from "react-icons/fi";
import { LiaHeadsetSolid } from "react-icons/lia";
import { IoPricetagOutline } from "react-icons/io5";

export default function Deliver(){
    return(
        <div className="flex flex-col items-center gap-5 w-4/5 py-5">
            <h2 className="text-4xl">We promise to deliver</h2>
            <div className="flex flex-col lg:flex-row items-center lg:justify-evenly w-full">
                <div className="w-2/3 mb-5 py-4 md:mb-0 md:w-[20rem] md:h-[18rem] flex flex-col items-center justify-center gap-5 shadow-lg bg-[#DBE2EF] md:p-2 text-center rounded-xl">
                    <FiGift className="text-[5rem]"/>
                    <h3 className="text-xl text-gray-800">Unmatched Benefits</h3>
                    <p>We take care of your travel beyond ticketing by providing you with innovative and unique benefits</p>
                </div>
                <div className="w-2/3 mb-5 py-4 md:mb-0 md:w-[20rem] md:h-[18rem] flex flex-col items-center justify-center gap-5 shadow-lg bg-[#DBE2EF] md:p-2 text-center rounded-xl">
                    <LiaHeadsetSolid className="text-[5rem]"/>
                    <h3 className="text-xl text-gray-800">24/7 Customer Service</h3>
                    <p>We put our experience and relationships to good use and are available to solve your travel issues</p>
                </div>
                <div className="w-2/3 mb-5 py-4 md:mb-0 md:w-[20rem] md:h-[18rem] flex flex-col items-center justify-center gap-5 shadow-lg bg-[#DBE2EF] md:p-2 text-center rounded-xl">
                    <IoPricetagOutline className="text-[5rem]"/>
                    <h3 className="text-xl text-gray-800">Lowest prices</h3> 
                    <p>We always give you the lowest price with the best partner offers. We always have offers for you.</p>
                </div>
            </div>

        </div>
    )
}