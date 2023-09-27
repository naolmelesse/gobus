import axios from "axios";
import dayjs from "dayjs";

export async function GenerateTicket(data){
    // console.log(dayjs(data.date).format("hh:mmA ddd-DD-MMM"));
    try{
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tickets`, 
        {
            "data" :{
                traveler_name: data.name,
                traveler_email: data.email,
                date: dayjs(data.date).format("MM/DD/YYYY HH:mm"),
                ticket_id: generateTicketID(data.date, data.seats),
                departure: data.from,
                destination: data.to,
                seat_number: data.seats,
                slug: generateTicketID(data.date, data.seats),
            }
        })
        console.log(response);
    }catch(err){
            console.log("error occurred: ", err.message);
    }
    // .then((res) => {
    //     console.log(res);
    //     // return res.data;
    // }).catch(err => {
    //     console.log("error occurred: ", err.message);
    // })
}

function generateTicketID(date, seats){
    const ticketdate = new Date(date);
    return "TNR" + dayjs(ticketdate).format("DDMMHH") + seats.split(", ").join("");
}