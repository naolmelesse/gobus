'use client'
import styles from './page.module.css';
import Cities from './components/Cities';
import SearchBox from './components/searchBox';
import GetTheApp from './components/getTheApp';
import Banner from './components/banner';
import BusProviders from "./components/bus-providers";
import Deliver from "./components/deliver";
import { fetchBusData, fetchCityData } from "@/utils/fetchData";


export default function Home() {
    const cities = fetchCityData();
    const busProviders = fetchBusData();
        if(cities == undefined || busProviders == undefined) return (
        <main className={styles.main}>
            <Banner/>
            <p className="text-center text-2xl">Loading... 😉 </p>
            <GetTheApp/>
            <Deliver/>
        </main>)
    
    
    return (
        <main className={styles.main}>
            <Banner/>
            <SearchBox cities={cities}/>
            <GetTheApp/>
            <Cities cities={cities}/>
            <BusProviders busProviders={busProviders}/>
            <Deliver/>
        </main>

    )
}
