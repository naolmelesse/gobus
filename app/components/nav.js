'use client';
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { BiBus, BiHome, BiSolidOffer } from "react-icons/bi";
import Profile from "./profile";


export default function Nav(){
    const [isOpen, setisOpen] = useState(false);
    return(
        <div
         className="flex md:items-center justify-between px-[10vw] mb-5 mx-auto py-4">
            <a className="text-lg text-[#3F72AF]" href="/">GoBus</a>
            <div className="flex flex-col items-end gap-5 md:flex-row w-3/5">
                <CiMenuBurger className="cursor-pointer text-2xl md:hidden hover:text-[#3F72AF]" onClick={() => setisOpen(!isOpen)}/>
                <div
                className={`${isOpen ? "": "hidden"} md:flex flex flex-col items-end md:items-center md:flex-row w-full justify-evenly`}>
                    <a className="text-lg flex items-center gap-2 hover:bg-stone-200 rounded transition duration-400 p-2" href="/"><BiHome className="inline"/> Home</a>          
                    <a className="text-lg flex items-center gap-2 hover:bg-stone-200 rounded transition duration-400 p-2" href=""><BiBus className="inline"/> Booking</a>
                    <a className="text-lg flex items-center gap-2 hover:bg-stone-200 rounded transition duration-400 p-2" href=""><BiSolidOffer className="inline"/> Offers</a>                     
                    <Profile/>
                </div>

            </div>
        </div>
    )
}