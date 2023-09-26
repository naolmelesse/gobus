
export default function SearchFilter(){
    return(
        <div className="w-1/5 inline flex flex-col items-start p-10 gap-5">
            <h3 className="text-[0.8rem] font-bold">FILTERS</h3>
            <hr />
            <div>
                <h3 className="text-[0.8rem] font-bold">BUS TYPES</h3>
                <div className="flex flex-col gap-1 text-[0.7rem] font-light py-2">
                   <div className="flex gap-3"> <input type="checkbox" name="before" id="" /> <p>AC</p> </div>
                   <div className="flex gap-3"> <input type="checkbox" name="before" id="" /> <p>NON-AC</p> </div>
                   <div className="flex gap-3"> <input type="checkbox" name="before" id="" /> <p>SEATER</p> </div>
                   <div className="flex gap-3"> <input type="checkbox" name="before" id="" /> <p>SLEEPER</p> </div>
                </div>
            </div>
            <div>
                <h3 className="text-[0.8rem] font-bold">DEPARTURE TIME</h3>
                <div className="flex flex-col gap-1 text-[0.7rem] font-light py-2">
                   <div className="flex gap-3"> <input type="checkbox" name="before" id="" /> <p>BEFORE 6:00AM (0) </p> </div>
                   <div className="flex gap-3"> <input type="checkbox" name="before" id="" /> <p>6:00AM - 12:00PM (9)</p> </div>
                   <div className="flex gap-3"> <input type="checkbox" name="before" id="" /> <p>12:00PM 6:00PM (6)</p> </div>
                   <div className="flex gap-3"> <input type="checkbox" name="before" id="" /> <p>After 6:00PM (2)</p> </div>
                </div>
            </div>
            <div>
                <h3 className="text-[0.8rem] font-bold">ARRIVAL TIME</h3>
                <div className="flex flex-col gap-1 text-[0.7rem] font-light py-2">
                  <div className="flex gap-3"> <input type="checkbox" name="before" id="" />  <p>BEFORE 6:00AM (0) </p> </div>
                  <div className="flex gap-3"> <input type="checkbox" name="before" id="" />  <p>6:00AM - 12:00PM (9)</p> </div>
                  <div className="flex gap-3"> <input type="checkbox" name="before" id="" />  <p>12:00PM 6:00PM (6)</p> </div>
                  <div className="flex gap-3"> <input type="checkbox" name="before" id="" />  <p>After 6:00PM (2)</p> </div>
                </div>
            </div>
            <div>
                <h3 className="text-[0.8rem] font-bold">AMENITIES</h3>
                <div className="flex flex-col gap-1 text-[0.7rem] font-light py-2">
                    <div className="flex gap-3"> <input type="checkbox" name="before" id="" /> <p>AC</p> </div>
                    <div className="flex gap-3"> <input type="checkbox" name="before" id="" /> <p>NON-AC</p> </div>
                    <div className="flex gap-3"> <input type="checkbox" name="before" id="" /> <p>SEATER</p> </div>
                    <div className="flex gap-3"> <input type="checkbox" name="before" id="" /> <p>SLEEPER</p> </div>
                </div>
            </div>
        </div>
    )
}