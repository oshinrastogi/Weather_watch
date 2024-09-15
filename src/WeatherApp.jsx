import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo,setweatherInfo]=useState({
        city:"Delhi",
        feels_like: 310.88,
        humidity: 70,
        temp: 304.2,
        temp_max: 304.2,
        temp_min: 304.2,
        weather: "haze"
    })

    let updateInfo=(newinfo)=>{
        setweatherInfo(newinfo);
    }
    return(
        <>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo}/>
        </>
    )
}