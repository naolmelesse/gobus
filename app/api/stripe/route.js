import Stripe from "stripe";
const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);
import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";

export const POST = async function handler(request){
  try {
      const response = NextResponse.next();
      const sessionUser = await getSession(request, response);
      const user = sessionUser?.user;
      const data = await request.json();

      if(user){
        const stripeID = createOrGetCustomer(user.email);
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
                    success_url: `${process.env.BASE_URL}/success?&session_id={CHECKOUT_SESSION_ID}`,
                    cancel_url: `${process.env.BASE_URL}/canceled`,
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
                    success_url: `${process.env.BASE_URL}/success?&session_id={CHECKOUT_SESSION_ID}`,
                    cancel_url: `${process.env.BASE_URL}/canceled`,
                  });
                  return NextResponse.json(session);
      }
        } catch (error) {
            console.log("error occurred in stripe API", error.message);
        }
}

async function checkIfCustomerExists(email) {
  try {
    const customers = await stripe.customers.list({ email: email });

    // If there are customers with the same email, return the first one
    if (customers.data.length > 0) {
      return customers.data[0].id;
    }

    // If no customer with the email is found, return null
    return null;
  } catch (error) {
    console.error('Error checking if customer exists:', error);
    throw error;
  }
}

// Create a new customer or get the existing customer's ID
async function createOrGetCustomer(email) {
  try {
    const existingCustomerId = await checkIfCustomerExists(email);

    if (existingCustomerId) {
      // Customer already exists, return the existing customer's ID
      return existingCustomerId;
    } else {
      // Create a new customer
      const newCustomer = await stripe.customers.create({
        email: email,
        // Add any additional customer information as needed
      });

      // Return the new customer's ID
      return newCustomer.id;
    }
  } catch (error) {
    console.error('Error creating or getting customer:', error);
    throw error;
  }
}