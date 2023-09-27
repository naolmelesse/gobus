import { formatDate, getTripDuration } from "@/lib/formatDate";
import SeatReservation from "./seat-reservation";
import { useState } from "react";
import dayjs from "dayjs";

export default function TripCard({bus, tripData, id}){
    const departureTime = formatDate(tripData.travelDate, bus.departure);
    const arrivalTime = formatDate(tripData.travelDate, bus.arrival);
    const duration = getTripDuration(tripData.travelDate, bus.departure, bus.arrival);
    const bookingData = {from: tripData.from, to: tripData.to, date: new Date(`${dayjs(tripData.travelDate).format("YYYY-MM-DD")}T${bus.departure}`).toISOString(), price: bus.fare};
    const [seatsVisible, setSeatsVisible] = useState(false);
    return(
        <div className="flex flex-col my-3 border px-2 py-4">
            <div className="flex justify-between">
                <div className="">
                    <h3 className=" font-medium">{bus.bus.data.attributes.bus_provider_name}</h3>
                    <p>{bus.amenities}</p>
                </div>
                <div className="w-3/4 flex justify-around">
                    <div className="flex justify-center gap-10">
                        <p>{departureTime}</p>
                        <p>{duration}</p>
                        <p>{arrivalTime}</p>
                        <p>{bus.bus.data.attributes.rating}</p>
                        <p>{bus.fare}</p>
                    </div>
                    <div>
                        <p>{bus.available_seats}</p>
                        <button className="bg-[#3F72AF] px-1 font-light transit duration-300 text-[#fefefe] hover:bg-[#3c6392]" onClick={() => setSeatsVisible(!seatsVisible)}>{seatsVisible? 'HIDE' : 'VIEW'} SEATS</button>
                    </div>
                </div>
            </div>
            <div className={`${seatsVisible? '' : 'hidden'} `}>
                <SeatReservation reservedSeats={bus.reserved_seats == null ? [] : bus.reserved_seats.seats} id={id} bookingData={bookingData}/>
            </div>
        </div>
    )
}