import { updateTrip } from "@/utils/update-data";
import { GenerateTicket } from "@/utils/generateTicket";

export default function TripDetails({data}){
    const trip = data.metadata;
    // updateTrip(trip.seats, trip.tripId);
    GenerateTicket({...trip, email: data.customer_details.email, name: data.customer_details.name});
    // console.log(ticket);
    return(
        <div className="w-4/5 mx-auto gap-5">
            <p>Name: {data.customer_details.name}</p>
            <p>Trip from {trip.from} to {trip.to}</p>
            <p>Date: {trip.date}</p>
            <p>No of travelers: {trip.quantity}</p>
            <p>Fare: {trip.price}birr</p>
            <p>Seats: {trip.seats}</p>
            <p>Total: {trip.quantity} x {trip.price} = {trip.quantity * trip.price}</p>
        </div>
    )
}