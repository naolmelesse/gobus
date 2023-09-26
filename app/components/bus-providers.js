import BusCompanyCard from "./bus-company-card";

export default function BusProviders({busProviders}){

    return(
        <div className="w-4/5 mb-20">
            <h1 className="text-4xl">Private buses</h1>
            <p className="my-4">Select from different bus providers</p>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {busProviders.map((bus) =>  <BusCompanyCard key={bus.id} bus={bus.attributes} />)}
            </div>
        </div>
    )
}