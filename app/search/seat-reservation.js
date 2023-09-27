'use client'
import React, { useState } from 'react';
import { TbArmchair, TbSteeringWheel } from "react-icons/tb";
import Payment from './payment-button';

export default function SeatReservation({bookingData, id, reservedSeats}) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const toggleSeat = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const renderSeats = () => {
    const rows = 10; // Number of rows
    const seatsPerRow = 4; // Number of seats per row

    const seatElements = [];

    for (let row = 1; row <= rows; row++) {
      for (let seat = 1; seat <= seatsPerRow; seat++) {
        const seatNumber = `${row}${String.fromCharCode(64 + seat)}`;
        const isSelected = selectedSeats.includes(seatNumber);

        if(reservedSeats != null && !reservedSeats.includes(seatNumber)){
          seatElements.push(
            <div className={`flex flex-col items-center ${seat == 2 ? 'mr-8' : ''} ${seat == 3 ? 'ml-8' : ''}`}>
              <TbArmchair
                key={seatNumber+id}
                onClick={() => toggleSeat(seatNumber)}
                className={`text-4xl cursor-pointer p-1 ${
                   isSelected ? 'text-blue-500' : 'text-gray-400'
                }`}
              />
            </div>
          );
        }else{
          seatElements.push(
            <div className={`flex flex-col items-center ${seat == 2 ? 'mr-8' : ''} ${seat == 3 ? 'ml-8' : ''}`}>
              <TbArmchair
                key={seatNumber+id}
                className="text-4xl p-1 text-red-500"
              />
            </div>
          );
        }
      }
    }

    return seatElements;
  };

  



  return (
    <div className="w-2/3 flex items-center justify-evenly mt-8 text-center mx-auto">
      <h2 className="text-2xl font-semibold">Select seat:</h2>
      <div className="w-1/3 mx-auto border p-2 border-slate-300 rounded-3xl">
        <TbSteeringWheel className="text-2xl ml-8 my-4"/>
        <div className=" mx-auto  grid grid-cols-4 gap-y-1">{renderSeats()}</div>
      </div>
      <div className="w-1/3 text-left mt-4">
        <p className="my-2"><TbArmchair key="reserved" className={`text-3xl inline text-red-500 mr-2`}/>  Reserved</p>
        <p className="my-2"><TbArmchair key="available" className={`text-3xl inline text-gray-400 mr-2`}/>  Available</p>
        <p className="my-2"><TbArmchair key="selected" className={`text-3xl inline text-blue-400 mr-2`}/>  Selected</p>
        <p className="my-2">Selected Seats: {selectedSeats.join(', ')}</p>
        <Payment selectedSeats={selectedSeats} bookingData={bookingData} id={id}/>
      </div>
    </div>
  );
};


