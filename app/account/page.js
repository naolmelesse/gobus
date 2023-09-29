import Stripe from "stripe";
import dayjs from "dayjs";
import { BsPeople, BsTicket } from "react-icons/bs";
const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";

export default async function Page({params, searchParams}){
    const { user } = await getSession();
    const { data } = await stripe.checkout.sessions.list({customer_details: {email: user.email}});

    return(
       user && ( 
        <div className="w-4/5 mx-auto">
        <div className="flex justify-between">
          <h2 className="text-xl">{user.name}</h2>
          <p className="text-xl">{user.email}</p>
        </div>
        <div className="flex flex-col gap-5 py-5">
            <h2 className="text-xl font-medium"> Booking history</h2>
            <table className="text-center">
              <tr>
                  <th>Trip ID</th>
                  <th>Seats</th>
                  <th>Trip Date</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Trip Fare</th>
                  <th className="flex items-center gap-1 justify-center"><BsPeople/> Travelers</th>
              </tr>
              {data.map((trip) => (
                <tr>
                    <td className="px-2 py-4">{trip.metadata.tripId}</td>
                    <td className="px-2 py-4">{ trip.metadata.seats }</td>
                    <td className="px-2 py-4">{dayjs(trip.metadata.date).format("MMM DD, YYYY")}</td>
                    <td className="px-2 py-4">{trip.metadata.from}</td>
                    <td className="px-2 py-4">{trip.metadata.to}</td>
                    <td className="px-2 py-4">{ trip.metadata.price }</td>
                    <td className="px-2 py-4">{trip.metadata.quantity}</td>
                </tr>
              ))}
            </table>
        </div>
      </div>
        )
    )
}
