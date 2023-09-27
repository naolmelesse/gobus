import { updateTrip } from "@/utils/update-data";
import { generateTicketID } from "@/utils/generateTicket";
import { IoTicketOutline } from "react-icons/io5";
import dayjs from "dayjs";
import { useState, useEffect } from 'react';
import axios from "axios";

export default function TripDetails({data}){
    const [ticketData, setTicketData] = useState(null);
    const trip = data.metadata;
    updateTrip(trip.seats, trip.tripId);
    useEffect( () => {
        try{
            const tripData = {...trip, email: data.customer_details.email, name: data.customer_details.name, id: trip.tripId};
            axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tickets`, 
            {
                "data" : {
                    traveler_name: tripData.name,
                    traveler_email: tripData.email,
                    date: new Date(tripData.date).toISOString(),
                    ticket_id: generateTicketID(tripData.date, tripData.seats, tripData.id),
                    departure: tripData.from,
                    destination: tripData.to,
                    seat_number: tripData.seats,
                    slug: generateTicketID(tripData.date, tripData.seats, tripData.id),
                }
            }).then(res => {
                setTicketData(res.data.data.attributes);
            })
        }catch(err){
                console.log("error occurred: ", err.message);
        }
      }, [])
    return(
        <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex flex-col gap-5">
                <p className="font-bold">Trip from {trip.from} to {trip.to}</p>
                <p><span className="font-bold">Name: </span>{data.customer_details.name}</p>
                <p><span className="font-bold">Date:</span> {dayjs(trip.date).format("ddd-DD-MM hh:mm:A")}</p>
                <p><span className="font-bold">No of travelers:</span> {trip.quantity}</p>
                <p><span className="font-bold">Seats:</span> {trip.seats}</p>
                <p><span className="font-bold">Fare:</span> {trip.price}birr</p>
                <p><span className="font-bold">Total:</span> {trip.quantity} x {trip.price} = {trip.quantity * trip.price}birr</p>
            </div>

           {ticketData &&  (
                <div className="flex flex-col lg:flex-row gap-5 text-[#333] font-light rounded-xl border bg-[#D2E0FB] lg:divide-x divide-stone-300 py-5 px-2">
                    <div>
                        <IoTicketOutline className="text-5xl text-[#fff]"/>
                    </div>
                    <div className="pl-2">
                        <p><span className="font-medium">Name: </span>{ticketData.traveler_name}</p>
                        <p><span className="font-medium">Date:</span> {dayjs(ticketData.date).format("ddd-DD-MM hh:mm:A")}</p> 
                    </div>
                    <div className="pl-2">
                        <p><span className="font-medium">Ticket No. </span>{ticketData.ticket_id}</p>
                        <p><span className="font-medium">Seat/s: </span>{ticketData.seat_number}</p> 
                    </div>
                    <div className="pl-2">
                        <p><span className="font-medium">From:  </span>{ticketData.departure}</p>
                        <p><span className="font-medium">To: </span> {ticketData.destination}</p> 
                    </div>
                </div>
            )}

        </div>
    )
}