import Stripe from "stripe";
const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);
import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";

export const POST = async function handler(request, response){
  try {
      const sessionUser = await getSession(NextRequest, NextResponse);
      const user = sessionUser?.user;
      const data = await request.json();
      if(user){
        const stripeID = user['https://gobus-liard.vercel.app/stripe_customer_id'];
        
        const session = await stripe.checkout.sessions.create({
                submit_type: "pay",
                  mode: "payment",
                  customer: stripeID,
                  payment_method_types: ["card"],
                  allow_promotion_codes: true,
                  metadata: {seats: data.seats, date: data.date, from: data.from, to: data.to, price: data.price, quantity: data.quantity, tripId: data.tripId},
                  line_items: [{
                    price_data: {
                      currency: "etb",
                      product_data: {
                        name: `Trip from ${data.from} to ${data.to}`,
                      },
                      unit_amount: data.price * 100,
                    },
                    quantity: data.quantity,
                  },
                ],
                    success_url: `https://gobus-liard.vercel.app/success?&session_id={CHECKOUT_SESSION_ID}`,
                    cancel_url: `https://gobus-liard.vercel.app/canceled`,
                  });
                  return NextResponse.json(session);
      }else{
        const session = await stripe.checkout.sessions.create({
                submit_type: "pay",
                  mode: "payment",
                  payment_method_types: ["card"],
                  allow_promotion_codes: true,
                  metadata: {seats: data.seats, date: data.date, from: data.from, to: data.to, price: data.price, quantity: data.quantity, tripId: data.tripId},
                  line_items: [{
                    price_data: {
                      currency: "etb",
                      product_data: {
                        name: `Trip from ${data.from} to ${data.to}`,
                      },
                      unit_amount: data.price * 100,
                    },
                    quantity: data.quantity,
                  },
                ],
                    success_url: `https://gobus-liard.vercel.app/success?&session_id={CHECKOUT_SESSION_ID}`,
                    cancel_url: `https://gobus-liard.vercel.app/canceled`,
                  });
                  return NextResponse.json(session);
      }
        } catch (error) {
            console.log("error occurred in stripe API", error.message);
           return NextResponse.json(error.message);
        }
}