import axios from "axios";
import dayjs from "dayjs";

export function GenerateTicket(tripData){

    try{
        let response;
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
            response = res.data;
        })
        return response;
    }catch(err){
            console.log("error occurred: ", err.message);
    }
}

export function generateTicketID(date, seats, id){
    const ticketdate = new Date(date);
    return "TNR" + dayjs(ticketdate).format("DDMMHH") + id+ seats.split(", ").join("");
}