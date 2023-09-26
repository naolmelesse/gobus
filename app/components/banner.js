import Image from "next/image";
export default function Banner(){
    return(
        <div className=" flex flex-col items-center justify-between w-4/5 lg:flex-row">
            <div className="flex flex-col items-center lg:items-start lg:w-1/2">
                <h1 className="text-5xl  text-[#3F72AF]">GoBus</h1>
                <p className="my-4 text-thin">Are you ready for an effortless and convenient
                 way to travel by bus? Look no further! GoBus
                  is your one-stop destination for booking bus tickets, checking 
                  schedules, and ensuring a comfortable journey from start to finish. 
                </p>
                <button className=" bg-[#3F72AF] py-2 px-4 rounded text-[#fefefe]">Book Now</button>
            </div>
            <Image
                src={"/images/bus.png"}
                width={700}
                height={600}
                alt="People boarding on a bus"
            />
        </div>
    )
}