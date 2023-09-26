import TripCard from "./trip-card";

export default function Trips({buses, tripData, tripsExist}){

    if(!tripsExist){
        return(
            <h1 className="text-center">No buses found.</h1>
        )
    }
    return(
        <div className="w-4/5">
             <div className="flex justify-between ">
                <div className="">
                    <h3>{buses.length} buses found</h3>
                </div>
                {/* <div className="w-3/4 flex justify-evenly"> */}
                    <div className="flex w-1/4 justify-center gap-8">
                        <p>Departure</p>
                        <p>Duration</p>
                        <p>Arrival</p>
                        <p>Ratings</p>
                        <p>Fare</p>
                    </div>
                {/* </div> */}
                    <div>
                        <p>Seats available</p>
                    </div>
            </div>
            {buses.map((bus) =>  <TripCard key={bus.id} id={bus.id} bus={bus.attributes} tripData={tripData}/> )}
        </div>
    )
}