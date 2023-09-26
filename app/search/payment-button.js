import axios from "axios";
import getStripe from '@/utils/get-stripe';
import { headers } from 'next/dist/client/components/headers';

export default function Payment({bookingData, id, selectedSeats}){

    const handleCheckout = async () => {
        const stripePromise = await getStripe();
        const  {data}  = await axios.post('/api/stripe',
        {...bookingData, tripId: id, quantity: selectedSeats.length, seats: selectedSeats.join(', ')},
        {
          headers:{
          "Content-Type": "application/json",
          }
        }
        )
        await stripePromise.redirectToCheckout({ sessionId: data.id });
      };

    return(
        <button onClick={handleCheckout} className={`${selectedSeats.length > 0 ? '' : 'hidden'} bg-[#3F72AF] p-2 text-[#fefefe]`}>Proceed to Payment</button>
    )
}