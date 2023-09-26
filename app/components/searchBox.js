'use client'
import { LiaCitySolid } from 'react-icons/lia';
import { GiModernCity } from 'react-icons/gi';
import { BsCalendarDate } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import Autocomplete from '@mui/material/Autocomplete';
import { getCityList } from '@/utils/get-cities-list';

export default function SearchBox({cities}){
    const [departureCity, setDepartureCity] = useState({});
    const [destinationCity, setDestinationCity] = useState({});
    const [travelDate, setTravelDate] = useState(dayjs(`${new Date()}`));
    const result= getCityList(cities);
    const departures = result[0];
    const destinations = result[1];




    return(
        <div className="flex flex-col w-4/5 sm:flex-row lg:w-[70%] xl:w-3/5 shadow-md my-5 items-center justify-between bg-[#DBE2EF] rounded-2xl">
            <div className=" flex flex-col sm:flex-row justify-evenly items-center w-3/4">
            <div className="flex items-center">
                <LiaCitySolid className="inline mr-2"/>
                <Autocomplete
                disablePortal
                options={departures}
                sx={{ width: 150 }}
                renderInput={(params) => <TextField variant="standard" {...params} label="Departure" />}
                onChange={(event, value) => {
                    setDepartureCity({name: value.label, id: value.id});
                  }}
                />
            </div>
            <div className="flex items-center">
                <GiModernCity className="inline mr-2"/>
                <Autocomplete
                disablePortal
                options={destinations}
                sx={{ width: 150 }}
                renderInput={(params) => <TextField variant="standard" {...params} label="Destination"/>}
                onChange={(event, value) => {
                    setDestinationCity({name: value.label, id: value.id});
                  }}
                />
            </div>
            <div>
                <BsCalendarDate className="inline mr-2"/>
                <DatePicker
                disablePast
                className="w-[60%]"
                value={travelDate}
                format="MMM DD"
                slotProps={{ textField: { variant: 'standard', } }}
                onChange={(newDate) => setTravelDate(dayjs(newDate))}
                />
            </div>

            </div>
            <Link
            href={{
                pathname: '/search',
                query: {...{from: departureCity.name, fromID: departureCity.id},
                        ...{to: destinationCity.name, toID: destinationCity.id}, 
                        traveldate: travelDate.toString()
                    }
            }} 
            className="p-2 my-2 sm:my-0 rounded hover:bg-[#398AB9] transition duration-300 cursor:pointer md:py-10 md:px-4 
            bg-[#3F72AF] text-white md:text-xl md:rounded-r-2xl">
            SEARCH BUSES
            </Link>

        </div>
    )
}