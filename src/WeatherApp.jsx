import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
    const[weatherInfo,setWeatherInfo]=useState({
        city:"Wonderland",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:27.05,
        humidity:49,
        weather:"haze",
    });

    let  updateInfo= (newInfo) => {
        setWeatherInfo(newInfo);
    };
    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App  by IITG</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}