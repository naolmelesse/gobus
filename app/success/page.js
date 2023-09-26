'use client'
import Stripe from "stripe";
import TripDetails from "./trip-details";
// STRIPE_SECRET_KEY
const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export default async function Page({searchParams}){
    const data = await stripe.checkout.sessions.retrieve(
        searchParams.session_id
    );
    return(
        <div>
            <h3>Trip succesfully booked 🚀</h3>
            <TripDetails data={data}/>

        </div>
    )
}
