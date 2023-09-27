import axios from "axios";
import { useQuery } from "urql";
import { GET_TRIP_QUERY } from "@/lib/query";

export async function updateTrip(booked, id){
    const query = GET_TRIP_QUERY(id);
    const [results] = useQuery({query: query});
    const {data, fetching, error} = results;
    if(fetching) console.log("loading...TRIP");
    if(error) console.log(error.message);
    if(data){
        const fetchedData = data.trip.data.attributes;
        const res_seats = fetchedData.reserved_seats;
        const ava_seats = fetchedData.available_seats;
        let new_res_seats;
        if(booked.length > 2){
            new_res_seats= booked.split(", ");
        }else{
            new_res_seats= [booked];
        }
        
        if(res_seats != null || undefined){
          new_res_seats.push(...res_seats.seats);
        }
        await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/trips/${id}`,
            {
                "data": {
                    "reserved_seats": {seats: new_res_seats},
                    "available_seats": 40 - new_res_seats.length
                }
            }
        )
    }
  ;}
  