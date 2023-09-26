import Image from "next/image";

export default function GetTheApp(){
    return(

            <div className="w-full my-20 bg-[#3F72AF] p-8 items-center flex flex-col md:flex-row justify-evenly">
                <h1 className="text-4xl text-center text-white">Download our app for easy-booking</h1>
                <div>
                    <Image
                        className="cursor-pointer"
                        src={"/images/stores.png"}
                        width={150}
                        height={267}
                        alt="Get The App on Playstore or Appstore"
                    />
                </div>
            </div>
    )
}