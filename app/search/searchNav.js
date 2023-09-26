import dayjs from 'dayjs';

export default function SearchNav({search}){

    return(
        <div className="w-full px-10">
            <p className="text-[0.9rem] font-bold my-1 py-2">{search.from} to {search.to} Bus</p>
            <hr />
            <p className="text-[0.9rem] font-bold my-1 py-4">{search.from} ~~ {search.to} - {dayjs(search.traveldate).format("DD-MMM")} - <button>Modify</button></p>
        </div>
    )
}