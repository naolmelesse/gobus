import { updateTrip } from "@/utils/update-data";
export default function TripDetails({data}){
    const trip = data.metadata;
    updateTrip(trip.seats, trip.tripId);
    return(
        <div>
            <p>Name: {data.customer_details.name}</p>
            <p>Trip from {trip.from} to {trip.to}</p>
            <p>Date: {trip.date}</p>
            <p>No of travelers: {trip.quantity}</p>
            <p>Fare: {trip.price}birr</p>
            <p>Seats: {trip.seats}</p>
            {/* <p>Total: {trip.quantity * trip.price.unit_amout/100}</p> */}
        </div>
    )
}